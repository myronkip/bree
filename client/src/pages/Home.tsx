import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  ChevronDown,
  Award,
  Briefcase,
  BookOpen,
  Code,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">Brenda Nalyanya</div>
          <div className="hidden md:flex gap-8">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "achievements", label: "Achievements" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <img
                src="/brenda-photo.jpg"
                alt="Brenda Lusike Nalyanya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Brenda Lusike Nalyanya
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-4">
            Finance & Accounting Specialist
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Meticulous professional with 5+ years of experience in financial
            reporting, audit, tax planning, and data-driven financial analysis.
            Expertise in modern accounting systems and strategic financial
            management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce mx-auto block"
          >
            <ChevronDown className="h-8 w-8 text-primary" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I am a meticulous Finance and Accounting Specialist with
                comprehensive knowledge of internal audit, tax planning,
                compliance, and financial reporting. With over 5 years of
                multi-disciplinary experience in financial and accounting
                operations, I bring a data-driven approach to financial
                management.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I am well-versed in modern technological advancements aimed at
                achieving automation and efficiency, utilizing intelligent tools
                such as Xero, Zoho Books, and Sage Pastel. My expertise spans
                managerial accounting, cost analysis, and strategic financial
                planning in accordance with relevant standards and accounting
                principles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am seeking a challenging External Reporting Statutory
                Accountant role in a dynamic team environment where I can fully
                utilize my solid knowledge in accounting, financial reporting,
                and analysis to drive organizational success.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <p className="text-muted-foreground">Key Positions</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">1</div>
                <p className="text-muted-foreground">CPA Certification</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <p className="text-muted-foreground">Degrees</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                Technical Skills
              </h3>
              <div className="space-y-4">
                {[
                  { skill: "IFRS & Accounting Standards", level: 95 },
                  { skill: "Financial Reporting & Analysis", level: 90 },
                  { skill: "Internal Control Principles", level: 88 },
                  { skill: "Tax Planning & Compliance", level: 85 },
                  { skill: "MS Excel, Word, PowerPoint", level: 92 },
                  { skill: "Xero, Zoho Books, Sage Pastel", level: 87 },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-primary font-semibold">
                        {item.level}%
                      </span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Team Leadership",
                  "Financial Analysis",
                  "Report Writing",
                  "Communication",
                  "Problem Solving",
                  "Attention to Detail",
                  "Deadline Management",
                  "Strategic Planning",
                ].map((skill, idx) => (
                  <Card
                    key={idx}
                    className="p-4 text-center hover:shadow-lg transition-all hover:scale-105"
                  >
                    <p className="font-medium text-sm">{skill}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                title: "Accountant & Finance Analyst",
                company: "Safari Park Hotel & Casino",
                period: "July 2022 - Present",
                icon: Briefcase,
                responsibilities: [
                  "Collection and analysis of financial data with identification of trends and patterns",
                  "Implementation of proper accounting systems for bookkeeping and operational support",
                  "Maintenance of accounting records and reporting cycles in accordance with regulatory requirements",
                  "Stock control management and vendor account reconciliation",
                  "Tax and statutory payments processing to ensure compliance",
                  "Fixed assets register management with monthly reconciliation",
                ],
              },
              {
                title: "Assistant Constituency Administrator",
                company: "Uwezo Fund Oversight Board",
                period: "July 2020 - June 2022",
                icon: Briefcase,
                responsibilities: [
                  "Monthly program progress review and reporting for performance improvement",
                  "Financial report collection and consolidation for decision-making",
                  "Financial statement preparation and audit support",
                  "Expenditure processing and budget vs actuals (BVA) analysis",
                  "Payment process assessment and control identification",
                  "Bank and intercompany reconciliation management",
                ],
              },
            ].map((exp, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                      <exp.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-primary">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-muted-foreground">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.period}
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, ridx) => (
                        <li key={ridx} className="flex gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <p className="text-sm text-primary font-semibold mb-2">
                    July 2026 (Expected)
                  </p>
                  <h4 className="text-xl font-bold mb-2">
                    Master of Science – Finance
                  </h4>
                  <p className="text-muted-foreground">Kenyatta University</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <p className="text-sm text-primary font-semibold mb-2">
                    December 2018
                  </p>
                  <h4 className="text-xl font-bold mb-2">
                    Bachelor of Economics
                  </h4>
                  <p className="text-muted-foreground">University of Nairobi</p>
                </Card>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Certifications
              </h3>
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-accent/50">
                  <p className="text-sm text-accent font-semibold mb-2">
                    December 2021
                  </p>
                  <h4 className="text-xl font-bold mb-2">
                    Certified Public Accountant (CPA)
                  </h4>
                  <p className="text-muted-foreground">
                    Institute of Certified Public Accountants of Kenya (ICPAK)
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Projects */}
      <section id="achievements" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Financial System Implementation",
                description:
                  "Successfully implemented proper accounting systems for bookkeeping and operational support at Safari Park Hotel & Casino, improving efficiency by 40%.",
              },
              {
                title: "Audit & Compliance Excellence",
                description:
                  "Prepared comprehensive financial statements and audit support schedules for Uwezo Fund Oversight Board, ensuring 100% regulatory compliance.",
              },
              {
                title: "Budget Management Expertise",
                description:
                  "Managed budget vs actuals (BVA) analysis ensuring program performance remained within expected ranges, optimizing resource allocation.",
              },
              {
                title: "Data-Driven Insights",
                description:
                  "Provided draft insights through graphs, charts, and reports using data visualization methods for strategic decision-making.",
              },
              {
                title: "Process Optimization",
                description:
                  "Identified payment process bottlenecks and implemented solutions, improving payment cycle efficiency by 35%.",
              },
              {
                title: "Team Leadership",
                description:
                  "Led financial teams in delivering high-quality financial statements in accordance with relevant regulations and accounting principles.",
              },
            ].map((achievement, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg transition-all hover:scale-105 flex flex-col"
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground flex-grow">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 flex-shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-white/80">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-6 w-6 flex-shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-white/80">+254 700 335 054</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="h-6 w-6 flex-shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-white/80">nalyanyalusike@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Linkedin className="h-6 w-6 flex-shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/brenda-nalyanya-7b65a9166/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    brenda-nalyanya-7b65a9166
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-accent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-accent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-accent"
                />
                <Button className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white/80 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            © 2024 Brenda Lusike Nalyanya. All rights reserved.
          </p>
          <p className="text-sm">
            Finance & Accounting Specialist | CPA | Financial Analysis Expert
          </p>
        </div>
      </footer>
    </div>
  );
}
