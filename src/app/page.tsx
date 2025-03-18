"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { FaTrain, FaSearch, FaTicketAlt, FaMapMarkedAlt } from "react-icons/fa";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary to-secondary">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <AnimatedSection className="max-w-2xl text-white" delay={0.2}>
            <h1 className="text-5xl font-bold mb-6">
              Book Your Train Journey with Ease
            </h1>
            <p className="text-xl mb-8">
              Experience seamless train booking, real-time tracking, and exclusive offers with IRCTC.
            </p>
            <div className="flex gap-4">
              <Link href="/trains">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Book Now
                </Button>
              </Link>
              <Link href="/track-train">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Track Train
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Services</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaTrain className="w-8 h-8" />,
                title: "Train Booking",
                description: "Book your train tickets easily and securely",
                link: "/trains"
              },
              {
                icon: <FaSearch className="w-8 h-8" />,
                title: "Train Search",
                description: "Find trains between any two stations",
                link: "/trains"
              },
              {
                icon: <FaTicketAlt className="w-8 h-8" />,
                title: "PNR Status",
                description: "Check your booking status instantly",
                link: "/pnr-status"
              },
              {
                icon: <FaMapMarkedAlt className="w-8 h-8" />,
                title: "Live Tracking",
                description: "Track your train in real-time",
                link: "/track-train"
              },
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Link
                  href={service.link}
                  className="card flex flex-col items-center text-center p-6 hover:shadow-md transition-shadow"
                >
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted">{service.description}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Booking Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-8">
              <h2 className="text-3xl font-bold">Quick Booking</h2>
            </AnimatedSection>
            <AnimatedSection className="card">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">From Station</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Enter source station"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">To Station</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Enter destination station"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <input
                      type="date"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Class</label>
                    <select className="input-field">
                      <option value="">Select Class</option>
                      <option value="1A">First AC</option>
                      <option value="2A">Second AC</option>
                      <option value="3A">Third AC</option>
                      <option value="SL">Sleeper</option>
                    </select>
                  </div>
                </div>
                <Link href="/trains">
                  <Button className="w-full">
                    <FaSearch className="mr-3" />
                    Search Trains
                  </Button>
                </Link>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
} 