import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, Mail, Lock, Github, Loader2, User, GraduationCap, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AnimatedBubbleBackground } from "@/components/AnimatedBubbleBackground";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    accountType: 'student',
    schoolCode: '',
    school: '',
    grade: '',
    parentEmail: '',
    parentPhone: ''
  });
  const [inputBubbleTrigger, setInputBubbleTrigger] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    // Set initial form type based on navigation state
    setIsLogin(location.state?.isLogin !== false);
  }, [location.state]);

  // New onInput to trigger bubble animation on background
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputBubbleTrigger(prev => prev + 1); // Trigger bubbles on each type
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAccountTypeChange = (value: string) => {
    setFormData({ ...formData, accountType: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!isLogin && formData.password !== formData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords do not match!",
        description: "Please check your password and try again.",
      });
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: isLogin ? "Login Successful!" : "Account Created!",
        description: isLogin ? `Welcome back to NovaKinetix Academy` : `Welcome! A verification email has been sent.`,
      });
      if (isLogin) {
        navigate('/student-dashboard');
      } else {
        navigate('/verify');
      }
    }, 2000);
  };

  const handleSocialLogin = async (provider: string) => {
    setSocialLoading(provider);
    
    // Simulate social login
    setTimeout(() => {
      setSocialLoading(null);
      toast({
        title: `${provider} Login`,
        description: `Redirecting to ${provider} for authentication...`,
      });
      // In a real app, you would redirect here.
      // For now, let's simulate success and redirect to dashboard.
      setTimeout(() => navigate('/student-dashboard'), 1500);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      {/* Interactive Animated Bubble Background */}
      <AnimatedBubbleBackground trigger={inputBubbleTrigger} />

      <div className="relative z-10 flex flex-col items-center">
        <Link to="/" className="mb-8">
            <img 
                src="/lovable-uploads/e8a10f2d-c816-4587-b15a-58d9f5728d19.png" 
                alt="NovaKinetix Academy Logo" 
                className="w-80 h-auto"
            />
        </Link>
        <Card className="w-full max-w-md backdrop-blur-md bg-white/10 border-white/20 shadow-2xl rounded-2xl overflow-hidden">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-bold text-center text-white">
              {isLogin ? 'Sign In' : 'Create Account'}
            </CardTitle>
            <p className="text-center text-blue-100">
              {isLogin ? 'Welcome back! Please sign in to continue.' : 'Join NovaKinetix Academy today.'}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
              {!isLogin && (
                <div className="space-y-0.5">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-1">
                      <Label htmlFor="fullName" className="text-white font-medium">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-300" />
                        <Input id="fullName" name="fullName" type="text" placeholder="Full name" value={formData.fullName} onChange={handleInputChange} className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-200" required />
                      </div>
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="accountType" className="text-white font-medium">I am a...</Label>
                      <Select onValueChange={handleAccountTypeChange} defaultValue={formData.accountType}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-blue-200">
                          <SelectValue placeholder="Account type" />
                        </SelectTrigger>
                        <SelectContent className="bg-purple-900/80 backdrop-blur-md border-white/20 text-white">
                          <SelectItem value="student" className="cursor-pointer">Student</SelectItem>
                          <SelectItem value="intern" className="cursor-pointer">Intern</SelectItem>
                          <SelectItem value="parent" className="cursor-pointer">Parent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  {formData.accountType === 'student' && (
                    <div className="flex flex-col md:flex-row gap-3 mt-3">
                      <div className="flex-1">
                        <Label htmlFor="schoolCode" className="text-white font-medium">School Code</Label>
                        <div className="relative">
                          <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-300" />
                          <Input id="schoolCode" name="schoolCode" type="text" placeholder="School code" value={formData.schoolCode} onChange={handleInputChange} className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-200" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="school" className="text-white font-medium">School Name</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-300" />
                          <Input id="school" name="school" type="text" placeholder="School name" value={formData.school} onChange={handleInputChange} className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-200" required />
                        </div>
                      </div>
                    </div>
                  )}
                  {formData.accountType === 'student' && (
                    <div className="flex flex-col md:flex-row gap-3 mt-3">
                      <div className="flex-1">
                        <Label htmlFor="grade" className="text-white font-medium">Grade Level</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, grade: value })} defaultValue={formData.grade}>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-blue-200">
                            <SelectValue placeholder="Grade" />
                          </SelectTrigger>
                          <SelectContent className="bg-purple-900/80 backdrop-blur-md border-white/20 text-white">
                            <SelectItem value="6th">6th Grade</SelectItem>
                            <SelectItem value="7th">7th Grade</SelectItem>
                            <SelectItem value="8th">8th Grade</SelectItem>
                            <SelectItem value="9th">9th Grade</SelectItem>
                            <SelectItem value="10th">10th Grade</SelectItem>
                            <SelectItem value="11th">11th Grade</SelectItem>
                            <SelectItem value="12th">12th Grade</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="parentEmail" className="text-white font-medium">Parent/Guardian Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-300" />
                          <Input id="parentEmail" name="parentEmail" type="email" placeholder="Parent's email" value={formData.parentEmail} onChange={handleInputChange} className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-200" required />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-300" />
                  <Input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-200" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-300" />
                  <Input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" value={formData.password} onChange={handleInputChange} className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-blue-200" required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white">
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white font-medium">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-300" />
                    <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleInputChange} className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-200" required={!isLogin} />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex justify-end">
                  <Link to="/reset-password"
                    className="text-sm text-blue-300 hover:text-white transition-colors underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {isLoading ? (isLogin ? 'Signing In...' : 'Creating Account...') : (isLogin ? 'Sign In' : 'Create Account')}
              </Button>
            </form>

            <div className="relative">
              <Separator className="bg-white/20" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-900/80 px-3 text-sm text-blue-200 backdrop-blur-sm">
                or continue with
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" onClick={() => handleSocialLogin('Google')} disabled={socialLoading === 'Google'} className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                {socialLoading === 'Google' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>}
                Google
              </Button>
              <Button variant="outline" onClick={() => handleSocialLogin('GitHub')} disabled={socialLoading === 'GitHub'} className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                {socialLoading === 'GitHub' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Github className="mr-2 h-4 w-4" />}
                GitHub
              </Button>
            </div>

            <div className="text-center">
              <span className="text-blue-200">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
              </span>
              <button onClick={() => setIsLogin(!isLogin)} className="ml-2 text-blue-300 hover:text-white font-medium underline">
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
