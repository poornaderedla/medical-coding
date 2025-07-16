import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProgressBar } from "@/components/ProgressBar";
import { StepIndicator } from "@/components/StepIndicator";
import { FeatureCard } from "@/components/FeatureCard";
import { CareerCard } from "@/components/CareerCard";
import { 
  BookOpen, 
  Brain, 
  Code, 
  Target, 
  TrendingUp,
  Clock,
  Award,
  Users,
  Shield,
  FileText,
  Stethoscope,
  Activity,
  Database,
  Search,
  CheckCircle,
  BarChart3,
  Clipboard
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const steps = [
    { id: "introduction", title: "Introduction", icon: BookOpen },
    { id: "psychological", title: "Psychological Fit", icon: Brain },
    { id: "technical", title: "Technical Aptitude", icon: Code },
    { id: "wiscar", title: "WISCAR Analysis", icon: Target },
    { id: "results", title: "Your Results", icon: TrendingUp }
  ];

  const currentStep = "introduction";
  const completedSteps: string[] = [];

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
              <div className="text-sm font-medium text-foreground">20% Complete</div>
              <ProgressBar value={20} className="w-32 mt-1" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Steps */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <StepIndicator 
            steps={steps}
            currentStep={currentStep}
            completedSteps={completedSteps}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20 bg-accent/30">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Discover Your Medical Coding Career Potential
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Take our comprehensive assessment to evaluate your psychological fit, 
                technical readiness, and career alignment for a future in Medical Coding.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>25-30 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Personalized Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Career Guidance</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="px-8"
                onClick={() => navigate("/psychological")}
              >
                Start Assessment
                <TrendingUp className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* What is Medical Coding */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Stethoscope className="h-6 w-6 text-medical-primary" />
            <h2 className="text-2xl font-bold text-foreground">What is Medical Coding?</h2>
          </div>
          
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground text-lg leading-relaxed">
                  Medical coding involves transforming healthcare diagnoses, procedures, medical services, 
                  and equipment into universal <strong>alphanumeric codes</strong> (e.g., ICD-10, CPT, HCPCS). 
                  These codes are essential for billing, insurance claims, data analysis, and legal compliance in healthcare.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <FeatureCard
                title="Universal Standards"
                description="Standardized coding systems used globally"
                icon={Shield}
                variant="primary"
              />
              <FeatureCard
                title="Data Analysis"
                description="Essential for healthcare analytics and reporting"
                icon={BarChart3}
                variant="secondary"
              />
              <FeatureCard
                title="Compliance"
                description="Critical for legal and regulatory requirements"
                icon={CheckCircle}
                variant="accent"
              />
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-medical-secondary" />
            <h2 className="text-2xl font-bold text-foreground">Career Opportunities</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CareerCard
              title="Medical Coder"
              description="Assign standard codes to diagnoses and procedures"
            />
            <CareerCard
              title="Clinical Data Analyst"
              description="Analyze healthcare data for insights and reporting"
            />
            <CareerCard
              title="Medical Billing Specialist"
              description="Handle insurance claims and billing processes"
            />
            <CareerCard
              title="Health Information Technician"
              description="Manage and maintain digital health records"
            />
            <CareerCard
              title="Coding Auditor"
              description="Review and ensure accuracy of medical codes"
            />
            <CareerCard
              title="Compliance Officer"
              description="Ensure healthcare coding meets regulatory standards"
            />
          </div>
        </section>

        {/* Ideal Traits */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Brain className="h-6 w-6 text-medical-accent" />
            <h2 className="text-2xl font-bold text-foreground">Who Succeeds in This Field?</h2>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-medical-success" />
                    <span>Detail-oriented and methodical thinkers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-medical-success" />
                    <span>Enjoy repetitive but purposeful tasks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-medical-success" />
                    <span>Comfortable with rules and structure</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-medical-success" />
                    <span>Analytical yet patient mindset</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-medical-success" />
                    <span>Strong memory and recall abilities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-medical-success" />
                    <span>Ability to work independently</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What You'll Discover */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">What You'll Discover</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Assessment Modules:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    1
                  </div>
                  <span className="font-medium">Psychological Fit Evaluation</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    2
                  </div>
                  <span className="font-medium">Technical Aptitude Testing</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    3
                  </div>
                  <span className="font-medium">WISCAR Framework Analysis</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Your Results Include:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-medical-primary"></div>
                  <span>Personalized fit score (0-100)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-medical-primary"></div>
                  <span>Detailed trait analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-medical-primary"></div>
                  <span>Technical readiness assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-medical-primary"></div>
                  <span>Career pathway recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-medical-primary"></div>
                  <span>Next steps and learning resources</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
