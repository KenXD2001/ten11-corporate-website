"use client";

import { useState } from "react";
import { MapPin, Users, Clock, ArrowRight } from "lucide-react";
import HeroSection from "@/components/CareerOpportunities/HeroSection";
import CurrentOpportunities from "@/components/CareersPage/CurrentOpportunities";

export default function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuickFilter, setSelectedQuickFilter] = useState("");
  const [shouldOpenFilters, setShouldOpenFilters] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleQuickFilter = (filter: string) => {
    setSelectedQuickFilter(filter);
    setSearchTerm(""); // Clear search when using quick filter
  };

  const handleFilterClick = () => {
    setShouldOpenFilters(true);
    // Reset after a short delay
    setTimeout(() => setShouldOpenFilters(false), 100);
  };

  const handleClearAll = () => {
    setSearchTerm("");
    setSelectedQuickFilter("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection 
        onSearch={handleSearch}
        onFilterClick={handleFilterClick}
        onQuickFilter={handleQuickFilter}
        searchTerm={searchTerm}
      />

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-1 sm:mb-2">50+</h3>
              <p className="text-sm sm:text-base text-muted">Open Positions</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-1 sm:mb-2">15+</h3>
              <p className="text-sm sm:text-base text-muted">Cities</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-1 sm:mb-2">24/7</h3>
              <p className="text-sm sm:text-base text-muted">Support</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-1 sm:mb-2">100%</h3>
              <p className="text-sm sm:text-base text-muted">Growth Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities Section */}
      <div id="opportunities-table">
        <CurrentOpportunities 
          searchTerm={searchTerm}
          selectedQuickFilter={selectedQuickFilter}
          shouldOpenFilters={shouldOpenFilters}
          onClearAll={handleClearAll}
        />
      </div>

      {/* Why Work With Us Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 sm:mb-6">
              Why Work With Us?
            </h2>
            <p className="text-base sm:text-lg text-muted max-w-3xl mx-auto px-4">
              Here, you&apos;ll find more than a job. You&apos;ll find a culture that values your ideas, 
              a place to grow personally and professionally, and a team that feels like family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Learn from Global Trailblazers</h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Work alongside leaders who&apos;ve redefined hospitality across the world and gain insights from their expertise.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">First-of-its-Kind Journey</h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Shape India&apos;s most innovative lounge experiences and set new industry benchmarks in hospitality.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Grow Faster Than You Imagined</h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                With a company that&apos;s expanding rapidly, your career growth won&apos;t wait for opportunities to come to you.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Thrive in a Culture That Values You</h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Collaboration, inclusivity, and recognition are at the heart of everything we do.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Sharpen Your Edge</h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Gain hands-on exposure, mentorship, and skills that will set you apart in the hospitality world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We're Building Teams Across Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 sm:mb-6">
              We&apos;re Building Teams Across
            </h2>
            <p className="text-base sm:text-lg text-muted max-w-3xl mx-auto px-4">
              Whether you&apos;re passionate about creating unforgettable guest experiences, 
              crafting culinary excellence, or driving business innovation — there&apos;s a place for you at Ten 11 Hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Guest Relations & Front Office</h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                The face of hospitality, where every first impression counts and guest satisfaction is our priority.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Food & Beverage Service</h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Delivering world-class dining and beverage experiences that exceed guest expectations.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Lounge Operations</h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Ensuring seamless journeys for our guests with efficient and comfortable lounge experiences.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Kitchen Operations</h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Where creativity meets consistency in crafting exceptional culinary experiences.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Food & Beverage Management</h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Shaping quality and service at scale with strategic planning and execution.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Project & Facility Management</h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Building and maintaining iconic spaces that define the future of hospitality.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Business Development</h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Driving growth and new partnerships to expand our reach and impact.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Marketing, Branding & Partnerships</h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Telling our story to the world and building meaningful connections with our audience.
              </p>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <p className="text-lg sm:text-xl text-foreground font-medium mb-4">
              Whether you&apos;re a fresh graduate eager to learn or a seasoned professional!
            </p>
            <p className="text-base sm:text-lg text-muted">
              Turn your talent into impact.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-background/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Send your resume to careers@ten11hospitality.com and let&apos;s explore opportunities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-background text-primary rounded-lg sm:rounded-xl font-medium hover:bg-background/90 transition-colors text-sm sm:text-base"
            >
              Contact Us
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:careers@ten11hospitality.com"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary/20 text-background rounded-lg sm:rounded-xl font-medium hover:bg-primary/30 transition-colors border border-background/20 text-sm sm:text-base"
            >
              Send Resume
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
