import { notFound } from "next/navigation";
import { 
  MapPin, 
  Clock, 
  Users, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle,
  Star,
  Building,
  Calendar,
  DollarSign,
  Briefcase,
  GraduationCap,
  Heart,
  Globe,
  Award,
  Utensils,
  TrendingUp,
  BarChart3,
  Coffee,
  Home,
  UserCheck,
  // Event,
  Smile
} from "lucide-react";
import Link from "next/link";
import { jobsData, BenefitIcon } from "@/data/jobsData";
import JobApplicationForm from "@/components/CareersPage/JobApplicationForm";

// Generate static params for all job IDs
export async function generateStaticParams() {
  return jobsData.map((job) => ({
    id: job.id.toString(),
  }));
}

// Icon mapping function
const getBenefitIcon = (iconType: BenefitIcon) => {
  const iconProps = { className: "w-4 h-4 text-primary" };
  
  switch (iconType) {
    case "dollar":
      return <DollarSign {...iconProps} />;
    case "heart":
      return <Heart {...iconProps} />;
    case "award":
      return <Award {...iconProps} />;
    case "clock":
      return <Clock {...iconProps} />;
    case "utensils":
      return <Utensils {...iconProps} />;
    case "trending-up":
      return <TrendingUp {...iconProps} />;
    case "globe":
      return <Globe {...iconProps} />;
    case "bar-chart":
      return <BarChart3 {...iconProps} />;
    case "users":
      return <Users {...iconProps} />;
    case "graduation-cap":
      return <GraduationCap {...iconProps} />;
    case "briefcase":
      return <Briefcase {...iconProps} />;
    case "star":
      return <Star {...iconProps} />;
    case "calendar":
      return <Calendar {...iconProps} />;
    case "coffee":
      return <Coffee {...iconProps} />;
    case "home":
      return <Home {...iconProps} />;
    case "user-check":
      return <UserCheck {...iconProps} />;
    // case "event":
    //   return <Event {...iconProps} />;
    case "smile":
      return <Smile {...iconProps} />;
    default:
      return <Award {...iconProps} />;
  }
};

export default async function JobDescriptionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const jobId = id;
  const job = jobsData.find(j => j.id.toString() === jobId);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted mb-6">
            <Link href="/careers" className="hover:text-primary transition-colors">
              Careers
            </Link>
            <ArrowRight className="w-4 h-4" />
            <Link href="/careers/opportunities" className="hover:text-primary transition-colors">
              Opportunities
            </Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-foreground">{job.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  {job.type}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4">
                  {job.title}
                </h1>
                <p className="text-lg text-muted leading-relaxed">
                  {job.overview}
                </p>
              </div>

              {/* Job Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted">Location</p>
                    <p className="font-medium text-foreground">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted">Employment Type</p>
                    <p className="font-medium text-foreground">{job.employmentType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl">
                  <Building className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted">Work Type</p>
                    <p className="font-medium text-foreground">{job.timeType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted">Open Positions</p>
                    <p className="font-medium text-foreground">{job.seats}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quick Apply</h3>
                  <p className="text-sm text-muted mb-6">
                    Ready to join our team? Fill out our application form and let's start the conversation.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeXaQ8twk2JatL2xWdNj2sRZgf_0PbFxdUNuwzUR9JDa_j-FQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-background rounded-xl font-medium hover:bg-primary/90 transition-colors"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-primary text-primary rounded-xl font-medium hover:bg-primary/10 transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Description Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About the Role */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-6">About the Role</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted leading-relaxed mb-4">
                    {job.aboutRole}
                  </p>
                </div>
              </div>

              {/* Key Responsibilities */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-6">Key Responsibilities</h2>
                <div className="space-y-4">
                  {job.responsibilities.map((responsibility: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted leading-relaxed">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-6">Requirements</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      Education & Experience
                    </h3>
                    <ul className="space-y-2">
                      {job.requirements.education.map((req: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      Skills & Competencies
                    </h3>
                    <ul className="space-y-2">
                      {job.requirements.skills.map((skill: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* What We Offer */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-6">What We Offer</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {job.benefits.map((benefit: any, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        {getBenefitIcon(benefit.icon)}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Additional Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Company Culture */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Our Culture
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  At Ten 11 Hospitality, we believe in creating an environment where talent thrives, 
                  innovation flourishes, and every team member feels valued and empowered.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">Collaborative Environment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">Growth Opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">Work-Life Balance</span>
                  </div>
                </div>
              </div>

              {/* Application Process */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Application Process
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-background rounded-full flex items-center justify-center text-xs font-medium">1</div>
                    <span className="text-sm text-foreground">Submit Application</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-medium">2</div>
                    <span className="text-sm text-muted">Initial Review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-medium">3</div>
                    <span className="text-sm text-muted">Interview Process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-medium">4</div>
                    <span className="text-sm text-muted">Final Decision</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground mb-4 sm:mb-6">
              Apply for this Position
            </h2>
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
              Ready to join our team? Fill out the application form below and let's start the conversation.
            </p>
          </div>
          <JobApplicationForm jobTitle={job.title} jobLocation={job.location} />
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-base sm:text-lg text-background/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Fill out our application form and let's explore this opportunity together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeXaQ8twk2JatL2xWdNj2sRZgf_0PbFxdUNuwzUR9JDa_j-FQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-background text-primary rounded-lg sm:rounded-xl font-medium hover:bg-background/90 transition-colors"
            >
              Apply Now
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </a>
            <Link
              href="/careers/opportunities"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary/20 text-background rounded-lg sm:rounded-xl font-medium hover:bg-primary/30 transition-colors border border-background/20"
            >
              <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
              View All Jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
