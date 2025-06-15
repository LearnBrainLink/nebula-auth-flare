
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Play, Search, Filter, Clock, Star, BookOpen } from "lucide-react";

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const videoCategories = ['all', 'programming', 'data-science', 'design', 'business', 'marketing'];
  
  const videos = [
    {
      id: 1,
      title: "Introduction to React Programming",
      duration: "45:30",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      category: "programming",
      rating: 4.8,
      views: "12.5k",
      instructor: "Dr. Sarah Chen"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      duration: "1:12:45",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400",
      category: "data-science",
      rating: 4.9,
      views: "8.2k",
      instructor: "Prof. Michael Roberts"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      duration: "38:15",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400",
      category: "design",
      rating: 4.7,
      views: "15.3k",
      instructor: "Jessica Martinez"
    }
  ];

  const filteredVideos = videos.filter(video => 
    (selectedCategory === 'all' || video.category === selectedCategory) &&
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Video Library
          </h1>
          <p className="text-gray-600 text-lg">Explore our comprehensive collection of educational videos</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {videoCategories.map((category) => (
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

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-t-lg flex items-center justify-center">
                  <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <Badge className="absolute top-2 right-2 bg-black bg-opacity-70 text-white">
                  <Clock className="h-3 w-3 mr-1" />
                  {video.duration}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
                <p className="text-sm text-gray-600">by {video.instructor}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{video.rating}</span>
                    <span className="text-sm text-gray-500">({video.views} views)</span>
                  </div>
                  <Badge variant="secondary" className="capitalize">
                    {video.category.replace('-', ' ')}
                  </Badge>
                </div>
                <Button className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
