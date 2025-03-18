"use client";

import { FaTrain, FaClock, FaMapMarkedAlt, FaExclamationCircle } from "react-icons/fa";
import Form, { FormField } from "@/components/ui/Form";
import Button from "@/components/ui/Button";
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

// Mock data for train status
const trainStatus = {
  trainNumber: "12345",
  trainName: "Rajdhani Express",
  currentStatus: "On Time",
  currentStation: "New Delhi",
  nextStation: "Agra",
  expectedArrival: "14:30",
  actualArrival: "14:30",
  delay: "0 min",
  route: [
    { station: "Mumbai", arrival: "06:00", departure: "06:05", status: "Departed" },
    { station: "Vadodara", arrival: "09:30", departure: "09:35", status: "Departed" },
    { station: "New Delhi", arrival: "12:00", departure: "12:05", status: "Arrived" },
    { station: "Agra", arrival: "14:30", departure: "14:35", status: "Expected" },
    { station: "Lucknow", arrival: "17:00", departure: "17:05", status: "Expected" },
  ],
};

export default function TrackTrainPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Track Your Train</CardTitle>
            <CardDescription>
              Enter your train number or PNR to check live status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form onSubmit={(e) => {
              e.preventDefault();
              console.log("Track train submitted");
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Train Number"
                  type="text"
                  placeholder="Enter train number"
                />
                <FormField
                  label="PNR Number"
                  type="text"
                  placeholder="Enter PNR number"
                />
              </div>
              <Button type="submit" className="w-full">
                Track Train
              </Button>
            </Form>
          </CardContent>
        </Card>

        {/* Train Status */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{trainStatus.trainName}</CardTitle>
                <CardDescription>Train #{trainStatus.trainNumber}</CardDescription>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-green-600">
                  {trainStatus.currentStatus}
                </p>
                <p className="text-sm text-muted">
                  Delay: {trainStatus.delay}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Current Location */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-muted">Current Station</p>
                  <p className="font-semibold">{trainStatus.currentStation}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted">Next Station</p>
                  <p className="font-semibold">{trainStatus.nextStation}</p>
                </div>
              </div>

              {/* Route Timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
                {trainStatus.route.map((stop, index) => (
                  <div key={index} className="relative pl-12 pb-6 last:pb-0">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                      <FaTrain className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{stop.station}</p>
                        <p className="text-sm text-muted">
                          Arr: {stop.arrival} | Dep: {stop.departure}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${
                          stop.status === "Departed" ? "text-green-600" :
                          stop.status === "Arrived" ? "text-blue-600" :
                          "text-gray-600"
                        }`}>
                          {stop.status}
                        </span>
                        {stop.status === "Expected" && (
                          <FaExclamationCircle className="text-yellow-500" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
 