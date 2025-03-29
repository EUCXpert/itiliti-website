# Backup-ProjectFiles.ps1
# Script to create backups of custom project files with a flat directory structure

param(
    [Parameter(Mandatory=$false)]
    [string]$ProjectName = (Split-Path -Leaf (Get-Location)),
    
    [Parameter(Mandatory=$false)]
    [string]$BackupRoot = "C:\Development\Backups"
)

# Create a timestamp for the backup folder
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupDir = Join-Path -Path $BackupRoot -ChildPath "$ProjectName\$timestamp"
$manifestPath = Join-Path -Path $backupDir -ChildPath "FileManifest.txt"

# Directories to exclude
$excludeDirs = @(
    "node_modules",
    ".next",
    ".git",
    "dist",
    "build",
    ".cache",
    "out"
)

# File extensions to include
$includeExtensions = @(
    "*.js",
    "*.jsx",
    "*.ts",
    "*.tsx",
    "*.css",
    "*.scss",
    "*.md",
    "*.mdx",
    "tailwind.config.js",
    "postcss.config.js",
    "package.json",
    "next.config.js",
    "tsconfig.json"
)

# Function to check if a path contains any of the excluded directories
function Test-ExcludedPath {
    param (
        [string]$Path
    )
    
    foreach ($dir in $excludeDirs) {
        if ($Path -match "\\$dir\\") {
            return $true
        }
    }
    
    return $false
}

# Create backup directory if it doesn't exist
if (-not (Test-Path -Path $backupDir)) {
    Write-Host "Creating backup directory: $backupDir"
    New-Item -Path $backupDir -ItemType Directory -Force | Out-Null
}

# Initialize manifest file
"# File Manifest for $ProjectName - Created on $(Get-Date)" | Out-File -FilePath $manifestPath
"# Original Location -> Backup Location" | Out-File -FilePath $manifestPath -Append

# Dictionary to track file name collisions
$fileNameMap = @{}

# Get all files matching the extensions we're interested in
Write-Host "Scanning for project files..."
$allFiles = Get-ChildItem -Path . -Recurse -File -Include $includeExtensions | Where-Object {
    -not (Test-ExcludedPath -Path $_.FullName)
}

Write-Host "Found $($allFiles.Count) files to backup."

# Process each file
foreach ($file in $allFiles) {
    $relativePath = $file.FullName.Substring((Get-Location).Path.Length + 1)
    
    # Create a unique filename to handle collisions
    $baseFileName = $file.Name
    $uniqueFileName = $baseFileName
    $counter = 1
    
    while ($fileNameMap.ContainsKey($uniqueFileName)) {
        $fileNameExt = [System.IO.Path]::GetExtension($baseFileName)
        $fileNameWithoutExt = [System.IO.Path]::GetFileNameWithoutExtension($baseFileName)
        $uniqueFileName = "{0}_{1}{2}" -f $fileNameWithoutExt, $counter, $fileNameExt
        $counter++
    }
    
    # Add to the filename map
    $fileNameMap[$uniqueFileName] = $relativePath
    
    # Determine destination path
    $destPath = Join-Path -Path $backupDir -ChildPath $uniqueFileName
    
    # Copy file
    Copy-Item -Path $file.FullName -Destination $destPath -Force
    
    # Add to manifest
    "$relativePath -> $uniqueFileName" | Out-File -FilePath $manifestPath -Append
}

# Output summary
Write-Host "Backup completed successfully!"
Write-Host "Total files backed up: $($allFiles.Count)"
Write-Host "Backup location: $backupDir"
Write-Host "File manifest created at: $manifestPath"

# Create a README with instructions
$readmePath = Join-Path -Path $backupDir -ChildPath "README.txt"
@"
# Project Backup: $ProjectName
Created on: $(Get-Date)

This backup contains custom project files with a flattened directory structure.
The original file paths are preserved in the FileManifest.txt file.

To see the original location of each file, refer to the manifest.
"@ | Out-File -FilePath $readmePath

Write-Host "README created at: $readmePath"