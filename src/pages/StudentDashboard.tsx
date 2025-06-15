
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  Users, 
  Bell, 
  Calendar, 
  TrendingUp,
  User,
  Settings,
  LogOut
} from 'lucide-react';

const StudentDashboard = () => {
  const currentCourses = [
    { name: "Robotics Fundamentals", progress: 65, nextLesson: "Motor Control Systems" },
    { name: "Python Programming", progress: 80, nextLesson: "Object-Oriented Programming" },
    { name: "AI Basics", progress: 40, nextLesson: "Neural Networks Introduction" }
  ];

  const upcomingAssignments = [
    { title: "Robot Design Project", dueDate: "Dec 20", course: "Robotics" },
    { title: "Python Quiz #3", dueDate: "Dec 18", course: "Programming" },
    { title: "AI Ethics Essay", dueDate: "Dec 22", course: "AI Basics" }
  ];

  const achievements = [
    { title: "First Code Warrior", description: "Completed first programming assignment", icon: "🏆" },
    { title: "Robot Builder", description: "Built your first robot simulation", icon: "🤖" },
    { title: "Quick Learner", description: "Completed 5 lessons this week", icon: "⚡" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/lovable-uploads/e8a10f2d-c816-4587-b15a-58d9f5728d19.png" alt="NovaKinetix Academy" className="h-10" />
            <h1 className="text-xl font-semibold">Student Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Welcome back, Alex!</h2>
              <p className="text-slate-400">Ready to continue your learning journey?</p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Courses</p>
                    <p className="text-2xl font-bold text-blue-400">3</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Achievements</p>
                    <p className="text-2xl font-bold text-yellow-400">8</p>
                  </div>
                  <Trophy className="h-8 w-8 text-yellow-400" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Study Time</p>
                    <p className="text-2xl font-bold text-green-400">24h</p>
                  </div>
                  <Clock className="h-8 w-8 text-green-400" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Progress</p>
                    <p className="text-2xl font-bold text-purple-400">68%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-purple-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Courses */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Current Courses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentCourses.map((course, index) => (
                  <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{course.name}</h3>
                      <span className="text-sm text-slate-400">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="mb-2" />
                    <p className="text-sm text-slate-400">Next: {course.nextLesson}</p>
                    <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">
                      Continue Learning
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div>
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-slate-400">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Assignments */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Assignments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingAssignments.map((assignment, index) => (
                  <div key={index} className="p-3 bg-slate-700/30 rounded-lg">
                    <h4 className="font-semibold text-sm">{assignment.title}</h4>
                    <p className="text-xs text-slate-400">{assignment.course}</p>
                    <p className="text-xs text-orange-400">Due: {assignment.dueDate}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/videos" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Browse Videos
                  </Button>
                </Link>
                <Link to="/resource-library" className="block">
                  <Button variant="outline" className="w-full border-slate-600 text-white hover:bg-slate-700">
                    Resource Library
                  </Button>
                </Link>
                <Link to="/help-support" className="block">
                  <Button variant="outline" className="w-full border-slate-600 text-white hover:bg-slate-700">
                    Get Help
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
