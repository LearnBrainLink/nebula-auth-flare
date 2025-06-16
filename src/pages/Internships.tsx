
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Clock, Search, Briefcase, Users, Star, LogOut, Settings, Video, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/logo";

const Internships = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'software-engineering', 'data-science', 'design', 'marketing', 'environmental'];

  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Remote",
      duration: "3 months",
      volunteerHours: "120 hours total",
      category: "software-engineering",
      description: "Join our frontend team to build cutting-edge React applications. You'll work alongside senior developers and contribute to real-world projects while gaining valuable experience.",
      requirements: ["React", "JavaScript", "HTML/CSS", "Git"],
      rating: 4.8,
      applications: 45,
      deadline: "2024-02-15"
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "DataViz Labs",
      location: "New York, NY",
      type: "Hybrid",
      duration: "4 months",
      volunteerHours: "160 hours total",
      category: "data-science",
      description: "Work with large datasets and machine learning models to derive business insights. Perfect for students passionate about data and making a real impact.",
      requirements: ["Python", "Pandas", "SQL", "Machine Learning"],
      rating: 4.9,
      applications: 32,
      deadline: "2024-02-20"
    },
    {
      id: 3,
      title: "Environmental Research Intern",
      company: "Green Future Labs",
      location: "Los Angeles, CA", 
      type: "On-site",
      duration: "3 months",
      volunteerHours: "100 hours total",
      category: "environmental",
      description: "Contribute to environmental research projects and help develop sustainable solutions. You'll participate in field research and data analysis.",
      requirements: ["Environmental Science", "Data Analysis", "Research Methods", "Field Work"],
      rating: 4.7,
      applications: 28,
      deadline: "2024-02-10"
    }
  ];

  const filteredInternships = internships.filter(internship => 
    (selectedCategory === 'all' || internship.category === selectedCategory) &&
    (internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     internship.company.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const myApplications = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp Inc.",
      status: "Under Review",
      appliedDate: "2024-01-10",
      statusColor: "bg-yellow-100 text-yellow-800",
      progress: 60
    },
    {
      id: 2,
      title: "Data Science Intern", 
      company: "DataViz Labs",
      status: "Interview Scheduled",
      appliedDate: "2024-01-05",
      statusColor: "bg-blue-100 text-blue-800",
      progress: 80
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Enhanced Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-2xl border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-4 group">
            <Logo variant="large" className="group-hover:scale-110 transition-transform duration-300 w-12 h-12 sm:w-16 sm:h-16" />
            <div className="hidden md:block">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">NOVAKINETIX</h1>
              <p className="text-base sm:text-lg font-semibold text-blue-400">ACADEMY</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4 items-center justify-center">
            <Link to="/student-dashboard">
              <Button variant="outline" className="border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white transition-all duration-300">
                Dashboard
              </Button>
            </Link>
            <Link to="/videos">
              <Button variant="outline" className="border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white transition-all duration-300">
                <Video className="w-4 h-4 mr-2" />
                Videos
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="outline" className="border-purple-500 text-purple-700 hover:bg-purple-600 hover:text-white transition-all duration-300">
                <Settings className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-100 transition-all duration-300">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 drop-shadow-sm">
            Internship Portal
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover amazing volunteer internship opportunities to kickstart your career and make a meaningful impact in your community
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Active Internships</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Volunteer Hours</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="browse" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 h-14 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-2 shadow-lg">
            <TabsTrigger value="browse" className="text-lg font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-xl transition-all duration-300">
              Browse Internships
            </TabsTrigger>
            <TabsTrigger value="applications" className="text-lg font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-xl transition-all duration-300">
              My Applications
            </TabsTrigger>
            <TabsTrigger value="resources" className="text-lg font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-xl transition-all duration-300">
              Career Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="browse">
            {/* Enhanced Search and Filter */}
            <div className="mb-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      placeholder="Search internships by title or company..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 h-12 text-base border-2 border-blue-100 focus:border-blue-400 rounded-xl"
                    />
                  </div>
                </div>
                
                <div className="flex gap-3 flex-wrap mt-4">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className={`capitalize rounded-full px-6 py-2 transition-all duration-300 ${
                        selectedCategory === category 
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                          : "border-blue-200 text-blue-700 hover:bg-blue-50"
                      }`}
                    >
                      {category.replace('-', ' ')}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Internships Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredInternships.map((internship) => (
                <Card key={internship.id} className="group hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl bg-white/70 backdrop-blur-sm hover:scale-[1.02] overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {internship.title}
                        </CardTitle>
                        <p className="text-lg font-semibold text-blue-600 mt-2">{internship.company}</p>
                      </div>
                      <Badge variant="secondary" className="capitalize bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {internship.category.replace('-', ' ')}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        {internship.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {internship.applications} applied
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">{internship.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="text-sm">{internship.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Briefcase className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="text-sm">{internship.type}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="text-sm">{internship.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Star className="h-4 w-4 mr-2 text-green-500" />
                        <span className="text-sm font-medium text-green-600">{internship.volunteerHours}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {internship.requirements.map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">
                          {req}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        Due {internship.deadline}
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications">
            <Card className="bg-white/70 backdrop-blur-sm border-0 rounded-2xl shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  My Applications
                </CardTitle>
                <p className="text-gray-600 text-lg">Track your internship applications and their progress</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {myApplications.map((application) => (
                    <div key={application.id} className="p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 bg-white/50">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-lg">{application.title}</h3>
                          <p className="text-blue-600 font-medium">{application.company}</p>
                          <p className="text-sm text-gray-500 mt-1">Applied on {application.appliedDate}</p>
                        </div>
                        <Badge className={`${application.statusColor} px-3 py-1 rounded-full font-medium`}>
                          {application.status}
                        </Badge>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Application Progress</span>
                          <span>{application.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                            style={{ width: `${application.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button size="sm" variant="outline" className="rounded-lg border-blue-200 text-blue-600 hover:bg-blue-50">
                          View Application
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-lg border-purple-200 text-purple-600 hover:bg-purple-50">
                          Message Recruiter
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/70 backdrop-blur-sm border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-blue-600">Resume Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">Professional resume templates tailored for tech internships and volunteer positions</p>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl" variant="outline">
                    Download Templates
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-purple-600">Interview Prep</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">Practice common interview questions and coding challenges for STEM internships</p>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl" variant="outline">
                    Start Practicing
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-indigo-600">Career Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">Get personalized career advice from industry mentors and professionals</p>
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white rounded-xl" variant="outline">
                    Book Session
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Internships;
