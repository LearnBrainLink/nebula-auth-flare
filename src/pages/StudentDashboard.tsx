
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen, Calendar, Clock, Award, Video, Building2, LogOut,
  TrendingUp, Star, Settings
} from "lucide-react";
import { Logo } from "@/components/logo";

// You can update signOut logic here if needed

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-100 to-blue-200 px-2 sm:px-6 md:px-10">
      {/* Enhanced Header with Larger Logo */}
      <header className="bg-white/90 backdrop-blur-md shadow-brand border-b border-blue-300/30">
        <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-10 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-4 group">
            <Logo variant="large" className="logo-nav w-24 h-16 drop-shadow-md" />
            <div className="hidden md:block">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent drop-shadow-md tracking-wide">NOVAKINETIX</h1>
              <p className="text-lg font-semibold text-blue-400 tracking-wide">ACADEMY</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4 items-center justify-center">
            <Link to="/videos">
              <Button className="border border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md transition">
                <Video className="w-5 h-5 mr-2" />
                Videos
              </Button>
            </Link>
            <Link to="/internships">
              <Button className="border border-emerald-500 text-emerald-700 hover:bg-emerald-500 hover:text-white px-4 py-2 rounded-md transition">
                <Building2 className="w-5 h-5 mr-2" />
                Internships
              </Button>
            </Link>
            <Link to="/profile">
              <Button className="border border-purple-500 text-purple-700 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-md transition">
                <Settings className="w-5 h-5 mr-2" />
                Profile
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="border border-red-300 text-red-600 hover:bg-red-100 px-4 py-2 rounded-md transition">
                <LogOut className="w-5 h-5 mr-2" />
                Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-sky-500 to-blue-800 inline-block text-transparent bg-clip-text mb-4 drop-shadow">
            Welcome back, Student! 🎓
          </h2>
          <p className="text-xl text-blue-500 font-medium max-w-2xl mx-auto">
            Continue your exciting STEM learning journey and unlock new possibilities!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-md hover:shadow-xl border-0 bg-gradient-to-b from-blue-100/40 to-blue-50 group transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-blue-700 group-hover:text-blue-900 duration-200">
                <div className="p-3 bg-blue-200 rounded-full">
                  <Calendar className="h-6 w-6 text-blue-700" />
                </div>
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-700 mb-2">2</div>
              <p className="text-blue-400 font-medium flex items-center">
                <Clock className="w-4 h-4 mr-1 text-blue-400" />
                Events this week
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-xl border-0 bg-gradient-to-b from-emerald-100/40 to-emerald-50 group transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-emerald-700 group-hover:text-emerald-900 duration-200">
                <div className="p-3 bg-emerald-200 rounded-full">
                  <BookOpen className="h-6 w-6 text-emerald-700" />
                </div>
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-700 mb-2">75%</div>
              <p className="text-emerald-400 font-medium flex items-center">
                <TrendingUp className="w-4 h-4 mr-1 text-emerald-400" />
                Current courses
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-xl border-0 bg-gradient-to-b from-yellow-100/50 via-yellow-50 to-yellow-100 group transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-yellow-700 group-hover:text-yellow-800 duration-200">
                <div className="p-3 bg-yellow-200 rounded-full">
                  <Award className="h-6 w-6 text-yellow-700" />
                </div>
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-700 mb-2">3</div>
              <p className="text-yellow-500 font-medium flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                New badges earned
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Tabs */}
        <Tabs defaultValue="internships" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 h-14 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-xl p-2 shadow-md">
            <TabsTrigger
              value="internships"
              className="text-lg font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg transition-all"
            >
              Internships
            </TabsTrigger>
            <TabsTrigger
              value="courses"
              className="text-lg font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg transition-all"
            >
              Courses
            </TabsTrigger>
            <TabsTrigger
              value="progress"
              className="text-lg font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg transition-all"
            >
              My Progress
            </TabsTrigger>
          </TabsList>

          <TabsContent value="internships" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-md border-0 bg-gradient-to-bl from-blue-100/70 to-white group hover:scale-[1.03] transition-all duration-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-blue-700">Summer Engineering Program</CardTitle>
                  <CardDescription className="text-lg text-blue-400">
                    TechCorp Industries
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-base font-medium">
                    <Clock className="h-5 w-5 mr-3 text-blue-500" />
                    <span>8 weeks (Jun 15 - Aug 10)</span>
                  </div>
                  <p className="text-blue-400 leading-relaxed">
                    Work on real-world projects with experienced engineers and gain hands-on experience.
                  </p>
                  <div className="pt-4">
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
                      <Link to="/internships">View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md border-0 bg-gradient-to-bl from-emerald-100/70 to-white group hover:scale-[1.03] transition-all duration-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-emerald-700">Robotics Workshop</CardTitle>
                  <CardDescription className="text-lg text-emerald-400">
                    Innovation Labs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-base font-medium">
                    <Clock className="h-5 w-5 mr-3 text-emerald-500" />
                    <span>6 weeks (Jun 20 - Aug 1)</span>
                  </div>
                  <p className="text-emerald-400 leading-relaxed">
                    Build and program robots with cutting-edge technology and expert mentorship.
                  </p>
                  <div className="pt-4">
                    <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg">
                      <Link to="/internships">View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <Card className="shadow-md border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-blue-700">My Courses</CardTitle>
                <CardDescription className="text-lg text-blue-400">
                  Track your enrolled courses and progress
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-100 to-white rounded-xl border border-slate-100">
                  <div className="p-3 bg-blue-200 rounded-full">
                    <BookOpen className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-700">
                      Currently enrolled in 3 courses
                    </h3>
                    <p className="text-blue-400">Continue learning with our comprehensive curriculum</p>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
                >
                  <Link to="/videos">Browse All Courses</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress">
            <Card className="shadow-md border-0 bg-gradient-to-br from-fuchsia-50 to-white">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-fuchsia-700">Learning Progress</CardTitle>
                <CardDescription className="text-lg text-fuchsia-400">
                  Track your achievements and growth
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-fuchsia-700">Introduction to Engineering</span>
                    <span className="text-lg font-bold text-fuchsia-400">75%</span>
                  </div>
                  <div className="h-3 bg-fuchsia-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-full transition-all duration-500"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-700">Robotics Fundamentals</span>
                    <span className="text-lg font-bold text-blue-400">40%</span>
                  </div>
                  <div className="h-3 bg-blue-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-emerald-700">Environmental Science</span>
                    <span className="text-lg font-bold text-emerald-400">90%</span>
                  </div>
                  <div className="h-3 bg-emerald-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-500"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
