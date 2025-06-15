
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Film } from 'lucide-react';
import { HomeStatsCard } from '@/components/HomeStatsCard';
import { HomeRobotImageCard } from '@/components/HomeRobotImageCard';

// Utilities for reveal-on-scroll
function useRevealSection(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88) {
        el.classList.add('animate-fade-in');
      } else {
        el.classList.remove('animate-fade-in');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref]);
}

const robotImgs = [
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=300&fit=crop",
    alt: "AI Robot 1"
  },
  {
    src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=300&h=300&fit=crop",
    alt: "AI Robot 2"
  },
  {
    src: "https://images.unsplash.com/photo-1549921296-a01050bfc8c5?w=300&h=300&fit=crop",
    alt: "Humanoid Robot"
  }
];
const stats = [
  { number: "52,139", label: "Active Students" },
  { number: "99%", label: "Course Completion" },
  { number: "234", label: "STEM Video Courses" },
  { number: "1,708", label: "Internship Placements" }
];

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useRevealSection(aboutRef);
  useRevealSection(impactRef);
  useRevealSection(featuresRef);

  return (
    <div className="min-h-screen w-full bg-slate-900 text-white overflow-x-hidden relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/lovable-uploads/e8a10f2d-c816-4587-b15a-58d9f5728d19.png" alt="NovaKinetix Academy" className="h-12 drop-shadow-lg" />
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
      
      {/* Animated Particles */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none select-none">
        {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"
              style={{
                width: `${35 + (i % 6) * 14}px`,
                height: `${35 + (i % 7) * 20}px`,
                left: `${(i * 17) % 96}%`,
                top: `${(i * 23) % 95}%`,
                animationDuration: `${7 + (i % 5)}s`,
                filter: 'blur(38px)',
                opacity: 0.6 - (i % 4) * 0.18,
              }}
            />
          ))}
      </div>

      <main className="relative z-10 container mx-auto px-4">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center pt-28 md:pt-36 pb-8 mb-4">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-2 text-sm font-medium mb-6 shadow-lg">
            🚀 Welcome to the Future of Learning with NovaKinetix Academy
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
            Learn. Innovate. Succeed.
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
            NovaKinetix Academy brings you the latest in STEM with interactive courses, personalized learning, and career-building opportunities.
          </p>
          <div className="flex gap-4 mb-8 animate-fade-in">
            <Link to="/auth" state={{ isLogin: false }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-lg px-8 py-4 hover:scale-105 transition-transform duration-200 shadow-xl">
                Get Started
              </Button>
            </Link>
            <Link to="/videos">
              <Button size="lg" variant="outline" className="text-lg bg-slate-800/50 border-slate-700 px-8 py-4 hover:scale-105 transition-transform duration-200 shadow-xl">
                Explore Courses
              </Button>
            </Link>
          </div>
          {/* Robot Images - static and subtle */}
          <div className="hidden md:flex gap-10 items-center justify-center mt-8">
            {robotImgs.map((img, idx) => (
              <HomeRobotImageCard key={img.src} {...img} className={`${idx === 1 ? "w-36 h-36 md:w-40 md:h-40" : "w-28 h-28 md:w-32 md:h-32"}`} style={{marginBottom: idx === 2 ? '2.5rem' : undefined}} />
            ))}
          </div>
        </section>

        {/* Our Impact/Statistics */}
        <section ref={impactRef} className="pt-7 pb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <HomeStatsCard key={stat.label} {...stat} iconIndex={i} />
            ))}
          </div>
        </section>
        
        {/* About Section (Reveals on Scroll) */}
        <section ref={aboutRef} className="pt-12 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl mb-4 font-semibold">Why NovaKinetix?</h3>
            <p className="text-lg text-slate-300 mb-3">
              NovaKinetix Academy is not just an online school—it's a transformative STEM journey with real-world skills, curated by inspiring instructors. 
              {` `}
              <span className="whitespace-nowrap text-blue-400 font-semibold">AI-powered paths</span> and 
              {` `}
              <span className="whitespace-nowrap text-purple-400 font-semibold">career opportunities</span> await you.
            </p>
            <Link to="/resource-library">
              <Button variant="link" className="text-blue-200 underline">See our Resource Library</Button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section ref={featuresRef} className="pt-10 pb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-7 text-center">Explore Our Features</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-slate-800/60 border-slate-700 text-center p-8 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="text-blue-300 text-4xl mb-3">🧑‍🏫</div>
              <h4 className="font-semibold text-lg mb-2">Expert-Led Courses</h4>
              <p className="text-slate-300 text-sm">Engage in dynamic courses expertly taught, from robotics and AI to mathematics, with hands-on projects.</p>
            </Card>
            <Card className="bg-slate-800/60 border-slate-700 text-center p-8 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="text-purple-300 text-4xl mb-3">🚀</div>
              <h4 className="font-semibold text-lg mb-2">Career Opportunities</h4>
              <p className="text-slate-300 text-sm">Unlock potential internships and connect with renowned tech companies through our exclusive network.</p>
            </Card>
            <Card className="bg-slate-800/60 border-slate-700 text-center p-8 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="text-pink-300 text-4xl mb-3">📽️</div>
              <h4 className="font-semibold text-lg mb-2">Interactive Video Library</h4>
              <p className="text-slate-300 text-sm">Access our vast, growing video library to study at your pace, anytime, anywhere from any device.</p>
            </Card>
          </div>
        </section>

        {/* Video Tour */}
        <section className="py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Lights, Camera, Action!</h3>
          <p className="text-slate-400 mb-7 max-w-2xl mx-auto">Get a quick tour of everything NovaKinetix Academy has to offer in this exciting introduction.</p>
          <div className="aspect-video bg-slate-800/60 border border-slate-700 rounded-xl flex items-center justify-center hover:bg-slate-800/80 transition-colors cursor-pointer group mx-auto max-w-3xl">
            <div>
              <Film className="h-16 w-16 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-slate-200 group-hover:text-white">Exciting Video Tour Coming Soon!</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-slate-800 bg-slate-900/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <img src="/lovable-uploads/e8a10f2d-c816-4587-b15a-58d9f5728d19.png" alt="NovaKinetix Academy" className="h-8 mx-auto mb-4 opacity-70" />
          <p className="text-slate-500">&copy; {new Date().getFullYear()} NovaKinetix Academy. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default Index;
