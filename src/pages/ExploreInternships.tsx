
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock, Search, Briefcase, Users, Star, ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/logo";

const ExploreInternships = () => {
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
      volunteerHours: "160 hours total",
      category: "data-science",
      description: "Work with large datasets and machine learning models to derive business insights. Perfect for students passionate about data.",
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
      description: "Contribute to environmental research projects and help develop sustainable solutions. Perfect for making a real impact.",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Public Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-2xl border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <Link to="/" className="flex items-center gap-4 group">
            <Logo variant="large" className="group-hover:scale-110 transition-transform duration-300 w-12 h-12 sm:w-16 sm:h-16" />
            <div className="hidden md:block">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">NOVAKINETIX</h1>
              <p className="text-base sm:text-lg font-semibold text-blue-400">ACADEMY</p>
            </div>
          </Link>
          <div className="flex gap-4 items-center">
            <Link to="/auth">
              <Button variant="outline" className="border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white transition-all duration-300">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 drop-shadow-sm">
            Explore Internships
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover amazing volunteer internship opportunities. Join Novakinetix Academy to apply and start your STEM journey!
          </p>
          
          {/* Call to Action Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-6 opacity-90">Join thousands of students already building their future with hands-on experience</p>
            <Link to="/auth">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-bold text-lg shadow-lg">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
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

        {/* Internships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredInternships.map((internship) => (
            <Card key={internship.id} className="relative group hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl bg-white/70 backdrop-blur-sm hover:scale-[1.02] overflow-hidden">
              {/* Join Overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl">
                <div className="text-center text-white p-6">
                  <Lock className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Join to Apply</h3>
                  <p className="mb-4 opacity-90">Create a free account to apply for this internship</p>
                  <Link to="/auth">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-xl font-semibold">
                      Sign Up Free
                    </Button>
                  </Link>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900">{internship.title}</CardTitle>
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
                    <Badge key={index} variant="outline" className="text-xs bg-gray-50 border-gray-200">
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

                <Button disabled className="w-full bg-gray-300 text-gray-500 h-12 rounded-xl font-semibold cursor-not-allowed">
                  Sign Up to Apply
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Ready to Apply?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Join Novakinetix Academy today and get access to exclusive internship opportunities, personalized mentorship, and career resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/auth">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" className="border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-xl font-semibold">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreInternships;
