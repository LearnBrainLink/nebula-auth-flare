
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Mail, RefreshCw, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Verify = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const { toast } = useToast();

  const handleVerification = async () => {
    setIsLoading(true);
    // Simulate verification process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Email Verified!",
        description: "Your account has been successfully verified.",
      });
    }, 2000);
  };

  const handleResendCode = async () => {
    setIsResending(true);
    setTimeout(() => {
      setIsResending(false);
      toast({
        title: "Code Resent",
        description: "A new verification code has been sent to your email.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md backdrop-blur-md bg-white/10 border-white/20 shadow-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-white">Verify Your Email</CardTitle>
          <p className="text-blue-100 mt-2">
            We've sent a verification code to your email address. Please enter it below to verify your account.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Input
              placeholder="Enter verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="text-center text-xl tracking-widest bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              maxLength={6}
            />
          </div>
          
          <Button
            onClick={handleVerification}
            disabled={verificationCode.length !== 6 || isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            {isLoading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Verify Email
              </>
            )}
          </Button>

          <div className="text-center">
            <p className="text-blue-200 text-sm mb-2">Didn't receive the code?</p>
            <Button
              variant="outline"
              onClick={handleResendCode}
              disabled={isResending}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              {isResending ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Resending...
                </>
              ) : (
                "Resend Code"
              )}
            </Button>
          </div>

          <Button
            variant="ghost"
            className="w-full text-blue-300 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Verify;
