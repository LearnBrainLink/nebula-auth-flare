
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Search, Play, Clock, Users, Star, Filter } from 'lucide-react';

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const videoCategories = [
    { value: 'all', label: 'All Categories' },
    { value: 'robotics', label: 'Robotics' },
    { value: 'ai', label: 'Artificial Intelligence' },
    { value: 'programming', label: 'Programming' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'mathematics', label: 'Mathematics' }
  ];

  const featuredVideos = [
    {
      id: 1,
      title: "Introduction to Robotics",
      description: "Learn the fundamentals of robotics and automation",
      duration: "45 min",
      students: 1250,
      rating: 4.8,
      category: "robotics",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop"
    },
    {
      id: 2,
      title: "AI and Machine Learning Basics",
      description: "Understand the core concepts of artificial intelligence",
      duration: "38 min",
      students: 980,
      rating: 4.9,
      category: "ai",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=225&fit=crop"
    },
    {
      id: 3,
      title: "Python Programming for Beginners",
      description: "Start your coding journey with Python",
      duration: "52 min",
      students: 2100,
      rating: 4.7,
      category: "programming",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <img src="/lovable-uploads/e8a10f2d-c816-4587-b15a-58d9f5728d19.png" alt="NovaKinetix Academy" className="h-10" />
          </div>
          <Link to="/auth">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
              Join Now
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Video Library
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore our comprehensive collection of STEM video courses and tutorials
          </p>
        </section>

        {/* Search and Filter */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input 
                placeholder="Search videos..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700 text-white"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-64 bg-slate-800/50 border-slate-700 text-white">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                {videoCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value} className="text-white">
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Featured Videos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <Card key={video.id} className="bg-slate-800/50 border-slate-700 overflow-hidden hover:scale-105 transition-transform duration-300 group">
                <div className="relative">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Play className="h-6 w-6 mr-2" />
                      Watch Now
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{video.title}</CardTitle>
                  <p className="text-slate-400 text-sm">{video.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {video.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {video.students.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      {video.rating}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-slate-300 mb-6">Join thousands of students already learning with NovaKinetix Academy</p>
          <Link to="/auth" state={{ isLogin: false }}>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600">
              Get Started Today
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Videos;
