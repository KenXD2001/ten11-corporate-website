"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, ArrowLeft, Search, MapPin } from "lucide-react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-light text-primary/20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-primary/10 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off. Don't worry, 
            even the best hospitality requires a good map to find the right destination.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Go Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-medium rounded-xl hover:bg-primary hover:text-background transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back
          </button>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Link
            href="/about"
            className="group p-6 bg-background border border-accent-medium rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">About Us</h3>
            <p className="text-sm text-muted">Learn about our hospitality vision</p>
          </Link>

          <Link
            href="/presence"
            className="group p-6 bg-background border border-accent-medium rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Our Presence</h3>
            <p className="text-sm text-muted">Explore our lounge locations</p>
          </Link>

          <Link
            href="/contact"
            className="group p-6 bg-background border border-accent-medium rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Home className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Contact Us</h3>
            <p className="text-sm text-muted">Get in touch with our team</p>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-1.5 h-1.5 bg-primary/35 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
}
