# Define the path to the folder containing the .jsx files
$folderPath = "C:\temp\jsx\files"

# Define the exact code to be removed
$codeToRemove = @'
{/* Footer */}
<footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between">
      <div className="mb-8 md:mb-0">
        <h3 className="text-xl font-bold mb-4">Modern Microsoft MSP</h3>
        <p className="text-gray-400 max-w-md">Enterprise DNA, boutique delivery. Specialized Microsoft managed services for alternative investment firms.</p>
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/security" className="hover:text-white">Security & Compliance</Link></li>
            <li><Link to="/microsoft-optimization" className="hover:text-white">Microsoft Optimization</Link></li>
            <li><Link to="/private-msp" className="hover:text-white">Private MSP</Link></li>
            <li><Link to="/cxo-services" className="hover:text-white">CxO Advisory</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Segments</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/segments/hedge-funds" className="hover:text-white">Hedge Funds</Link></li>
            <li><Link to="/segments/private-equity" className="hover:text-white">Private Equity</Link></li>
            <li><Link to="/segments/venture-capital" className="hover:text-white">Venture Capital</Link></li>
            <li><Link to="/segments/family-offices" className="hover:text-white">Family Offices</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
            <li><Link to="/#contact" className="hover:text-white">Contact</Link></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
      <p>© 2025 Modern Microsoft MSP. All rights reserved.</p>
    </div>
  </div>
</footer>
'@

# Get all .jsx files in the folder
$jsxFiles = Get-ChildItem -Path $folderPath -Filter *.jsx

# Loop through each .jsx file and remove the specified code
foreach ($file in $jsxFiles) {
    $fileContent = Get-Content -Path $file.FullName -Raw
    $updatedContent = $fileContent -replace [regex]::Escape($codeToRemove), ""
    Set-Content -Path $file.FullName -Value $updatedContent
}

Write-Host "Code removal complete for all .jsx files in the folder."
