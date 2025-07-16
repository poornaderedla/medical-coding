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
  ArrowRight
} from "lucide-react";

const TechnicalAptitude = () => {
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Should I Learn Medical Coding?</h1>
              <p className="text-sm text-muted-foreground">Comprehensive Career Assessment & Guidance</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-foreground">60% Complete</div>
              <ProgressBar value={60} className="w-32 mt-1" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Steps */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <StepIndicator 
            steps={steps}
            currentStep="technical"
            completedSteps={["introduction", "psychological"]}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Technical Aptitude Assessment</h2>
            <p className="text-lg text-muted-foreground">
              This section tests your logical reasoning, numerical aptitude, attention to detail, 
              and basic knowledge of medical coding concepts.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Section Progress</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <ProgressBar value={progress} />
          </div>

          {/* Questions */}
          <div className="space-y-8">
            {questions.map((question, index) => (
              <Card key={question.id} className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {index + 1}. {question.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={answers[question.id] || ""}
                    onValueChange={(value) => handleAnswerChange(question.id, value)}
                  >
                    <div className="space-y-3">
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center space-x-2">
                          <RadioGroupItem 
                            value={optionIndex.toString()} 
                            id={`${question.id}-${optionIndex}`} 
                          />
                          <Label 
                            htmlFor={`${question.id}-${optionIndex}`}
                            className="cursor-pointer"
                          >
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-12">
            <Button 
              variant="outline" 
              onClick={() => navigate("/psychological")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Psychological Fit
            </Button>
            
            <Button 
              onClick={() => navigate("/wiscar")}
              disabled={!isComplete}
              className="flex items-center gap-2"
            >
              Continue to WISCAR Analysis
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechnicalAptitude;