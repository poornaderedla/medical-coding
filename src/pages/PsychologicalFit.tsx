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

const PsychologicalFit = () => {
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
      question: "I enjoy organizing information into clear, structured categories",
      type: "likert"
    },
    {
      id: "q2", 
      question: "I prefer working with detailed rules and procedures rather than ambiguous guidelines",
      type: "likert"
    },
    {
      id: "q3",
      question: "I find satisfaction in repetitive tasks when they serve a meaningful purpose",
      type: "likert"
    },
    {
      id: "q4",
      question: "I am comfortable spending long periods focusing on detail-oriented work",
      type: "likert"
    },
    {
      id: "q5",
      question: "I prefer to double-check my work for accuracy rather than move quickly to the next task",
      type: "likert"
    }
  ];

  const likertOptions = [
    { value: "1", label: "Strongly Disagree" },
    { value: "2", label: "Disagree" },
    { value: "3", label: "Neutral" },
    { value: "4", label: "Agree" },
    { value: "5", label: "Strongly Agree" }
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
              <div className="text-sm font-medium text-foreground">40% Complete</div>
              <ProgressBar value={40} className="w-32 mt-1" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Steps */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <StepIndicator 
            steps={steps}
            currentStep="psychological"
            completedSteps={["introduction"]}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Psychological Fit Evaluation</h2>
            <p className="text-lg text-muted-foreground">
              This section evaluates your personality traits and work preferences to determine 
              how well they align with the demands of medical coding.
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
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {likertOptions.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                          <Label 
                            htmlFor={`${question.id}-${option.value}`}
                            className="text-sm cursor-pointer"
                          >
                            {option.label}
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
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Introduction
            </Button>
            
            <Button 
              onClick={() => navigate("/technical")}
              disabled={!isComplete}
              className="flex items-center gap-2"
            >
              Continue to Technical Aptitude
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PsychologicalFit;