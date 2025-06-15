
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, BookOpen, TrendingUp, Clock, MessageSquare, Calendar, Award, AlertCircle } from "lucide-react";

const ParentPortal = () => {
  const [selectedChild, setSelectedChild] = useState('alex');

  const children = [
    { id: 'alex', name: 'Alex Johnson', grade: '10th Grade', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' },
    { id: 'emma', name: 'Emma Johnson', grade: '8th Grade', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150' }
  ];

  const currentChild = children.find(child => child.id === selectedChild);

  const academicData = {
    alex: {
      courses: [
        { name: 'Advanced React', progress: 85, grade: 'A-', instructor: 'Dr. Sarah Chen' },
        { name: 'Data Science', progress: 72, grade: 'B+', instructor: 'Prof. Michael Roberts' },
        { name: 'UI/UX Design', progress: 90, grade: 'A', instructor: 'Jessica Martinez' }
      ],
      attendance: 95,
      studyHours: 47,
      assignments: { completed: 23, pending: 2, overdue: 0 },
      recentActivity: [
        { date: '2024-01-15', activity: 'Completed React Hooks assignment', type: 'assignment' },
        { date: '2024-01-14', activity: 'Attended Data Science live session', type: 'attendance' },
        { date: '2024-01-13', activity: 'Earned "Perfect Week" badge', type: 'achievement' }
      ]
    }
  };

  const data = academicData[selectedChild] || academicData.alex;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Parent Portal</h1>
          <p className="text-gray-600">Monitor your child's academic progress and engagement</p>
        </div>

        {/* Child Selector */}
        <div className="mb-8">
          <div className="flex gap-4">
            {children.map((child) => (
              <Button
                key={child.id}
                variant={selectedChild === child.id ? "default" : "outline"}
                onClick={() => setSelectedChild(child.id)}
                className="flex items-center gap-3 p-4 h-auto"
              >
                <img src={child.avatar} alt={child.name} className="w-8 h-8 rounded-full" />
                <div className="text-left">
                  <div className="font-medium">{child.name}</div>
                  <div className="text-xs opacity-70">{child.grade}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Attendance Rate</p>
                  <p className="text-3xl font-bold">{data.attendance}%</p>
                </div>
                <User className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Study Hours</p>
                  <p className="text-3xl font-bold">{data.studyHours}</p>
                </div>
                <Clock className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Completed</p>
                  <p className="text-3xl font-bold">{data.assignments.completed}</p>
                </div>
                <BookOpen className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Pending Tasks</p>
                  <p className="text-3xl font-bold">{data.assignments.pending}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="academic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="academic">Academic Progress</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
          </TabsList>

          <TabsContent value="academic">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Course Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {data.courses.map((course, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">{course.name}</h3>
                            <p className="text-sm text-gray-600">by {course.instructor}</p>
                          </div>
                          <Badge variant={course.grade.startsWith('A') ? 'default' : 'secondary'}>
                            {course.grade}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Assignment Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Assignment Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{data.assignments.completed}</div>
                        <div className="text-sm text-green-700">Completed</div>
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">{data.assignments.pending}</div>
                        <div className="text-sm text-yellow-700">Pending</div>
                      </div>
                      <div className="p-4 bg-red-50 rounded-lg">
                        <div className="text-2xl font-bold text-red-600">{data.assignments.overdue}</div>
                        <div className="text-sm text-red-700">Overdue</div>
                      </div>
                    </div>
                    
                    {data.assignments.overdue > 0 && (
                      <div className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                        <span className="text-sm text-red-700">Your child has overdue assignments that need attention.</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div className="p-2 bg-blue-100 rounded-full">
                        {activity.type === 'assignment' && <BookOpen className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'attendance' && <User className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'achievement' && <Award className="h-4 w-4 text-blue-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.activity}</p>
                        <p className="text-sm text-gray-600">{activity.date}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {activity.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communication">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Teacher Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">Dr. Sarah Chen</h3>
                        <span className="text-xs text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-sm text-gray-600">Alex is doing excellent work in React development. Very engaged in class discussions.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">Prof. Michael Roberts</h3>
                        <span className="text-xs text-gray-500">1 week ago</span>
                      </div>
                      <p className="text-sm text-gray-600">Great improvement in data analysis assignments. Keep up the good work!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Teacher
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Detailed Report
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Award className="h-4 w-4 mr-2" />
                    View Certificates
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

export default ParentPortal;
