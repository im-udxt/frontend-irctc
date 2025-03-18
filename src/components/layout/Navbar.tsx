"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaTicketAlt, FaMapMarkedAlt } from "react-icons/fa";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/irctc.png"
              alt="IRCTC Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold text-primary">IRCTC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/trains">
              <Button variant="ghost">
                <FaTicketAlt className="mr-2" />
                Book Now
              </Button>
            </Link>
            <Link href="/pnr-status">
              <Button variant="ghost">
                <FaTicketAlt className="mr-2" />
                PNR Status
              </Button>
            </Link>
            <Link href="/track-train">
              <Button variant="ghost">
                <FaMapMarkedAlt className="mr-2" />
                Track Train
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Link href="/trains">
                <Button variant="ghost" className="w-full justify-start">
                  <FaTicketAlt className="mr-2" />
                  Book Now
                </Button>
              </Link>
              <Link href="/pnr-status">
                <Button variant="ghost" className="w-full justify-start">
                  <FaTicketAlt className="mr-2" />
                  PNR Status
                </Button>
              </Link>
              <Link href="/track-train">
                <Button variant="ghost" className="w-full justify-start">
                  <FaMapMarkedAlt className="mr-2" />
                  Track Train
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 