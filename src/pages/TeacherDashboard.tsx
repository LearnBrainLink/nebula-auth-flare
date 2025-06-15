
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  BookOpen, 
  ClipboardList, 
  BarChart3, 
  Settings, 
  Bell, 
  LogOut,
  Plus,
  Calendar,
  MessageSquare,
  Trophy,
  TrendingUp
} from 'lucide-react';

const TeacherDashboard = () => {
  const classStats = [
    { label: "Total Students", value: "156", icon: Users, color: "text-blue-400" },
    { label: "Active Courses", value: "8", icon: BookOpen, color: "text-green-400" },
    { label: "Pending Assignments", value: "23", icon: ClipboardList, color: "text-orange-400" },
    { label: "Average Score", value: "87%", icon: BarChart3, color: "text-purple-400" }
  ];

  const recentActivities = [
    { student: "Alex Johnson", action: "Submitted Robot Design Project", course: "Robotics 101", time: "2 hours ago" },
    { student: "Sarah Chen", action: "Completed Python Quiz #3", course: "Programming", time: "4 hours ago" },
    { student: "Mike Rodriguez", action: "Asked question in forum", course: "AI Basics", time: "6 hours ago" }
  ];

  const upcomingClasses = [
    { course: "Robotics 101", time: "10:00 AM", students: 24 },
    { course: "Python Programming", time: "2:00 PM", students: 32 },
    { course: "AI Fundamentals", time: "4:00 PM", students: 18 }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/lovable-uploads/e8a10f2d-c816-4587-b15a-58d9f5728d19.png" alt="NovaKinetix Academy" className="h-10" />
            <h1 className="text-xl font-semibold">Teacher Dashboard</h1>
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
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Welcome, Dr. Smith!</h2>
              <p className="text-slate-400">Here's what's happening in your classes today</p>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
              <Plus className="h-4 w-4 mr-2" />
              Create New Course
            </Button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            {classStats.map((stat, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400 mb-1">{stat.label}</p>
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Student Activities */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Recent Student Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                      <div>
                        <h4 className="font-semibold">{activity.student}</h4>
                        <p className="text-sm text-slate-400">{activity.action}</p>
                        <p className="text-xs text-blue-400">{activity.course}</p>
                      </div>
                      <span className="text-xs text-slate-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-slate-600 text-white hover:bg-slate-700">
                  View All Activities
                </Button>
              </CardContent>
            </Card>

            {/* Course Management */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Course Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="h-24 bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30 flex flex-col items-center justify-center gap-2">
                    <Plus className="h-6 w-6" />
                    <span>Add Assignment</span>
                  </Button>
                  <Button className="h-24 bg-green-600/20 border border-green-500/30 hover:bg-green-600/30 flex flex-col items-center justify-center gap-2">
                    <ClipboardList className="h-6 w-6" />
                    <span>Grade Assignments</span>
                  </Button>
                  <Button className="h-24 bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/30 flex flex-col items-center justify-center gap-2">
                    <BarChart3 className="h-6 w-6" />
                    <span>View Analytics</span>
                  </Button>
                  <Button className="h-24 bg-orange-600/20 border border-orange-500/30 hover:bg-orange-600/30 flex flex-col items-center justify-center gap-2">
                    <MessageSquare className="h-6 w-6" />
                    <span>Message Students</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Today's Classes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingClasses.map((class_, index) => (
                  <div key={index} className="p-3 bg-slate-700/30 rounded-lg">
                    <h4 className="font-semibold text-sm">{class_.course}</h4>
                    <p className="text-xs text-slate-400">{class_.time}</p>
                    <p className="text-xs text-green-400">{class_.students} students</p>
                    <Button size="sm" className="mt-2 w-full bg-blue-600 hover:bg-blue-700">
                      Join Class
                    </Button>
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
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Announcement
                </Button>
                <Button variant="outline" className="w-full border-slate-600 text-white hover:bg-slate-700">
                  <Trophy className="h-4 w-4 mr-2" />
                  Award Badges
                </Button>
                <Link to="/resource-library" className="block">
                  <Button variant="outline" className="w-full border-slate-600 text-white hover:bg-slate-700">
                    Resource Library
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-blue-600/20 rounded text-blue-200">
                    New student enrolled in Robotics 101
                  </div>
                  <div className="p-2 bg-green-600/20 rounded text-green-200">
                    Assignment deadline reminder sent
                  </div>
                  <div className="p-2 bg-orange-600/20 rounded text-orange-200">
                    Forum discussion requires attention
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;
