"use client";

import Link from "next/link";
import Form, { FormField } from "@/components/ui/Form";
import Button from "@/components/ui/Button";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Create your account</h2>
          <p className="mt-2 text-muted">
            Join IRCTC to start booking your train tickets
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {/* Social Signup */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => console.log("Google signup")}
            >
              <FaGoogle className="mr-2" />
              Google
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => console.log("Github signup")}
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

          {/* Signup Form */}
          <Form onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted");
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                required
              />
              <FormField
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                required
              />
            </div>

            <FormField
              label="Email"
              type="email"
              placeholder="Enter your email"
              required
            />

            <FormField
              label="Password"
              type="password"
              placeholder="Create a password"
              required
            />

            <FormField
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              required
            />

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-foreground"
              >
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="font-medium text-primary hover:text-primary/90"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-primary hover:text-primary/90"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </Form>

          <p className="text-center text-sm text-muted">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:text-primary/90"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 