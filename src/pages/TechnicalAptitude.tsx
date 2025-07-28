import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ProgressBar } from "@/components/ProgressBar";
import { StepIndicator } from "@/components/StepIndicator";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  Brain, 
  Code, 
  Target, 
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const TechnicalAptitude = ({ onComplete }) => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const steps = [
    { id: "introduction", title: "Introduction", icon: BookOpen },
    { id: "psychological", title: "Psychological Fit", icon: Brain },
    { id: "technical", title: "Technical Aptitude", icon: Code },
    { id: "wiscar", title: "WISCAR Analysis", icon: Target },
    { id: "results", title: "Your Results", icon: TrendingUp }
  ];

  const questions = [
    {
      id: "q1",
      question: "What does ICD-10 stand for?",
      type: "multiple-choice",
      options: [
        "International Classification of Diseases, 10th Revision",
        "Internal Coding Database, 10th Version",
        "International Clinical Documentation, 10th Edition",
        "Internal Care Diagnosis, 10th Release"
      ],
      correct: 0
    },
    {
      id: "q2",
      question: "A patient receives 15 units of insulin. If the total daily dose is 45 units, what percentage was this injection?",
      type: "multiple-choice", 
      options: [
        "25%",
        "33.3%",
        "40%",
        "50%"
      ],
      correct: 1
    },
    {
      id: "q3",
      question: "Which code format is used for medical procedures?",
      type: "multiple-choice",
      options: [
        "ICD-10-CM",
        "CPT",
        "HCPCS",
        "All of the above"
      ],
      correct: 3
    },
    {
      id: "q4",
      question: "In the following series, what comes next? A1, B2, C3, D4, ?",
      type: "multiple-choice",
      options: [
        "E5",
        "F6", 
        "E4",
        "D5"
      ],
      correct: 0
    },
    {
      id: "q5",
      question: "Which of these represents proper attention to detail? Find the error in: 'Patient has diabetis mellitus type 2'",
      type: "multiple-choice",
      options: [
        "No errors found",
        "Should be 'diabetes mellitus'",
        "Should be 'Type II'",
        "Should be 'diabetic mellitus'"
      ],
      correct: 1
    }
  ];

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const isComplete = questions.every(q => answers[q.id]);
  const progress = (Object.keys(answers).length / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="w-6 h-6 text-green-600" />
                <span>Technical Aptitude Assessment</span>
              </CardTitle>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Question {Object.keys(answers).length + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
                <ProgressBar value={progress} className="h-2" />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-green-700 mb-2">
                  Technical Aptitude
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {questions[Object.keys(answers).length]?.question}
                </h3>
                <RadioGroup
                  value={answers[questions[Object.keys(answers).length]?.id] || ''}
                  onValueChange={(value) => handleAnswerChange(questions[Object.keys(answers).length]?.id, value)}
                  className="space-y-3"
                >
                  {questions[Object.keys(answers).length]?.options?.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label 
                        htmlFor={`option-${index}`} 
                        className="text-sm cursor-pointer flex-1 py-2 px-3 rounded hover:bg-white/50 transition-colors"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Evaluating: Technical Aptitude
                </div>
                <Button 
                  onClick={() => {
                    if (Object.keys(answers).length < questions.length - 1) {
                      // Go to next question
                      handleAnswerChange(questions[Object.keys(answers).length + 1]?.id, '');
                    } else {
                      // Complete section
                      onComplete(answers);
                    }
                  }}
                  disabled={!answers[questions[Object.keys(answers).length]?.id]}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {Object.keys(answers).length === questions.length - 1 ? 'Complete Section' : 'Next Question'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TechnicalAptitude;