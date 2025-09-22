"use client";

import { useState, useEffect } from "react";
import {
  Filter,
  ChevronDown,
  MapPin,
  Users,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

interface CurrentOpportunitiesProps {
  searchTerm?: string;
  selectedQuickFilter?: string;
  shouldOpenFilters?: boolean;
  onClearAll?: () => void;
}

export default function CurrentOpportunities({
  searchTerm = "",
  selectedQuickFilter = "",
  shouldOpenFilters = false,
  onClearAll,
}: CurrentOpportunitiesProps) {
  // Job data structure with seat counts
  interface Job {
    id: number;
    type: string;
    title: string;
    location: string;
    employmentType: string;
    timeType: string;
    seats: number;
    url: string;
  }

  // Filter options - updated for hospitality sector
  const categories = [
    "Hotel Management",
    "Food & Beverage",
    "Culinary Arts",
    "Housekeeping",
    "Front Office",
    "Event Management",
    "Sales & Marketing",
    "Revenue Management",
    "Hospitality Finance",
    "Guest Services",
  ];

  const employmentTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
    "Internship",
  ];

  const locations = ["Mumbai", "Chennai", "Vadodara"];

  const jobTypes = ["On-site", "Hybrid", "Remote"];

  // Sample jobs data with seat counts - updated for hospitality
  const jobs: Job[] = [
    {
      id: 1,
      type: "Hotel Management",
      title: "Hotel General Manager",
      location: "Mumbai",
      employmentType: "Full-time",
      timeType: "On-site",
      seats: 2,
      url: "/ten11/careers/job/1",
    },
    {
      id: 2,
      type: "Food & Beverage",
      title: "F&B Director",
      location: "Chennai",
      employmentType: "Full-time",
      timeType: "On-site",
      seats: 1,
      url: "/ten11/careers/job/2",
    },
    {
      id: 3,
      type: "Culinary Arts",
      title: "Executive Chef",
      location: "New Delhi",
      employmentType: "Full-time",
      timeType: "On-site",
      seats: 3,
      url: "/ten11/careers/job/3",
    },
    {
      id: 4,
      type: "Housekeeping",
      title: "Housekeeping Manager",
      location: "Mumbai",
      employmentType: "Full-time",
      timeType: "On-site",
      seats: 4,
      url: "/ten11/careers/job/4",
    },
    {
      id: 5,
      type: "Front Office",
      title: "Front Office Manager",
      location: "Chennai",
      employmentType: "Full-time",
      timeType: "On-site",
      seats: 2,
      url: "/ten11/careers/job/5",
    },
    {
      id: 6,
      type: "Event Management",
      title: "Event Coordinator",
      location: "New Delhi",
      employmentType: "Full-time",
      timeType: "On-site",
      seats: 5,
      url: "/ten11/careers/job/6",
    },
    {
      id: 7,
      type: "Sales & Marketing",
      title: "Sales Manager - Hospitality",
      location: "Mumbai",
      employmentType: "Full-time",
      timeType: "Hybrid",
      seats: 3,
      url: "/ten11/careers/job/7",
    },
    {
      id: 8,
      type: "Revenue Management",
      title: "Revenue Analyst",
      location: "Chennai",
      employmentType: "Full-time",
      timeType: "Remote",
      seats: 2,
      url: "/ten11/careers/job/8",
    },
    {
      id: 9,
      type: "Guest Services",
      title: "Guest Relations Manager",
      location: "New Delhi",
      employmentType: "Full-time",
      timeType: "On-site",
      seats: 4,
      url: "/ten11/careers/job/9",
    },
    {
      id: 10,
      type: "Culinary Arts",
      title: "Sous Chef",
      location: "Mumbai",
      employmentType: "Full-time",
      timeType: "On-site",
      seats: 6,
      url: "/ten11/careers/job/10",
    },
  ];

  // State for filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState<
    string[]
  >([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"latest" | "a-z" | "most-seats">(
    "latest"
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  // Toggle functions for filters
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleEmploymentType = (type: string) => {
    setSelectedEmploymentTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleLocation = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  const toggleJobType = (type: string) => {
    setSelectedJobTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedEmploymentTypes([]);
    setSelectedLocations([]);
    setSelectedJobTypes([]);
    // Note: searchTerm and selectedQuickFilter are managed by parent component
  };

  // Filter jobs based on selected filters, search term, and quick filter
  const filteredJobs = jobs
    .filter((job) => {
      // Search term filter
      if (searchTerm) {
        return (
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      return true;
    })
    .filter((job) => {
      // Quick filter from hero section
      if (selectedQuickFilter) {
        return job.type === selectedQuickFilter;
      }
      return true;
    })
    .filter(
      (job) =>
        selectedCategories.length === 0 || selectedCategories.includes(job.type)
    )
    .filter(
      (job) =>
        selectedEmploymentTypes.length === 0 ||
        selectedEmploymentTypes.includes(job.employmentType)
    )
    .filter(
      (job) =>
        selectedLocations.length === 0 ||
        selectedLocations.includes(job.location)
    )
    .filter(
      (job) =>
        selectedJobTypes.length === 0 || selectedJobTypes.includes(job.timeType)
    )
    .sort((a, b) => {
      if (sortOrder === "a-z") return a.title.localeCompare(b.title);
      if (sortOrder === "most-seats") return b.seats - a.seats;
      // For "latest" we'll sort by ID (assuming higher ID means newer)
      return b.id - a.id;
    });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Count active filters
  const activeFilterCount =
    selectedCategories.length +
    selectedEmploymentTypes.length +
    selectedLocations.length +
    selectedJobTypes.length;

  // Effect to open filters when shouldOpenFilters is true
  useEffect(() => {
    if (shouldOpenFilters) {
      setIsFilterOpen(true);
    }
  }, [shouldOpenFilters]);

  // Note: Quick filter clearing is handled by parent component

  return (
    <section className="w-full bg-background text-foreground py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        <div className="mb-12 sm:mb-16 lg:mb-20 mx-0 text-center md:text-left">
          <div className="flex items-center gap-6 sm:gap-10 mb-3 sm:mb-4 justify-center md:justify-start">
            <h2 className="text-sm sm:text-base lg:text-lg uppercase tracking-widest text-muted">
              Current Opportunities
            </h2>
            <div className="border-b-2 border-primary/30 w-12 sm:w-16 lg:w-20"></div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-foreground mb-4 sm:mb-6 px-4 md:px-0">
            We&apos;re always on the lookout for fresh talent and experienced
            professionals who share our values and vision.
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 w-full">
          {/* Left side: Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm text-muted">Sort by:</span>
            <div className="relative">
              <select
                value={sortOrder}
                onChange={(e) =>
                  setSortOrder(
                    e.target.value as "latest" | "a-z" | "most-seats"
                  )
                }
                className="appearance-none bg-white border border-primary/20 rounded-lg sm:rounded-xl pl-3 sm:pl-4 pr-6 sm:pr-8 py-2 sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground text-sm sm:text-base"
              >
                <option value="latest">Latest</option>
                <option value="a-z">A-Z</option>
                <option value="most-seats">Most Seats</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted sm:w-4 sm:h-4"
              />
            </div>
          </div>

          {/* Right side: Filter */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-primary/10 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-primary/20 transition-all border border-primary/20 text-foreground text-sm sm:text-base"
          >
            <Filter size={16} className="sm:w-4 sm:h-5" />
            <span>Filter</span>
            {activeFilterCount > 0 && (
              <span className="bg-primary text-background text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Filter Section */}
        {isFilterOpen && (
          <div className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-primary/20 shadow-lg">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Filters
              </h3>
              <button
                onClick={clearAllFilters}
                className="text-xs sm:text-sm text-muted hover:text-foreground flex items-center gap-1"
              >
                <X size={14} className="sm:w-4 sm:h-4" />
                Clear all
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Side - 3 columns grid */}
              <div className="space-y-6 sm:space-y-8">
                {/* Category Section */}
                <div>
                  <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-foreground">
                    Category
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    {categories.map((cat) => (
                      <label
                        key={cat}
                        className="inline-flex items-center space-x-2 py-1.5 group cursor-pointer"
                      >
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(cat)}
                            onChange={() => toggleCategory(cat)}
                            className="sr-only"
                          />
                          <div
                            className={`w-5 h-5 border rounded-md flex items-center justify-center transition-all ${
                              selectedCategories.includes(cat)
                                ? "bg-primary border-primary"
                                : "border-primary/30 group-hover:border-primary/60"
                            }`}
                          >
                            {selectedCategories.includes(cat) && (
                              <svg
                                className="w-3 h-3 text-background"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-xs sm:text-sm group-hover:text-foreground transition-colors text-muted">
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Employment Type Section */}
                <div>
                  <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-foreground">
                    Employment Type
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    {employmentTypes.map((type) => (
                      <label
                        key={type}
                        className="inline-flex items-center space-x-2 py-1.5 group cursor-pointer"
                      >
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedEmploymentTypes.includes(type)}
                            onChange={() => toggleEmploymentType(type)}
                            className="sr-only"
                          />
                          <div
                            className={`w-5 h-5 border rounded-md flex items-center justify-center transition-all ${
                              selectedEmploymentTypes.includes(type)
                                ? "bg-primary border-primary"
                                : "border-primary/30 group-hover:border-primary/60"
                            }`}
                          >
                            {selectedEmploymentTypes.includes(type) && (
                              <svg
                                className="w-3 h-3 text-background"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-xs sm:text-sm group-hover:text-foreground transition-colors text-muted">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - 2 columns grid */}
              <div className="space-y-6 sm:space-y-8">
                {/* Location Section */}
                <div>
                  <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-foreground">
                    Location
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {locations.map((loc) => (
                      <label
                        key={loc}
                        className="inline-flex items-center space-x-2 py-1.5 group cursor-pointer"
                      >
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedLocations.includes(loc)}
                            onChange={() => toggleLocation(loc)}
                            className="sr-only"
                          />
                          <div
                            className={`w-5 h-5 border rounded-md flex items-center justify-center transition-all ${
                              selectedLocations.includes(loc)
                                ? "bg-primary border-primary"
                                : "border-primary/30 group-hover:border-primary/60"
                            }`}
                          >
                            {selectedLocations.includes(loc) && (
                              <svg
                                className="w-3 h-3 text-background"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-xs sm:text-sm group-hover:text-foreground transition-colors text-muted">
                          {loc}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Type Section */}
                <div>
                  <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-foreground">
                    Job Type
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {jobTypes.map((type) => (
                      <label
                        key={type}
                        className="inline-flex items-center space-x-2 py-1.5 group cursor-pointer"
                      >
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedJobTypes.includes(type)}
                            onChange={() => toggleJobType(type)}
                            className="sr-only"
                          />
                          <div
                            className={`w-5 h-5 border rounded-md flex items-center justify-center transition-all ${
                              selectedJobTypes.includes(type)
                                ? "bg-primary border-primary"
                                : "border-primary/30 group-hover:border-primary/60"
                            }`}
                          >
                            {selectedJobTypes.includes(type) && (
                              <svg
                                className="w-3 h-3 text-background"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-xs sm:text-sm group-hover:text-foreground transition-colors text-muted">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Apply Filters Button */}
            <div className="flex justify-end mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-primary/20">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-background rounded-lg sm:rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm sm:text-base"
              >
                Apply Filters
                <Filter size={14} className="sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className="text-sm sm:text-base text-muted">
              <span className="font-semibold text-foreground">
                {filteredJobs.length}
              </span>{" "}
              opportunities found
            </p>
            {(searchTerm || selectedQuickFilter) && (
              <div className="flex flex-wrap items-center gap-2">
                {searchTerm && (
                  <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                    Search: &quot;{searchTerm}&quot;
                  </span>
                )}
                {selectedQuickFilter && (
                  <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                    Category: {selectedQuickFilter}
                  </span>
                )}
              </div>
            )}
          </div>
          {(activeFilterCount > 0 || searchTerm || selectedQuickFilter) && (
            <button
              onClick={() => {
                clearAllFilters();
                if (onClearAll) {
                  onClearAll();
                }
              }}
              className="text-xs sm:text-sm text-muted hover:text-foreground flex items-center gap-1"
            >
              <X size={14} className="sm:w-4 sm:h-4" />
              Clear all
            </button>
          )}
        </div>

        {/* Main Body - Job Listings Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-primary/20 shadow-lg overflow-hidden">
          {currentJobs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead className="bg-primary/5 border-b border-primary/20">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-foreground">
                      Position
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-foreground">
                      Category
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-foreground">
                      Location
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-foreground">
                      Type
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-foreground">
                      Seats
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-foreground">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/10">
                  {currentJobs.map((job) => (
                    <tr
                      key={job.id}
                      className="hover:bg-primary/5 transition-colors"
                    >
                      <td className="px-3 sm:px-6 py-3 sm:py-4">
                        <div>
                          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground">
                            {job.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1 sm:mt-2">
                            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted">
                              <Clock size={12} className="sm:w-3.5 sm:h-3.5" />
                              <span>{job.employmentType}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted">
                              <svg
                                className="w-3 h-3 sm:w-4 sm:h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                ></path>
                              </svg>
                              <span>{job.timeType}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4">
                        <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                          {job.type}
                        </span>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted">
                          <MapPin size={12} className="sm:w-4 sm:h-4" />
                          <span>{job.location}</span>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4">
                        <span className="text-xs sm:text-sm text-muted">
                          {job.employmentType}
                        </span>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted">
                          <Users size={12} className="sm:w-4 sm:h-4" />
                          <span>
                            {job.seats} seat{job.seats !== 1 ? "s" : ""}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4">
                        <a
                          href={job.url}
                          className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-primary text-background rounded-lg sm:rounded-xl font-medium hover:bg-primary/90 transition-colors group text-xs sm:text-sm"
                        >
                          Apply Now
                          <ArrowRight
                            size={12}
                            className="group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4"
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12">
              <div className="text-sm sm:text-base text-muted mb-2">
                No opportunities match your filters
              </div>
              <button
                onClick={clearAllFilters}
                className="text-xs sm:text-sm text-primary hover:text-primary/80 underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Footer - Pagination */}
        {filteredJobs.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-primary/20">
            <div className="text-xs sm:text-sm text-muted">
              Showing{" "}
              <span className="font-medium text-foreground">
                {indexOfFirstJob + 1}-
                {Math.min(indexOfLastJob, filteredJobs.length)}
              </span>{" "}
              of{" "}
              <span className="font-medium text-foreground">
                {filteredJobs.length}
              </span>{" "}
              jobs
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-foreground text-xs sm:text-sm"
              >
                <ChevronLeft size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Previous</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => paginate(page)}
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm ${
                        page === currentPage
                          ? "bg-primary text-background"
                          : "bg-primary/10 hover:bg-primary/20 text-foreground"
                      } transition-colors`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-foreground text-xs sm:text-sm"
              >
                <span className="hidden xs:inline">Next</span>
                <ChevronRight size={14} className="sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
