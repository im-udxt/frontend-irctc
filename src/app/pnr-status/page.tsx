"use client";

import { FaSearch, FaTrain, FaClock, FaMapMarkedAlt, FaUser } from "react-icons/fa";
import Form, { FormField } from "@/components/ui/Form";
import Button from "@/components/ui/Button";
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

// Mock data for PNR status
const pnrStatus = {
  pnrNumber: "1234567890",
  trainNumber: "12345",
  trainName: "Rajdhani Express",
  date: "2024-03-20",
  from: "New Delhi",
  to: "Mumbai",
  departure: "06:00",
  arrival: "14:30",
  class: "3A",
  status: "Confirmed",
  passengers: [
    { name: "John Doe", status: "Confirmed", seat: "45" },
    { name: "Jane Doe", status: "Confirmed", seat: "46" },
  ],
};

export default function PNRStatusPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Check PNR Status</CardTitle>
            <CardDescription>
              Enter your 10-digit PNR number to check your ticket status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form onSubmit={(e) => {
              e.preventDefault();
              console.log("PNR status check submitted");
            }}>
              <FormField
                label="PNR Number"
                type="text"
                placeholder="Enter 10-digit PNR number"
                required
                pattern="[0-9]{10}"
              />
              <Button type="submit" className="w-full">
                <FaSearch className="mr-2" />
                Check Status
              </Button>
            </Form>
          </CardContent>
        </Card>

        {/* PNR Status Display */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>PNR #{pnrStatus.pnrNumber}</CardTitle>
                <CardDescription>
                  Journey Date: {new Date(pnrStatus.date).toLocaleDateString()}
                </CardDescription>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-green-600">
                  {pnrStatus.status}
                </p>
                <p className="text-sm text-muted">
                  Train #{pnrStatus.trainNumber}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Train Details */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="text-primary">
                    <FaTrain className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{pnrStatus.trainName}</h3>
                    <p className="text-muted">
                      {pnrStatus.from} → {pnrStatus.to}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{pnrStatus.departure}</p>
                  <p className="text-sm text-muted">Departure</p>
                </div>
              </div>

              {/* Passenger Details */}
              <div>
                <h4 className="font-medium mb-4">Passenger Details</h4>
                <div className="space-y-4">
                  {pnrStatus.passengers.map((passenger, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-primary">
                          <FaUser className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-medium">{passenger.name}</p>
                          <p className="text-sm text-muted">
                            Seat: {passenger.seat} | Class: {pnrStatus.class}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">
                          {passenger.status}
                        </p>
                        <p className="text-sm text-muted">
                          Coach: {pnrStatus.class}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 