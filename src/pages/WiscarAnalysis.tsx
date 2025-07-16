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

const WiscarAnalysis = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const steps = [
    { id: "introduction", title: "Introduction", icon: BookOpen },
    { id: "psychological", title: "Psychological Fit", icon: Brain },
    { id: "technical", title: "Technical Aptitude", icon: Code },
    { id: "wiscar", title: "WISCAR Analysis", icon: Target },
    { id: "results", title: "Your Results", icon: TrendingUp }
  ];

  const wiscarSections = [
    {
      title: "Will (Perseverance & Discipline)",
      questions: [
        {
          id: "will1",
          question: "When faced with a challenging coding problem, I tend to stick with it until I find the solution"
        },
        {
          id: "will2", 
          question: "I can maintain focus on detailed work for several hours without getting frustrated"
        }
      ]
    },
    {
      title: "Interest (Fit with Medical Coding Role)",
      questions: [
        {
          id: "interest1",
          question: "I find healthcare terminology and medical concepts genuinely interesting"
        },
        {
          id: "interest2",
          question: "I would enjoy working behind the scenes to support healthcare operations"
        }
      ]
    },
    {
      title: "Skill (Current Abilities)",
      questions: [
        {
          id: "skill1",
          question: "I am comfortable using Excel or similar spreadsheet software"
        },
        {
          id: "skill2",
          question: "I have experience with data entry or similar detail-oriented work"
        }
      ]
    },
    {
      title: "Cognitive Readiness (Mental Processing)",
      questions: [
        {
          id: "cognitive1",
          question: "I can quickly identify patterns and follow logical sequences"
        },
        {
          id: "cognitive2",
          question: "I excel at tasks requiring sustained attention to detail"
        }
      ]
    }
  ];

  const likertOptions = [
    { value: "1", label: "Strongly Disagree" },
    { value: "2", label: "Disagree" },
    { value: "3", label: "Neutral" },
    { value: "4", label: "Agree" },
    { value: "5", label: "Strongly Agree" }
  ];

  const allQuestions = wiscarSections.flatMap(section => section.questions);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const isComplete = allQuestions.every(q => answers[q.id]);
  const progress = (Object.keys(answers).length / allQuestions.length) * 100;

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
              <div className="text-sm font-medium text-foreground">80% Complete</div>
              <ProgressBar value={80} className="w-32 mt-1" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Steps */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <StepIndicator 
            steps={steps}
            currentStep="wiscar"
            completedSteps={["introduction", "psychological", "technical"]}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">WISCAR Framework Analysis</h2>
            <p className="text-lg text-muted-foreground">
              WISCAR evaluates Will, Interest, Skill, Cognitive Readiness, Ability to Learn, 
              and Real-World Alignment to provide a comprehensive career fit assessment.
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

          {/* WISCAR Sections */}
          <div className="space-y-8">
            {wiscarSections.map((section, sectionIndex) => (
              <Card key={sectionIndex} className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl text-medical-primary">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.questions.map((question, questionIndex) => (
                    <div key={question.id}>
                      <h4 className="font-medium mb-3">
                        {sectionIndex + 1}.{questionIndex + 1} {question.question}
                      </h4>
                      <RadioGroup
                        value={answers[question.id] || ""}
                        onValueChange={(value) => handleAnswerChange(question.id, value)}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                          {likertOptions.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value={option.value} 
                                id={`${question.id}-${option.value}`} 
                              />
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
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-12">
            <Button 
              variant="outline" 
              onClick={() => navigate("/technical")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Technical Aptitude
            </Button>
            
            <Button 
              onClick={() => navigate("/results")}
              disabled={!isComplete}
              className="flex items-center gap-2"
            >
              View My Results
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WiscarAnalysis;