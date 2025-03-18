"use client";

import Link from "next/link";
import Form, { FormField } from "@/components/ui/Form";
import Button from "@/components/ui/Button";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Welcome back</h2>
          <p className="mt-2 text-muted">
            Sign in to your account to continue
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {/* Social Login */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => console.log("Google login")}
            >
              <FaGoogle className="mr-2" />
              Google
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => console.log("Github login")}
            >
              <FaGithub className="mr-2" />
              Github
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted">
                Or continue with
              </span>
            </div>
          </div>

          {/* Login Form */}
          <Form onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted");
          }}>
            <FormField
              label="Email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <FormField
              label="Password"
              type="password"
              placeholder="Enter your password"
              required
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-foreground"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-primary hover:text-primary/90"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </Form>

          <p className="text-center text-sm text-muted">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary hover:text-primary/90"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 