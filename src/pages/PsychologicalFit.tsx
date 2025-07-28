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

const PsychologicalFit = ({ onComplete }) => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-6 h-6 text-purple-600" />
                <span>Psychological Fit Assessment</span>
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
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-purple-700 mb-2">
                  Psychological Fit
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {questions[Object.keys(answers).length]?.question}
                </h3>
                <RadioGroup
                  value={answers[questions[Object.keys(answers).length]?.id] || ''}
                  onValueChange={(value) => handleAnswerChange(questions[Object.keys(answers).length]?.id, value)}
                  className="space-y-3"
                >
                  {likertOptions.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`option-${index}`} />
                      <Label 
                        htmlFor={`option-${index}`} 
                        className="text-sm cursor-pointer flex-1 py-2 px-3 rounded hover:bg-white/50 transition-colors"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Evaluating: Psychological Fit
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
                  className="bg-purple-600 hover:bg-purple-700"
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

export default PsychologicalFit;