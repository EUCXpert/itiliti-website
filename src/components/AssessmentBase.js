import React, { useState } from 'react';
import { Lock, CheckSquare, ArrowRight, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

/**
 * Base component for all assessment types
 * Handles the common assessment flow: intro → questions → email collection → results
 */
const AssessmentBase = ({ 
  title, 
  description, 
  icon, 
  questions, 
  results,
  onBackToHub // callback to return to assessment hub
}) => {
  const [currentStep, setCurrentStep] = useState('intro');
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [score, setScore] = useState(null);
  const [resultDetails, setResultDetails] = useState(null);

  const handleAnswerSelect = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    
    // Move to next question or show email collection
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score before showing email collection
      calculateScore(newAnswers);
      setCurrentStep('email');
    }
  };

  const calculateScore = (answerData) => {
    // Calculate total possible score (sum of max values for each question)
    const totalPossible = questions.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.value)), 0);
    
    // Calculate user's score
    const userScore = Object.keys(answerData).reduce((sum, questionId) => 
      sum + answerData[questionId], 0);
    
    // Calculate percentage
    const percentage = Math.round((userScore / totalPossible) * 100);
    
    // Set score
    setScore(percentage);
    
    // Determine which result to show based on score
    if (percentage >= 80) {
      setResultDetails(results.high);
    } else if (percentage >= 50) {
      setResultDetails(results.medium);
    } else {
      setResultDetails(results.low);
    }
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    // In a real implementation, you would save the contact info and assessment results
    // to your CRM or database here
    setCurrentStep('results');
  };

  const restartAssessment = () => {
    setCurrentStep('intro');
    setAnswers({});
    setCurrentQuestion(0);
    setEmail('');
    setCompany('');
    setName('');
    setScore(null);
    setResultDetails(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
      {currentStep === 'intro' && (
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              {icon}
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
          <p className="text-gray-700 text-center mb-8">{description}</p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setCurrentStep('questions')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Start Assessment
            </button>
            <button 
              onClick={onBackToHub}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Back to Assessments
            </button>
          </div>
        </div>
      )}

      {currentStep === 'questions' && (
        <div className="p-8">
          <div className="mb-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-500">Question {currentQuestion + 1} of {questions.length}</h3>
            <span className="text-sm text-gray-500">{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-6">{questions[currentQuestion].question}</h2>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button 
                  key={index} 
                  className="w-full p-4 border border-gray-300 rounded-lg text-left hover:border-blue-500 hover:bg-blue-50 transition-colors"
                  onClick={() => handleAnswerSelect(questions[currentQuestion].id, option.value)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {currentStep === 'email' && (
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Almost there!</h2>
          <p className="text-gray-700 text-center mb-8">
            Enter your details below to receive your personalized assessment results and recommendations.
          </p>
          
          <form onSubmit={handleSubmitEmail} className="space-y-4 max-w-md mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input 
                type="text" 
                id="company" 
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                required
              />
            </div>
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Get My Results
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to our privacy policy and terms of service.
              We'll send you your results and may contact you about our services.
            </p>
          </form>
        </div>
      )}

      {currentStep === 'results' && resultDetails && (
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4">
              {score >= 80 ? (
                <CheckCircle className="w-10 h-10 text-green-600" />
              ) : score >= 50 ? (
                <AlertTriangle className="w-10 h-10 text-yellow-600" />
              ) : (
                <XCircle className="w-10 h-10 text-red-600" />
              )}
            </div>
            <h2 className="text-2xl font-bold mb-2">{resultDetails.title}</h2>
            <div className="flex justify-center items-center mb-4">
              <div className="relative w-48 h-48">
                <div className="flex items-center justify-center absolute inset-0">
                  <span className="text-4xl font-bold">{score}%</span>
                </div>
                <svg className="w-48 h-48" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#edf2f7"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke={score >= 80 ? "#48bb78" : score >= 50 ? "#ecc94b" : "#f56565"}
                    strokeWidth="10"
                    strokeDasharray={`${score * 2.83} ${283 - score * 2.83}`}
                    strokeDashoffset="70.75"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
            </div>
            <p className="text-gray-700 mb-4 max-w-2xl mx-auto">{resultDetails.summary}</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h3 className="font-bold text-lg mb-4">Key Findings</h3>
            <ul className="space-y-3">
              {resultDetails.findings.map((finding, index) => (
                <li key={index} className="flex items-start">
                  <CheckSquare className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{finding}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className={`p-6 rounded-xl ${score >= 80 ? 'bg-green-50' : score >= 50 ? 'bg-yellow-50' : 'bg-red-50'}`}>
              <h3 className="font-bold text-lg mb-3">
                {score >= 80 ? 'Strengths' : score >= 50 ? 'Areas of Caution' : 'Critical Risks'}
              </h3>
              <ul className="space-y-2">
                {resultDetails.strengths.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className={`w-5 h-5 ${score >= 80 ? 'text-green-500' : score >= 50 ? 'text-yellow-500' : 'text-red-500'} mr-2 flex-shrink-0 mt-1`} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">Recommendations</h3>
              <ul className="space-y-2">
                {resultDetails.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="font-bold text-xl mb-2">Ready for the next step?</h3>
                <p className="text-white text-opacity-90">Schedule a consultation to discuss how we can address these findings.</p>
              </div>
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors whitespace-nowrap">
                Book Consultation
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center flex justify-center space-x-4">
            <button 
              onClick={restartAssessment}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              Retake Assessment
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button 
              onClick={onBackToHub}
              className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
            >
              Back to Assessments
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssessmentBase;