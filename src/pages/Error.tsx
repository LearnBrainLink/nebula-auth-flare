
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw, Mail } from "lucide-react";

const Error = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl text-center">
        <CardContent className="p-12">
          {/* Error Icon */}
          <div className="mx-auto mb-8 h-24 w-24 rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>

          {/* Error Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h1>
          <p className="text-xl text-gray-600 mb-8">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>

          {/* Error Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-gray-900 mb-2">Error Details:</h3>
            <div className="text-sm text-gray-600 font-mono">
              <p>Error Code: 500</p>
              <p>Timestamp: {new Date().toISOString()}</p>
              <p>Session ID: {Math.random().toString(36).substr(2, 9)}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleRefresh}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleGoHome}
            >
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Button>
            
            <Button 
              variant="outline"
            >
              <Mail className="h-4 w-4 mr-2" />
              Report Issue
            </Button>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-sm text-gray-500">
            <p>If this problem persists, please contact our support team at</p>
            <a href="mailto:support@novakinetix.com" className="text-blue-600 hover:underline">
              support@novakinetix.com
            </a>
          </div>

          {/* Troubleshooting Tips */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg text-left">
            <h3 className="font-semibold text-gray-900 mb-3">Quick troubleshooting tips:</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Check your internet connection</li>
              <li>• Clear your browser cache and cookies</li>
              <li>• Try using a different browser</li>
              <li>• Disable browser extensions temporarily</li>
              <li>• Make sure JavaScript is enabled</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Error;
