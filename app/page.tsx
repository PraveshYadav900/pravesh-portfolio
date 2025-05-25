import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Calendar,
  Code,
  Database,
  Globe,
  Shield,
  Users,
  Brain,
  Target,
  ExternalLink,
  Heart,
  FileText,
  Stethoscope,
  Lock,
  Server,
  Star,
  Download,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PY</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Pravesh Yadav
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium">
                About
              </a>
              <a
                href="#education"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium"
              >
                Education
              </a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium">
                Projects
              </a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium">
                Skills
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="relative inline-block mb-8">
                <div className="w-40 h-40 rounded-full mx-auto overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600">
                  <img
                    src="/placeholder.jpg?height=160&width=160"
                    alt="Pravesh Yadav"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
                Pravesh Yadav
              </h1>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  Cybersecurity Specialist
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 text-sm font-medium">
                  <Code className="w-4 h-4 mr-2" />
                  Full-Stack Developer
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 text-sm font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  BCA Graduate
                </Badge>
              </div>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Passionate about creating secure, innovative solutions that bridge technology and user experience.
                Specializing in cybersecurity with a strong foundation in full-stack development.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-10 text-gray-600">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">raopravesh380@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                  <Phone className="w-4 h-4 text-green-500" />
                  <span className="font-medium">+91 7495044277</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="font-medium">India</span>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="https://github.com/PraveshYadav900" target="_blank">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub Profile
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-lg"
                >
                  <Link href="#" target="_blank">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-300 shadow-lg"
                >
                  <Link href="#" target="_blank">
                    <Download className="w-5 h-5 mr-2" />
                    Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      I'm a dedicated cybersecurity specialist and full-stack developer with a Bachelor's in Computer
                      Applications from Jaipur National University, specializing in{" "}
                      <span className="font-semibold text-blue-600">Cybersecurity</span>. With a CGPA of 8.2, I've built
                      a strong foundation in both security protocols and modern web development.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      My passion lies in creating secure, scalable applications that not only meet user needs but also
                      maintain the highest standards of digital security. I believe in the power of technology to solve
                      real-world problems while keeping data and systems protected.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <Shield className="w-6 h-6 text-blue-600" />
                      <span className="font-semibold text-gray-800">Cybersecurity Expert</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                      <Code className="w-6 h-6 text-green-600" />
                      <span className="font-semibold text-gray-800">Full-Stack Developer</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                      <Brain className="w-6 h-6 text-purple-600" />
                      <span className="font-semibold text-gray-800">Problem Solver</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gradient-to-br from-gray-50/50 to-blue-50/50 relative">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                Education Journey
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8">
              <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-800 mb-2">
                          Bachelor of Computer Applications (BCA)
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-600">
                          Jaipur National University •{" "}
                          <span className="font-semibold text-blue-600">Specialization: Cybersecurity</span>
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 text-lg font-bold">
                      CGPA: 8.2
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">2022 - 2025</span>
                  </div>
                  <p className="text-gray-700">
                    Comprehensive study in computer applications with specialized focus on cybersecurity, network
                    security, ethical hacking, and modern web development technologies.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">12</span>
                        </div>
                        <div>
                          <CardTitle className="text-xl text-gray-800">12th Grade</CardTitle>
                          <CardDescription className="text-gray-600">
                            Yaduvanshi Shiksha Niketan, Mahendergarh
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-3 py-1">77.7%</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>2022</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">10</span>
                        </div>
                        <div>
                          <CardTitle className="text-xl text-gray-800">10th Grade</CardTitle>
                          <CardDescription className="text-gray-600">
                            Yaduvanshi Shiksha Niketan, Mahendergarh
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-3 py-1">
                        67.7%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span>2020</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore my portfolio of innovative applications spanning cybersecurity, healthcare, entertainment, and
                productivity solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Movie Finder with Emotion */}
              <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-red-500"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-800">Movie Finder with Emotion</CardTitle>
                      <CardDescription className="text-gray-600">AI-powered recommendation system</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    An intelligent movie recommendation system that analyzes user emotions and preferences to suggest
                    personalized movie recommendations using machine learning algorithms.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-yellow-50 border-yellow-200 text-yellow-800">
                      Python
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-800">
                      ML
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 border-green-200 text-green-800">
                      Flask
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="hover:bg-pink-50 hover:border-pink-300">
                      <Link href="#" target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="hover:bg-pink-50 hover:border-pink-300">
                      <Link href="#" target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* NOC Request Portal */}
              <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-800">NOC Request Portal</CardTitle>
                      <CardDescription className="text-gray-600">Government document management</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A comprehensive digital portal for No Objection Certificate (NOC) requests with automated workflow,
                    document tracking, and secure authentication for government processes.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-800">
                      React.js
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 border-green-200 text-green-800">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="bg-purple-50 border-purple-200 text-purple-800">
                      MongoDB
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300">
                      <Link href="#" target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300">
                      <Link href="#" target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Doctor Appointment App */}
              <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-800">Doctor Appointment App</CardTitle>
                      <CardDescription className="text-gray-600">Healthcare management system</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A complete healthcare management solution enabling patients to book appointments, manage medical
                    records, and connect with healthcare providers through a secure platform.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-cyan-50 border-cyan-200 text-cyan-800">
                      React Native
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 border-green-200 text-green-800">
                      Express.js
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-800">
                      MySQL
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="hover:bg-green-50 hover:border-green-300">
                      <Link href="#" target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="hover:bg-green-50 hover:border-green-300">
                      <Link href="#" target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Password Manager */}
              <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-800">Password Manager</CardTitle>
                      <CardDescription className="text-gray-600">Secure credential management</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A robust password management application with end-to-end encryption, secure vault storage, password
                    generation, and multi-factor authentication for ultimate security.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-yellow-50 border-yellow-200 text-yellow-800">
                      Python
                    </Badge>
                    <Badge variant="outline" className="bg-red-50 border-red-200 text-red-800">
                      Cryptography
                    </Badge>
                    <Badge variant="outline" className="bg-gray-50 border-gray-200 text-gray-800">
                      SQLite
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="hover:bg-red-50 hover:border-red-300">
                      <Link href="#" target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="hover:bg-red-50 hover:border-red-300">
                      <Link href="#" target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* CodeNest Website */}
              <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden md:col-span-2 lg:col-span-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Server className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-800">CodeNest Website</CardTitle>
                      <CardDescription className="text-gray-600">Local development platform</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A comprehensive local development environment and code sharing platform with real-time
                    collaboration, project management, and integrated development tools for developers.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-purple-50 border-purple-200 text-purple-800">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-800">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 border-green-200 text-green-800">
                      Socket.io
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="hover:bg-purple-50 hover:border-purple-300">
                      <Link href="#" target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="hover:bg-purple-50 hover:border-purple-300">
                      <Link href="#" target="_blank">
                        <Server className="w-4 h-4 mr-2" />
                        Localhost
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-50/50 to-purple-50/50 relative">
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                Skills & Expertise
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive skill set spanning cybersecurity, full-stack development, and modern technologies.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold text-center mb-12 text-gray-800">Technical Expertise</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-gray-800">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      Programming
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge
                        variant="outline"
                        className="w-full justify-start bg-yellow-50 border-yellow-200 text-yellow-800"
                      >
                        Python
                      </Badge>
                      <Badge
                        variant="outline"
                        className="w-full justify-start bg-yellow-50 border-yellow-200 text-yellow-800"
                      >
                        JavaScript
                      </Badge>
                      <Badge
                        variant="outline"
                        className="w-full justify-start bg-blue-50 border-blue-200 text-blue-800"
                      >
                        C
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-gray-800">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      Web Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge
                        variant="outline"
                        className="w-full justify-start bg-orange-50 border-orange-200 text-orange-800"
                      >
                        HTML5
                      </Badge>
                      <Badge
                        variant="outline"
                        className="w-full justify-start bg-blue-50 border-blue-200 text-blue-800"
                      >
                        CSS3
                      </Badge>
                      <Badge
                        variant="outline"
                        className="w-full justify-start bg-cyan-50 border-cyan-200 text-cyan-800"
                      >
                        React.js
                      </Badge>
                      <Badge
                        variant="outline"
                        className="w-full justify-start bg-green-50 border-green-200 text-green-800"
                      >
                        Node.js
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-gray-800">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Database className="w-5 h-5 text-white" />
                      </div>
                      Databases
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge
                        variant="outline"
                        className="w-full justify-start bg-green-50 border-green-200 text-green-800"
                      >
                        MongoDB
                      </Badge>
                      <Badge
                        variant="outline"
                        className="w-full justify-start bg-blue-50 border-blue-200 text-blue-800"
                      >
                        MySQL
                      </Badge>
                      <Badge
                        variant="outline"
                        className="w-full justify-start bg-gray-50 border-gray-200 text-gray-800"
                      >
                        SQLite
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-gray-800">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      Cybersecurity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge variant="outline" className="w-full justify-start bg-red-50 border-red-200 text-red-800">
                        Network Security
                      </Badge>
                      <Badge variant="outline" className="w-full justify-start bg-red-50 border-red-200 text-red-800">
                        Ethical Hacking
                      </Badge>
                      <Badge variant="outline" className="w-full justify-start bg-red-50 border-red-200 text-red-800">
                        Penetration Testing
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-3xl font-semibold text-center mb-12 text-gray-800">Professional Skills</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-gray-800">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      Communication
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Team Collaboration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Presentation Skills</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Technical Writing</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-gray-800">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      Problem Solving
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700">Critical Thinking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700">Analytical Skills</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700">Creative Solutions</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-gray-800">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      Leadership
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Project Management</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Time Management</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Adaptability</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                Let's Connect
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to collaborate on your next project? Let's discuss how we can create something amazing together.
              </p>
            </div>

            <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-10">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I'm always excited to discuss new opportunities, innovative projects, or collaborate on
                      cybersecurity and development solutions. Let's build something secure and amazing together!
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <Mail className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-gray-600">raopravesh380@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                      <Phone className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Phone</p>
                        <p className="text-gray-600">+91 7495044277</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="mailto:raopravesh380@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-300 shadow-lg"
                  >
                    <Link href="tel:+917495044277">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Me
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-lg"
                  >
                    <Link href="#" target="_blank">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PY</span>
              </div>
              <span className="text-xl font-bold text-white">Pravesh Yadav</span>
            </div>
            <p className="text-gray-300 mb-6">Cybersecurity Specialist & Full-Stack Developer</p>
            <div className="flex justify-center gap-4 mb-6">
              <Link
                href="https://github.com/PraveshYadav900"
                target="_blank"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Github className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="mailto:raopravesh380@gmail.com"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6">
            <p className="text-gray-400">
              © 2025 Pravesh Yadav. Crafted with ❤️ using Next.js, Tailwind CSS, and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
