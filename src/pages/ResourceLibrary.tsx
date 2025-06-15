
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Download, FileText, Video, BookOpen, Code, Star, Eye } from "lucide-react";

const ResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const resources = {
    documents: [
      {
        id: 1,
        title: "React Best Practices Guide",
        type: "PDF",
        size: "2.5 MB",
        downloads: 1547,
        rating: 4.8,
        category: "Programming"
      },
      {
        id: 2,
        title: "Data Science Cheat Sheet",
        type: "PDF",
        size: "1.2 MB",
        downloads: 2103,
        rating: 4.9,
        category: "Data Science"
      }
    ],
    videos: [
      {
        id: 1,
        title: "Advanced React Patterns",
        duration: "45:30",
        views: 8542,
        rating: 4.7,
        category: "Programming"
      },
      {
        id: 2,
        title: "Machine Learning Fundamentals",
        duration: "1:12:45",
        views: 12103,
        rating: 4.9,
        category: "Data Science"
      }
    ],
    books: [
      {
        id: 1,
        title: "Modern Web Development",
        author: "John Smith",
        pages: 324,
        rating: 4.6,
        category: "Programming"
      },
      {
        id: 2,
        title: "UX Design Principles",
        author: "Sarah Johnson",
        pages: 256,
        rating: 4.8,
        category: "Design"
      }
    ],
    code: [
      {
        id: 1,
        title: "React Component Library",
        language: "JavaScript",
        stars: 2540,
        category: "Programming"
      },
      {
        id: 2,
        title: "Python Data Analysis Scripts",
        language: "Python",
        stars: 1876,
        category: "Data Science"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Resource Library
          </h1>
          <p className="text-gray-600 text-lg">Discover and download learning materials, code samples, and educational content</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Resource Tabs */}
        <Tabs defaultValue="documents" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="documents" className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center">
              <Video className="h-4 w-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="books" className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              Books
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center">
              <Code className="h-4 w-4 mr-2" />
              Code
            </TabsTrigger>
          </TabsList>

          <TabsContent value="documents">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.documents.map((doc) => (
                <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <FileText className="h-8 w-8 text-red-500" />
                      <Badge variant="secondary">{doc.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{doc.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{doc.type} • {doc.size}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          {doc.rating}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{doc.downloads} downloads</p>
                      <Button className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.videos.map((video) => (
                <Card key={video.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Video className="h-8 w-8 text-blue-500" />
                      <Badge variant="secondary">{video.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{video.duration}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          {video.rating}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Eye className="h-4 w-4 mr-1" />
                        {video.views} views
                      </div>
                      <Button className="w-full">
                        <Video className="h-4 w-4 mr-2" />
                        Watch
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="books">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.books.map((book) => (
                <Card key={book.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <BookOpen className="h-8 w-8 text-green-500" />
                      <Badge variant="secondary">{book.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{book.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600">by {book.author}</p>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{book.pages} pages</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          {book.rating}
                        </div>
                      </div>
                      <Button className="w-full">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Read Online
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="code">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.code.map((code) => (
                <Card key={code.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Code className="h-8 w-8 text-purple-500" />
                      <Badge variant="secondary">{code.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{code.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600">{code.language}</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        {code.stars} stars
                      </div>
                      <Button className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ResourceLibrary;
