
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Film, Users, Brain, Zap, Trophy, TrendingUp } from 'lucide-react';

const Index = () => {
  const particles = Array.from({ length: 20 });
  const [currentStat, setCurrentStat] = React.useState(0);
  
  const stats = [
    { number: "50,000+", label: "Students Enrolled" },
    { number: "98%", label: "Success Rate" },
    { number: "200+", label: "STEM Courses" },
    { number: "1,500+", label: "Internship Placements" }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div className="min-h-screen w-full bg-slate-900 text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/lovable-uploads/e8a10f2d-c816-4587-b15a-58d9f5728d19.png" alt="NovaKinetix Academy" className="h-12" />
          <nav className="flex items-center gap-4">
            <Link to="/auth" state={{ isLogin: true }}>
              <Button variant="ghost" className="text-white hover:bg-white/10">Login</Button>
            </Link>
            <Link to="/auth" state={{ isLogin: false }}>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
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
        <section className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-sm font-medium mb-6 animate-bounce">
            🚀 Welcome to the Future of Learning
          </div>
          
          {/* Interactive Floating Robotic Images */}
          <div className="absolute top-32 left-10 animate-pulse">
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150&h=150&fit=crop&crop=center" alt="AI Robot" className="w-24 h-24 rounded-full shadow-lg hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce delay-1000">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=center" alt="Student Learning" className="w-32 h-32 rounded-full shadow-lg hover:scale-110 transition-transform duration-300" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-6 animate-fade-in">
            Unlock Your Potential
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            NovaKinetix Academy offers cutting-edge education in STEM, designed to inspire innovation and foster career growth for students, interns, and lifelong learners.
          </p>
          
          {/* Interactive Statistics Counter */}
          <div className="mb-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 px-8 py-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2 animate-pulse">
                  {stats[currentStat].number}
                </div>
                <div className="text-slate-300">
                  {stats[currentStat].label}
                </div>
              </div>
            </Card>
          </div>
          
          <div className="flex gap-4 mb-12">
            <Link to="/auth" state={{ isLogin: false }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
                Get Started
              </Button>
            </Link>
            <Link to="/videos">
              <Button size="lg" variant="outline" className="text-lg bg-slate-800/50 border-slate-700 px-8 py-4 hover:scale-105 transition-transform duration-200">
                Explore Courses
              </Button>
            </Link>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center p-6 hover:scale-105 transition-transform duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-slate-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 text-center p-8 hover:scale-105 transition-transform duration-300 group">
              <CardHeader>
                <div className="mx-auto bg-blue-500/20 text-blue-400 rounded-full h-16 w-16 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <BookOpen className="h-8 w-8" />
                </div>
                <CardTitle>Expert-Led Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Engage with comprehensive courses covering the latest in technology and science.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center p-8 hover:scale-105 transition-transform duration-300 group">
              <CardHeader>
                <div className="mx-auto bg-purple-500/20 text-purple-400 rounded-full h-16 w-16 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle>Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connect with top companies through our exclusive internship programs.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center p-8 hover:scale-105 transition-transform duration-300 group">
              <CardHeader>
                <div className="mx-auto bg-pink-500/20 text-pink-400 rounded-full h-16 w-16 flex items-center justify-center mb-4 group-hover:bg-pink-500/30 transition-colors">
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

        {/* Interactive AI Features Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">AI-Powered Learning Experience</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop&crop=center" alt="AI Technology" className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors">
                <Brain className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold">Personalized Learning Paths</h3>
                  <p className="text-slate-400">AI adapts to your learning style and pace</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors">
                <Zap className="h-8 w-8 text-purple-400" />
                <div>
                  <h3 className="text-xl font-semibold">Instant Feedback</h3>
                  <p className="text-slate-400">Get real-time assistance and corrections</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors">
                <Trophy className="h-8 w-8 text-yellow-400" />
                <div>
                  <h3 className="text-xl font-semibold">Achievement Tracking</h3>
                  <p className="text-slate-400">Monitor progress with detailed analytics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Tour Section */}
        <section className="py-20 text-center">
            <h2 className="text-4xl font-bold mb-4">Lights, Camera, Action!</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Get a quick tour of everything NovaKinetix Academy has to offer in this exciting introduction.</p>
            <div className="aspect-video bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-800/70 transition-colors cursor-pointer group">
                <div className="text-center">
                  <Film className="h-16 w-16 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-slate-300 group-hover:text-white transition-colors">(Exciting Video Tour Coming Soon!)</p>
                </div>
            </div>
        </section>

        {/* Student Stories */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Inspiring Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6 flex gap-6 items-center hover:scale-105 transition-transform duration-300">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Student 1" className="h-20 w-20 rounded-full shadow-lg" />
              <div>
                <p className="text-slate-400 italic">"The hands-on projects at NovaKinetix helped me land my dream internship. The instructors are amazing!"</p>
                <p className="font-bold mt-2 text-blue-400">- Alex Johnson, Student</p>
              </div>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 p-6 flex gap-6 items-center hover:scale-105 transition-transform duration-300">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026705d" alt="Student 2" className="h-20 w-20 rounded-full shadow-lg" />
              <div>
                <p className="text-slate-400 italic">"As a parent, I love the portal. I can easily track my child's progress and communicate with teachers."</p>
                <p className="font-bold mt-2 text-purple-400">- Maria Garcia, Parent</p>
              </div>
            </Card>
          </div>
        </section>
      </main>

       {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <img src="/lovable-uploads/e8a10f2d-c816-4587-b15a-58d9f5728d19.png" alt="NovaKinetix Academy" className="h-8 mx-auto mb-4 opacity-70" />
          <p className="text-slate-500">&copy; {new Date().getFullYear()} NovaKinetix Academy. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
