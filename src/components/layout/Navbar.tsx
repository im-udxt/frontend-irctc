"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { FaUser, FaBars, FaTimes, FaTrain, FaTicketAlt, FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            IRCTC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/trains" className="text-foreground hover:text-primary transition-colors">
              <FaTrain className="inline-block mr-1" />
              Book Now
            </Link>
            <Link href="/pnr-status" className="text-foreground hover:text-primary transition-colors">
              <FaTicketAlt className="inline-block mr-1" />
              PNR Status
            </Link>
            <Link href="/track-train" className="text-foreground hover:text-primary transition-colors">
              <FaMapMarkedAlt className="inline-block mr-1" />
              Track Train
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                <FaUser className="mr-2" />
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/trains"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaTrain className="inline-block mr-2" />
                Book Now
              </Link>
              <Link
                href="/pnr-status"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaTicketAlt className="inline-block mr-2" />
                PNR Status
              </Link>
              <Link
                href="/track-train"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaMapMarkedAlt className="inline-block mr-2" />
                Track Train
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    <FaUser className="mr-2" />
                    Login
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 