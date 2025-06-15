
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Film, Users } from 'lucide-react';

const Index = () => {
  const particles = Array.from({ length: 20 });

  return (
    <div className="min-h-screen w-full bg-slate-900 text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/lovable-uploads/e8a10f2d-c816-4587-b15a-58d9f5728d19.png" alt="NovaKinetix Academy" className="h-10" />
          <nav className="flex items-center gap-4">
            <Link to="/auth" state={{ isLogin: true }}>
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/auth" state={{ isLogin: false }}>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                Sign Up <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        {particles.map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
                filter: 'blur(50px)'
              }}
            />
          ))}
      </div>

      <main className="relative z-10 container mx-auto px-4">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium mb-4">
            🚀 Welcome to the Future of Learning
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-4">
            Unlock Your Potential
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            NovaKinetix Academy offers cutting-edge education in STEM, designed to inspire innovation and foster career growth for students, interns, and lifelong learners.
          </p>
          <div className="flex gap-4">
            <Link to="/auth" state={{ isLogin: false }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-lg">Get Started</Button>
            </Link>
            <Link to="/videos">
              <Button size="lg" variant="outline" className="text-lg bg-slate-800/50 border-slate-700">Explore Courses</Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 text-center p-8">
              <CardHeader>
                <div className="mx-auto bg-blue-500/20 text-blue-400 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <CardTitle>Expert-Led Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Engage with comprehensive courses covering the latest in technology and science.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center p-8">
              <CardHeader>
                <div className="mx-auto bg-purple-500/20 text-purple-400 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle>Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connect with top companies through our exclusive internship programs.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center p-8">
              <CardHeader>
                <div className="mx-auto bg-pink-500/20 text-pink-400 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                  <Film className="h-8 w-8" />
                </div>
                <CardTitle>Interactive Video Library</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access a vast library of video content to learn at your own pace, anytime, anywhere.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Video Tour Placeholder */}
        <section className="py-20 text-center">
            <h2 className="text-4xl font-bold mb-4">Lights, Camera, Action!</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Get a quick tour of everything NovaKinetix Academy has to offer in this exciting introduction.</p>
            <div className="aspect-video bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center">
                <p className="text-slate-500">(Exciting Video Tour Coming Soon!)</p>
            </div>
        </section>

        {/* Student Stories Placeholder */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Inspiring Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6 flex gap-6 items-center">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Student 1" className="h-20 w-20 rounded-full" />
              <div>
                <p className="text-slate-400 italic">"The hands-on projects at NovaKinetix helped me land my dream internship. The instructors are amazing!"</p>
                <p className="font-bold mt-2">- Alex Johnson, Student</p>
              </div>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 p-6 flex gap-6 items-center">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026705d" alt="Student 2" className="h-20 w-20 rounded-full" />
              <div>
                <p className="text-slate-400 italic">"As a parent, I love the portal. I can easily track my child's progress and communicate with teachers."</p>
                <p className="font-bold mt-2">- Maria Garcia, Parent</p>
              </div>
            </Card>
          </div>
        </section>
      </main>

       {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-slate-800">
        <p className="text-slate-500">&copy; {new Date().getFullYear()} NovaKinetix Academy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
