"use client";

import { FaTrain, FaUser, FaCalendar, FaClock } from "react-icons/fa";
import Form, { FormField } from "@/components/ui/Form";
import Button from "@/components/ui/Button";
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Train Details Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Confirm Booking</CardTitle>
            <CardDescription>
              Review your journey details and complete the booking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <FaTrain className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Rajdhani Express</h3>
                  <p className="text-muted">Train #12345</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">3A Class</p>
                <p className="text-sm text-muted">₹1,500 per person</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Passenger Details Form */}
        <Card>
          <CardHeader>
            <CardTitle>Passenger Details</CardTitle>
            <CardDescription>
              Enter passenger information for booking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form onSubmit={(e) => {
              e.preventDefault();
              console.log("Booking submitted");
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="First Name"
                  type="text"
                  placeholder="Enter first name"
                  required
                />
                <FormField
                  label="Last Name"
                  type="text"
                  placeholder="Enter last name"
                  required
                />
              </div>

              <FormField
                label="Age"
                type="number"
                placeholder="Enter age"
                required
                min="1"
                max="120"
              />

              <FormField
                label="Gender"
                type="select"
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </FormField>

              <FormField
                label="Mobile Number"
                type="tel"
                placeholder="Enter mobile number"
                required
                pattern="[0-9]{10}"
              />

              <FormField
                label="Email"
                type="email"
                placeholder="Enter email address"
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
                  I confirm that all the information provided is correct
                </label>
              </div>

              <Button type="submit" className="w-full">
                Confirm Booking
              </Button>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 