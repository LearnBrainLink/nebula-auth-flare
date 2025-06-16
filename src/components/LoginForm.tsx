
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Lock, Eye, EyeOff, Loader2, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setMessage(null)
    
    // Simulate login process
    setTimeout(() => {
      setMessage({
        type: "success",
        text: "Welcome back! Redirecting to your dashboard...",
      })
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {message && (
        <Alert
          className={`mb-6 border-0 shadow-lg animate-fade-in ${
            message.type === "error" 
              ? "bg-gradient-to-r from-red-50 to-red-100 text-red-800" 
              : "bg-gradient-to-r from-green-50 to-green-100 text-green-800"
          }`}
        >
          <AlertDescription className="font-medium flex items-center gap-2">
            {message.type === "success" && <CheckCircle className="w-5 h-5" />}
            {message.text}
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-lg font-semibold text-gray-700">
            Email Address
          </Label>
          <div className="relative group">
            <Mail className={`absolute left-4 top-4 h-5 w-5 transition-all duration-300 ${
              focusedField === 'email' || email ? 'text-blue-600' : 'text-gray-400'
            }`} />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={`pl-12 h-14 text-lg border-2 transition-all duration-300 ${
                focusedField === 'email' 
                  ? 'border-blue-500 shadow-lg shadow-blue-100 scale-[1.02]' 
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
              required
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-lg font-semibold text-gray-700">
            Password
          </Label>
          <div className="relative group">
            <Lock className={`absolute left-4 top-4 h-5 w-5 transition-all duration-300 ${
              focusedField === 'password' || password ? 'text-blue-600' : 'text-gray-400'
            }`} />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
              className={`pl-12 pr-12 h-14 text-lg border-2 transition-all duration-300 ${
                focusedField === 'password' 
                  ? 'border-blue-500 shadow-lg shadow-blue-100 scale-[1.02]' 
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
              required
              disabled={isLoading}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-2 top-2 h-10 w-10 hover:bg-blue-50 transition-colors duration-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 cursor-pointer group">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-2 border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2 transition-all duration-300"
            />
            <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
              Remember me
            </span>
          </label>
          <Link
            to="/reset-password"
            className="text-sm text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          disabled={isLoading || !email || !password}
          className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-3 h-6 w-6 animate-spin" />
              Signing you in...
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/auth"
            className="font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300 hover:underline"
          >
            Create one here
          </Link>
        </p>
      </div>
    </div>
  )
}
