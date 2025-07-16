import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ProgressBar";
import { StepIndicator } from "@/components/StepIndicator";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  Brain, 
  Code, 
  Target, 
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Star,
  ArrowRight,
  Download
} from "lucide-react";

const Results = () => {
  const navigate = useNavigate();

  const steps = [
    { id: "introduction", title: "Introduction", icon: BookOpen },
    { id: "psychological", title: "Psychological Fit", icon: Brain },
    { id: "technical", title: "Technical Aptitude", icon: Code },
    { id: "wiscar", title: "WISCAR Analysis", icon: Target },
    { id: "results", title: "Your Results", icon: TrendingUp }
  ];

  // Mock results data
  const overallScore = 84;
  const recommendation = "Yes";
  const psychologicalScore = 88;
  const technicalScore = 76;
  const wiscarScores = {
    will: 90,
    interest: 85,
    skill: 70,
    cognitive: 88,
    ability: 82,
    realWorld: 80
  };

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
              <div className="text-sm font-medium text-foreground">100% Complete</div>
              <ProgressBar value={100} className="w-32 mt-1" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Steps */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <StepIndicator 
            steps={steps}
            currentStep="results"
            completedSteps={["introduction", "psychological", "technical", "wiscar"]}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Overall Result */}
          <Card className="border-2 border-medical-success bg-medical-success/5 mb-8">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CheckCircle className="h-8 w-8 text-medical-success" />
                <h2 className="text-3xl font-bold text-foreground">
                  {recommendation}: Learn Medical Coding
                </h2>
              </div>
              <div className="text-6xl font-bold text-medical-success mb-4">{overallScore}</div>
              <p className="text-xl text-muted-foreground">Overall Confidence Score</p>
            </CardContent>
          </Card>

          {/* Key Insights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-medical-warning" />
                Key Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground text-lg leading-relaxed">
                You show excellent structural alignment and attention to detail, which are critical 
                for coding success. Your high conscientiousness and systematic thinking make you 
                well-suited for the methodical nature of medical coding work. While your current 
                domain knowledge is limited, your strong learning aptitude indicates you can 
                successfully acquire the necessary skills.
              </p>
            </CardContent>
          </Card>

          {/* Detailed Scores */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Assessment Scores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Psychological Fit</span>
                    <span className="font-medium">{psychologicalScore}/100</span>
                  </div>
                  <ProgressBar value={psychologicalScore} />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Technical Aptitude</span>
                    <span className="font-medium">{technicalScore}/100</span>
                  </div>
                  <ProgressBar value={technicalScore} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>WISCAR Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(wiscarScores).map(([key, score]) => (
                  <div key={key}>
                    <div className="flex justify-between mb-1">
                      <span className="capitalize">{key}</span>
                      <span className="font-medium">{score}/100</span>
                    </div>
                    <ProgressBar value={score} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-medical-primary" />
                Recommended Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    1
                  </div>
                  <div>
                    <strong>Start with ICD-10-CM Basics</strong>
                    <p className="text-muted-foreground">Begin with foundational courses through AAPC or Coursera</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    2
                  </div>
                  <div>
                    <strong>Learn HIPAA Compliance</strong>
                    <p className="text-muted-foreground">Essential for working with medical records</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    3
                  </div>
                  <div>
                    <strong>Practice with Real Cases</strong>
                    <p className="text-muted-foreground">Apply your knowledge with practical coding exercises</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    4
                  </div>
                  <div>
                    <strong>Pursue CPC Certification</strong>
                    <p className="text-muted-foreground">Get certified through AAPC for career readiness</p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Alternative Paths */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Related Career Paths to Consider</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-accent/50">
                  <h4 className="font-semibold">Health Information Management</h4>
                  <p className="text-sm text-muted-foreground">Broader healthcare data management role</p>
                </div>
                <div className="p-4 rounded-lg bg-accent/50">
                  <h4 className="font-semibold">Medical Billing Specialist</h4>
                  <p className="text-sm text-muted-foreground">Focus on insurance claims and billing</p>
                </div>
                <div className="p-4 rounded-lg bg-accent/50">
                  <h4 className="font-semibold">Clinical Data Analyst</h4>
                  <p className="text-sm text-muted-foreground">Healthcare analytics and reporting</p>
                </div>
                <div className="p-4 rounded-lg bg-accent/50">
                  <h4 className="font-semibold">Healthcare Compliance</h4>
                  <p className="text-sm text-muted-foreground">Ensure regulatory compliance</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Full Report
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/")}>
              Retake Assessment
            </Button>
            <Button variant="outline" size="lg">
              Share Results
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;