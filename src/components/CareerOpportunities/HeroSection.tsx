"use client";

import { useState, useEffect } from "react";
import { Search, MapPin, Users, Clock, Filter } from "lucide-react";
import HomeCoreImage from "@/assets/images/Home/HomeCore0101.webp";

interface HeroSectionProps {
  onSearch: (term: string) => void;
  onFilterClick: () => void;
  onQuickFilter: (filter: string) => void;
  searchTerm?: string;
}

export default function HeroSection({ onSearch, onFilterClick, onQuickFilter, searchTerm: externalSearchTerm }: HeroSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [searchResults, setSearchResults] = useState<Array<{
    id: number;
    type: string;
    title: string;
    location: string;
    employmentType: string;
    timeType: string;
    seats: number;
    url: string;
  }>>([]);

  const quickFilters = [
    "Hotel Management",
    "Food & Beverage", 
    "Culinary Arts",
    "Guest Services",
    "Sales & Marketing"
  ];

  // Sample jobs data for search results
  const allJobs = [
    {
      id: 1,
      type: "Hotel Management",
      title: "Hotel General Manager",
      location: "Mumbai",
      employmentType: "Full-time",
      timeType: "On-site",
      seats: 2,
      url: "#",
    },
    {
      id: 2,
      type: "Food & Beverage",
      title: "F&B Director",
      location: "Chennai",
      employmentType: "Full-time",
      timeType: "On-site",
      seats: 1,
      url: "#",
    },
    {
      id: 3,
      type: "Culinary Arts",
      title: "Executive Chef",
      location: "New Delhi",
      employmentType: "Full-time",
      timeType: "On-site",
      seats: 3,
      url: "#",
    },
    {
      id: 4,
      type: "Housekeeping",
      title: "Housekeeping Manager",
      location: "Mumbai",
      employmentType: "Full-time",
      timeType: "On-site",
      seats: 4,
      url: "#",
    },
    {
      id: 5,
      type: "Front Office",
      title: "Front Office Manager",
      location: "Chennai",
      employmentType: "Full-time",
      timeType: "On-site",
      seats: 2,
      url: "#",
    },
  ];

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    onSearch(term);
    
    if (term.length > 0) {
      const filtered = allJobs.filter(job => 
        job.title.toLowerCase().includes(term.toLowerCase()) ||
        job.type.toLowerCase().includes(term.toLowerCase()) ||
        job.location.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filtered);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
      setSearchResults([]);
    }
  };

  const handleQuickFilter = (filter: string) => {
    onQuickFilter(filter);
    // Scroll to table section
    const tableSection = document.getElementById('opportunities-table');
    if (tableSection) {
      tableSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterClick = () => {
    onFilterClick();
    // Scroll to table section
    const tableSection = document.getElementById('opportunities-table');
    if (tableSection) {
      tableSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sync internal search term with external one
  useEffect(() => {
    if (externalSearchTerm !== undefined) {
      setSearchTerm(externalSearchTerm);
      if (externalSearchTerm === "") {
        setShowSearchResults(false);
        setSearchResults([]);
      }
    }
  }, [externalSearchTerm]);

  // Parallax scroll effect
  useEffect(() => {
  const handleScroll = () => {
    setOffsetY(-window.scrollY * 0.05);
  };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `url(${HomeCoreImage.src})`,
          transform: `translateY(${offsetY}px)`,
          height: "110%",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
            Build More Than a Career,
            <span className="block text-primary">Build a Legacy.</span>
        </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2">
            At Ten 11 Hospitality, your journey matters as much as your destination.
            We&apos;re not just building world-class transit lounges — we&apos;re creating spaces where people feel cared for, inspired, and connected.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto px-2">
          <div className="relative">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
              <input
                type="text"
                placeholder="Search for positions, locations, or departments..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => {
                  setIsSearchFocused(false);
                  // Delay hiding results to allow clicking on them
                  setTimeout(() => setShowSearchResults(false), 200);
                }}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-10 sm:pl-14 pr-20 sm:pr-24 text-sm sm:text-base md:text-lg bg-white/90 backdrop-blur-sm border-2 border-white/30 rounded-xl sm:rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 shadow-lg"
              />
              <Search className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-6 sm:h-6 text-muted" />
              <button 
                onClick={handleFilterClick}
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 px-2 sm:px-4 py-1.5 sm:py-2 bg-primary text-background rounded-lg sm:rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
              >
                <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Filter</span>
              </button>
            </div>
            
            {/* Search Results Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm border border-primary/20 rounded-xl sm:rounded-2xl shadow-xl z-50 max-h-80 sm:max-h-96 overflow-y-auto">
                <div className="p-3 sm:p-4">
                  <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3">
                    Search Results ({searchResults.length})
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    {searchResults.map((job) => (
                      <div
                        key={job.id}
                        className="p-3 sm:p-4 bg-white/80 border border-primary/10 rounded-lg sm:rounded-xl hover:bg-primary/5 transition-colors cursor-pointer"
                        onClick={() => {
                          setSearchTerm(job.title);
                          setShowSearchResults(false);
                          onSearch(job.title);
                          // Scroll to table
                          const tableSection = document.getElementById('opportunities-table');
                          if (tableSection) {
                            tableSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                          <h4 className="text-sm sm:text-base font-semibold text-foreground">{job.title}</h4>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 self-start">
                            {job.type}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted">
                          <div className="flex items-center gap-1.5">
                            <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={12} className="sm:w-3.5 sm:h-3.5" />
                            <span>{job.employmentType}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users size={12} className="sm:w-3.5 sm:h-3.5" />
                            <span>{job.seats} seat{job.seats !== 1 ? "s" : ""}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Quick Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 px-2">
            {quickFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleQuickFilter(filter)}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full text-xs sm:text-sm text-foreground hover:bg-primary hover:text-background transition-all duration-300 whitespace-nowrap"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
