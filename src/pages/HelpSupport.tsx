
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MessageSquare, Book, Video, Phone, Mail, Send, HelpCircle, CheckCircle } from "lucide-react";

const HelpSupport = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the login page. We'll send you an email with instructions.",
      category: "account"
    },
    {
      question: "How do I enroll in a course?",
      answer: "Browse our course catalog, select the course you want, and click 'Enroll Now'. You'll need to complete the payment process.",
      category: "courses"
    },
    {
      question: "Can I download course videos?",
      answer: "Yes, premium members can download course videos for offline viewing. Look for the download icon next to each video.",
      category: "technical"
    },
    {
      question: "How do I contact my instructor?",
      answer: "You can message your instructor directly through the course page or use the messaging feature in your dashboard.",
      category: "courses"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Student discounts are available with valid ID.",
      category: "billing"
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const supportChannels = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      responseTime: "< 2 minutes",
      action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "24/7",
      responseTime: "< 4 hours",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      availability: "Mon-Fri 9AM-6PM",
      responseTime: "Immediate",
      action: "Call Now"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Support form submitted:', supportForm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Help & Support
          </h1>
          <p className="text-gray-600 text-lg">We're here to help you succeed. Find answers or get in touch with our team.</p>
        </div>

        <Tabs defaultValue="faq" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="status">System Status</TabsTrigger>
          </TabsList>

          <TabsContent value="faq">
            {/* Search */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                      <Badge variant="outline" className="ml-4">
                        {faq.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Support Channels */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
                {supportChannels.map((channel, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                          <channel.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{channel.title}</h3>
                          <p className="text-gray-600 mb-2">{channel.description}</p>
                          <div className="text-sm text-gray-500 space-y-1">
                            <p>Available: {channel.availability}</p>
                            <p>Response time: {channel.responseTime}</p>
                          </div>
                          <Button className="mt-3" size="sm">
                            {channel.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you soon.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={supportForm.name}
                          onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={supportForm.email}
                          onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={supportForm.subject}
                        onChange={(e) => setSupportForm({...supportForm, subject: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={supportForm.category}
                        onChange={(e) => setSupportForm({...supportForm, category: e.target.value})}
                      >
                        <option value="general">General Question</option>
                        <option value="technical">Technical Issue</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="courses">Course Related</option>
                        <option value="account">Account Issues</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={supportForm.message}
                        onChange={(e) => setSupportForm({...supportForm, message: e.target.value})}
                        placeholder="Please describe your issue or question in detail..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <Book className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>User Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Comprehensive guide to using our platform effectively</p>
                  <Button variant="outline" className="w-full">View Guide</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <Video className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Step-by-step video tutorials for common tasks</p>
                  <Button variant="outline" className="w-full">Watch Videos</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <HelpCircle className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>Community Forum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Connect with other students and get peer support</p>
                  <Button variant="outline" className="w-full">Join Forum</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="status">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  System Status - All Systems Operational
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Website</h3>
                        <Badge className="bg-green-100 text-green-800">Operational</Badge>
                      </div>
                      <p className="text-sm text-gray-600">All website features working normally</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Video Streaming</h3>
                        <Badge className="bg-green-100 text-green-800">Operational</Badge>
                      </div>
                      <p className="text-sm text-gray-600">Video playback functioning correctly</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Payment System</h3>
                        <Badge className="bg-green-100 text-green-800">Operational</Badge>
                      </div>
                      <p className="text-sm text-gray-600">All payment processing working</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Recent Updates</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>• Enhanced video quality for better learning experience</p>
                      <p>• Improved mobile app performance</p>
                      <p>• Added new course recommendation features</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HelpSupport;
