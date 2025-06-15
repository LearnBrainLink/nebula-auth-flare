
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, DollarSign, Clock, Search, Filter, Briefcase, Users, Star } from "lucide-react";

const Internships = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'software-engineering', 'data-science', 'design', 'marketing', 'business'];

  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Remote",
      duration: "3 months",
      stipend: "$2,000/month",
      category: "software-engineering",
      description: "Join our frontend team to build cutting-edge React applications. You'll work alongside senior developers and contribute to real-world projects.",
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
      stipend: "$2,500/month",
      category: "data-science",
      description: "Work with large datasets and machine learning models to derive business insights. Perfect for students passionate about data.",
      requirements: ["Python", "Pandas", "SQL", "Machine Learning"],
      rating: 4.9,
      applications: 32,
      deadline: "2024-02-20"
    },
    {
      id: 3,
      title: "UX Design Intern",
      company: "Creative Studios",
      location: "Los Angeles, CA", 
      type: "On-site",
      duration: "3 months",
      stipend: "$1,800/month",
      category: "design",
      description: "Create user-centered designs for mobile and web applications. You'll participate in user research and design sprints.",
      requirements: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
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
      statusColor: "bg-yellow-100 text-yellow-800"
    },
    {
      id: 2,
      title: "Data Science Intern", 
      company: "DataViz Labs",
      status: "Interview Scheduled",
      appliedDate: "2024-01-05",
      statusColor: "bg-blue-100 text-blue-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Internship Portal
          </h1>
          <p className="text-gray-600 text-lg">Discover amazing internship opportunities to kickstart your career</p>
        </div>

        <Tabs defaultValue="browse" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="browse">Browse Internships</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="resources">Career Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="browse">
            {/* Search and Filter */}
            <div className="mb-8 flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search internships..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                  >
                    {category.replace('-', ' ')}
                  </Button>
                ))}
              </div>
            </div>

            {/* Internships Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredInternships.map((internship) => (
                <Card key={internship.id} className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{internship.title}</CardTitle>
                        <p className="text-lg font-medium text-indigo-600 mt-1">{internship.company}</p>
                      </div>
                      <Badge variant="secondary" className="capitalize">
                        {internship.category.replace('-', ' ')}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{internship.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {internship.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {internship.type}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {internship.duration}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="h-4 w-4 mr-2" />
                        {internship.stipend}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {internship.requirements.map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          {internship.rating}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {internship.applications} applied
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Due {internship.deadline}
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle>My Applications</CardTitle>
                <p className="text-gray-600">Track your internship applications and their status</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myApplications.map((application) => (
                    <div key={application.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{application.title}</h3>
                          <p className="text-gray-600">{application.company}</p>
                          <p className="text-sm text-gray-500 mt-1">Applied on {application.appliedDate}</p>
                        </div>
                        <Badge className={application.statusColor}>
                          {application.status}
                        </Badge>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button size="sm" variant="outline">View Application</Button>
                        <Button size="sm" variant="outline">Message Recruiter</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resume Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Professional resume templates tailored for tech internships</p>
                  <Button className="w-full" variant="outline">Download Templates</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Interview Prep</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Practice common interview questions and coding challenges</p>
                  <Button className="w-full" variant="outline">Start Practicing</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Career Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Get personalized career advice from industry mentors</p>
                  <Button className="w-full" variant="outline">Book Session</Button>
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
