
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  Video,
  Briefcase,
  ArrowRight,
  Play,
  BookOpen,
  Award,
  Rocket,
  Menu,
  X,
  PlayCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HomeRobotImageCard } from "@/components/HomeRobotImageCard";

// Fake robotic images
const robotImgs = [
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=310&h=310&fit=crop",
    alt: "Robot 1"
  },
  {
    src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=310&h=310&fit=crop",
    alt: "Robot 2"
  },
  {
    src: "https://images.unsplash.com/photo-1549921296-a01050bfc8c5?w=310&h=310&fit=crop",
    alt: "Robot 3"
  }
];

// Fake statistics
const fakeStats = [
  { number: "10,000+", label: "Active Students" },
  { number: "500+", label: "Expert Instructors" },
  { number: "1,000+", label: "Video Lessons" },
  { number: "200+", label: "Partner Companies" },
];

// Features
const features = [
  {
    icon: BookOpen,
    title: "Interactive Learning",
    desc: "Engage with cutting-edge educational content designed for the next generation of innovators.",
  },
  {
    icon: Video,
    title: "Expert-Led Videos",
    desc: "Learn from industry professionals and academic experts through our video library.",
  },
  {
    icon: Briefcase,
    title: "Real Internships",
    desc: "Apply for hands-on internship opportunities with leading technology companies.",
  },
  {
    icon: Award,
    title: "Certification Programs",
    desc: "Earn recognized certifications that validate your skills and knowledge.",
  },
  {
    icon: Users,
    title: "Community Learning",
    desc: "Connect with peers, mentors, and industry professionals in our community.",
  },
  {
    icon: Rocket,
    title: "Innovation Labs",
    desc: "Access to state-of-the-art resources to bring your ideas to life.",
  }
];

const Index = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Helper for modal close
  const handleVideoModalClose = () => setIsVideoModalOpen(false);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-slate-900 overflow-x-hidden flex flex-col">
      {/* Header */}
      <header className="w-full sticky top-0 bg-white/90 z-40 shadow-md">
        <div className="container mx-auto flex items-center justify-between py-3 px-2 md:px-4">
          <Link to="/">
            <img
              src="/lovable-uploads/e8a10f2d-c816-4587-b15a-58d9f5728d19.png"
              alt="NovaKinetix Academy"
              className="h-12 w-auto rounded-lg shadow"
            />
          </Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex gap-7 items-center font-medium">
            <Link to="/videos" className="hover:text-blue-600 transition-colors">Videos</Link>
            <Link to="/internships" className="hover:text-blue-600 transition-colors">Internships</Link>
            <Link to="/resource-library" className="hover:text-blue-600 transition-colors">Resources</Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link to="/help-support" className="hover:text-blue-600 transition-colors">Support</Link>
            <Link to="/auth" state={{ isLogin: true }}>
              <Button variant="outline" className="ml-2">Sign In</Button>
            </Link>
            <Link to="/auth" state={{ isLogin: false }}>
              <Button className="ml-1 bg-gradient-to-r from-blue-500 to-purple-600">Get Started</Button>
            </Link>
          </nav>
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden ml-2 text-blue-600" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {/* Mobile nav drawer */}
        {isMobileOpen && (
          <div className="block md:hidden bg-white shadow-lg px-4 py-4 z-50">
            <nav className="flex flex-col gap-3">
              <Link to="/videos" onClick={() => setIsMobileOpen(false)}>Videos</Link>
              <Link to="/internships" onClick={() => setIsMobileOpen(false)}>Internships</Link>
              <Link to="/resource-library" onClick={() => setIsMobileOpen(false)}>Resources</Link>
              <Link to="/about" onClick={() => setIsMobileOpen(false)}>About</Link>
              <Link to="/help-support" onClick={() => setIsMobileOpen(false)}>Support</Link>
              <Link to="/auth" state={{ isLogin: true }}>
                <Button variant="outline" className="mt-1 w-full">Sign In</Button>
              </Link>
              <Link to="/auth" state={{ isLogin: false }}>
                <Button className="mt-1 w-full bg-gradient-to-r from-blue-500 to-purple-600">Get Started</Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col-reverse lg:flex-row gap-10 md:gap-12 pt-20 pb-10 items-center animate-fade-in">
        {/* Content */}
        <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start">
          <h1 className="text-5xl md:text-6xl leading-tight font-bold bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
            Empowering Future <span className="text-blue-600">Innovators</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mb-7 font-medium">
            Join the next generation of technology leaders through cutting-edge STEM education, hands-on learning experiences, and real-world applications.
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto mb-7">
            <Link to="/auth" state={{ isLogin: false }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-lg px-8 py-4 font-bold hover:scale-105 shadow-lg transition"
              >
                <GraduationCap className="mr-3" />
                Enroll Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 font-bold hover:scale-105 shadow-lg"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <Play className="mr-3" />
              Watch Demo
            </Button>
          </div>
        </div>
        {/* Robotic Images */}
        <div className="flex gap-7 mb-8 lg:mb-0 w-full justify-center lg:w-auto">
          {robotImgs.map((img, i) => (
            <HomeRobotImageCard
              key={img.src}
              {...img}
              className={`shadow-xl ${i === 1 ? "scale-110 rotate-1" : ""}`}
              style={{ marginTop: i === 2 ? '1.8rem' : undefined }}
            />
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {fakeStats.map((stat, i) => (
            <Card key={stat.label} className="bg-white/90 border-0 shadow-xl rounded-xl p-8 flex flex-col items-center hover:scale-105 transform transition-all duration-300">
              <div className="text-4xl font-extrabold text-blue-600 mb-2 animate-pulse">{stat.number}</div>
              <div className="text-lg text-slate-700">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-18 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Why Choose NovaKinetix Academy?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <Card key={feature.title} className="bg-white/90 border-blue-100 rounded-xl text-center p-8 group hover:shadow-2xl transition-all duration-300 animate-fade-in">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl flex items-center justify-center mb-6 shadow group-hover:scale-110 transition">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-lg mb-1 text-blue-700">{feature.title}</div>
                <div className="text-slate-700 text-sm">{feature.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-18 bg-gradient-to-r from-blue-600 to-blue-800 text-white mt-14 mb-1 shadow-inner">
        <div className="container mx-auto text-center py-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Shape the Future?</h2>
          <p className="text-lg md:text-2xl mb-9 text-white/90 max-w-xl mx-auto">
            Join thousands of students already building tomorrow's innovations today.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/auth" state={{ isLogin: false }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-12 py-6 text-xl"
              >
                <GraduationCap className="mr-3" />
                Enroll Now
              </Button>
            </Link>
            <Link to="/internships">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-12 py-6 text-xl"
              >
                <Briefcase className="mr-3" />
                Explore Internships
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Placeholder for Courses & Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Featured Courses & Student Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
            <Card className="shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center p-8">
                <BookOpen className="mb-5 w-10 h-10 text-blue-600"/>
                <div className="font-semibold text-lg mb-2">AI Robotics Fundamentals</div>
                <div className="text-slate-700 text-sm">Our flagship course: learn real robotics & programming from zero to hero!</div>
              </div>
            </Card>
            <Card className="shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center p-8">
                <Award className="mb-5 w-10 h-10 text-yellow-500"/>
                <div className="font-semibold text-lg mb-2">Student Spotlight</div>
                <div className="text-slate-700 text-sm">See how NovaKinetix scholars landed top internships in STEM companies.</div>
              </div>
            </Card>
            <Card className="shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center p-8">
                <Rocket className="mb-5 w-10 h-10 text-purple-500"/>
                <div className="font-semibold text-lg mb-2">Innovation Lab Access</div>
                <div className="text-slate-700 text-sm">Members can experiment and build in our virtual and real-world labs!</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-slate-900 text-white py-12 mt-8 border-t border-slate-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/lovable-uploads/e8a10f2d-c816-4587-b15a-58d9f5728d19.png"
              alt="NovaKinetix Academy"
              className="h-10 mb-3"
            />
            <p className="text-slate-400 max-w-xs text-center md:text-left">
              Empowering future innovators through STEM. <br /> &copy; {new Date().getFullYear()} NovaKinetix Academy.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            <Link to="/videos" className="hover:underline">Videos</Link>
            <Link to="/internships" className="hover:underline">Internships</Link>
            <Link to="/resource-library" className="hover:underline">Resources</Link>
            <Link to="/help-support" className="hover:underline">Support</Link>
            <Link to="/parent-portal" className="hover:underline">Parent Portal</Link>
            <Link to="/calendar" className="hover:underline">Calendar</Link>
          </nav>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-[101] flex items-center justify-center bg-black/80 px-3">
          <div className="relative bg-white rounded-xl p-8 max-w-md w-full shadow-lg animate-fade-in">
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 text-slate-500 hover:text-slate-700"
              onClick={handleVideoModalClose}
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="flex flex-col items-center gap-4">
              <PlayCircle className="w-16 h-16 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">Video Demo Coming Soon!</h3>
              <p className="text-slate-700 text-center">
                Thank you for your interest. A demo video will be available here shortly.
              </p>
            </div>
            <Button onClick={handleVideoModalClose} className="mt-8 w-full bg-blue-600 text-white">Close</Button>
          </div>
        </div>
      )}

    </div>
  );
};
export default Index;
