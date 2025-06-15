
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Copy, Terminal, Download, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SetupEnv = () => {
  const [showApiKeys, setShowApiKeys] = useState(false);
  const [envConfig, setEnvConfig] = useState({
    nodeVersion: '18.17.0',
    npmVersion: '9.6.7',
    reactVersion: '18.2.0',
    apiKey: 'nk_live_sk_***************************',
    databaseUrl: 'postgresql://user:pass@localhost:5432/novakinetix',
    jwtSecret: '***************************'
  });

  const { toast } = useToast();

  const setupSteps = [
    {
      title: "Install Node.js",
      description: "Download and install Node.js version 18.17.0 or higher",
      status: "completed",
      command: "node --version"
    },
    {
      title: "Install Dependencies", 
      description: "Install all required npm packages",
      status: "completed",
      command: "npm install"
    },
    {
      title: "Environment Configuration",
      description: "Set up your environment variables",
      status: "pending",
      command: "cp .env.example .env"
    },
    {
      title: "Database Setup",
      description: "Initialize and migrate your database",
      status: "pending", 
      command: "npm run db:migrate"
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Command copied to clipboard",
    });
  };

  const downloadEnvFile = () => {
    const envContent = `# NovaKinetix Academy Environment Configuration
NODE_ENV=development
PORT=3000

# API Configuration
REACT_APP_API_URL=http://localhost:3001
REACT_APP_API_KEY=${envConfig.apiKey}

# Database
DATABASE_URL=${envConfig.databaseUrl}

# Authentication
JWT_SECRET=${envConfig.jwtSecret}
JWT_EXPIRES_IN=7d

# External Services
STRIPE_SECRET_KEY=sk_test_...
SENDGRID_API_KEY=SG...
GOOGLE_CLIENT_ID=...
GITHUB_CLIENT_ID=...
`;

    const blob = new Blob([envContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '.env';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Environment Setup</h1>
          <p className="text-gray-600">Configure your development environment for NovaKinetix Academy</p>
        </div>

        {/* Setup Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Terminal className="h-5 w-5 mr-2" />
              Setup Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {setupSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div className="flex-shrink-0">
                    {step.status === 'completed' ? (
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">{index + 1}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                    <div className="mt-2 flex items-center space-x-2">
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                        {step.command}
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(step.command)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Badge variant={step.status === 'completed' ? 'default' : 'secondary'}>
                    {step.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Environment Variables */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Environment Variables</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowApiKeys(!showApiKeys)}
                >
                  {showApiKeys ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                  {showApiKeys ? 'Hide' : 'Show'} Keys
                </Button>
                <Button size="sm" onClick={downloadEnvFile}>
                  <Download className="h-4 w-4 mr-2" />
                  Download .env
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>API Base URL</Label>
                <Input value="http://localhost:3001" readOnly />
              </div>
              <div className="space-y-2">
                <Label>API Key</Label>
                <Input 
                  type={showApiKeys ? "text" : "password"}
                  value={envConfig.apiKey} 
                  readOnly 
                />
              </div>
              <div className="space-y-2">
                <Label>Database URL</Label>
                <Input 
                  type={showApiKeys ? "text" : "password"}
                  value={envConfig.databaseUrl} 
                  readOnly 
                />
              </div>
              <div className="space-y-2">
                <Label>JWT Secret</Label>
                <Input 
                  type={showApiKeys ? "text" : "password"}
                  value={envConfig.jwtSecret} 
                  readOnly 
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Requirements */}
        <Card>
          <CardHeader>
            <CardTitle>System Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Node.js</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">{envConfig.nodeVersion}</p>
                <p className="text-sm text-gray-600">Required: 18.0.0+</p>
                <Badge className="mt-2">Installed</Badge>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">NPM</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">{envConfig.npmVersion}</p>
                <p className="text-sm text-gray-600">Required: 9.0.0+</p>
                <Badge className="mt-2">Installed</Badge>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">React</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">{envConfig.reactVersion}</p>
                <p className="text-sm text-gray-600">Required: 18.0.0+</p>
                <Badge className="mt-2">Installed</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SetupEnv;
