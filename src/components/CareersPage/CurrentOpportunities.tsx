"use client";

import { useState } from "react";
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

export default function CurrentOpportunities() {
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
  "Guest Services"
];

const employmentTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Freelance",
  "Internship",
];

const locations = [
  "Mumbai",
  "Chennai",
  "New Delhi",
  "Bangalore",
  "Hyderabad",
  "Goa",
  "Jaipur",
  "Kolkata",
  "Kochi"
];

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
  {
    id: 6,
    type: "Event Management",
    title: "Event Coordinator",
    location: "New Delhi",
    employmentType: "Full-time",
    timeType: "On-site",
    seats: 5,
    url: "#",
  },
  {
    id: 7,
    type: "Sales & Marketing",
    title: "Sales Manager - Hospitality",
    location: "Mumbai",
    employmentType: "Full-time",
    timeType: "Hybrid",
    seats: 3,
    url: "#",
  },
  {
    id: 8,
    type: "Revenue Management",
    title: "Revenue Analyst",
    location: "Chennai",
    employmentType: "Full-time",
    timeType: "Remote",
    seats: 2,
    url: "#",
  },
  {
    id: 9,
    type: "Guest Services",
    title: "Guest Relations Manager",
    location: "New Delhi",
    employmentType: "Full-time",
    timeType: "On-site",
    seats: 4,
    url: "#",
  },
  {
    id: 10,
    type: "Culinary Arts",
    title: "Sous Chef",
    location: "Mumbai",
    employmentType: "Full-time",
    timeType: "On-site",
    seats: 6,
    url: "#",
  }
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
  };

  // Filter jobs based on selected filters
  const filteredJobs = jobs
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

  return (
    <section className="w-full bg-primary text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="mb-20 mx-0 text-center md:text-left">
          <div className="flex items-center gap-10 mb-4 justify-center md:justify-start">
            <h2 className="text-lg uppercase tracking-widest text-[var(--background)]/70">
              Current Opportunities
            </h2>
            <div className="border-b-2 border-[var(--background)]/70 w-20"></div>
          </div>

          <h3 className="text-4xl md:text-5xl font-light leading-tight text-[var(--background)] mb-6">
            We&apos;re always on the lookout for fresh talent and experienced
            professionals who share our values and vision.
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full">
          {/* Left side: Sort */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-background-200">Sort by:</span>
            <div className="relative">
              <select
                value={sortOrder}
                onChange={(e) =>
                  setSortOrder(
                    e.target.value as "latest" | "a-z" | "most-seats"
                  )
                }
                className="appearance-none bg-white/10 border border-white/20 rounded-xl pl-4 pr-8 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                <option value="latest">Latest</option>
                <option value="a-z">A-Z</option>
                <option value="most-seats">Most Seats</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          {/* Right side: Filter */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/10"
          >
            <Filter size={18} />
            <span>Filter</span>
            {activeFilterCount > 0 && (
              <span className="bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Filter Section */}
        {isFilterOpen && (
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                onClick={clearAllFilters}
                className="text-sm text-background-300 hover:text-background-100 flex items-center gap-1"
              >
                <X size={16} />
                Clear all
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side - 3 columns grid */}
              <div className="space-y-8">
                {/* Category Section */}
                <div>
                  <h3 className="font-semibold mb-4 text-background-200">
                    Category
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
                                ? "bg-primary-500 border-primary-500"
                                : "border-white/30 group-hover:border-white/60"
                            }`}
                          >
                            {selectedCategories.includes(cat) && (
                              <svg
                                className="w-3 h-3 text-white"
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
                        <span className="text-sm group-hover:text-background-200 transition-colors">
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Employment Type Section */}
                <div>
                  <h3 className="font-semibold mb-4 text-background-200">
                    Employment Type
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
                                ? "bg-primary-500 border-primary-500"
                                : "border-white/30 group-hover:border-white/60"
                            }`}
                          >
                            {selectedEmploymentTypes.includes(type) && (
                              <svg
                                className="w-3 h-3 text-white"
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
                        <span className="text-sm group-hover:text-background-200 transition-colors">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - 2 columns grid */}
              <div className="space-y-8">
                {/* Location Section */}
                <div>
                  <h3 className="font-semibold mb-4 text-background-200">
                    Location
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                                ? "bg-primary-500 border-primary-500"
                                : "border-white/30 group-hover:border-white/60"
                            }`}
                          >
                            {selectedLocations.includes(loc) && (
                              <svg
                                className="w-3 h-3 text-white"
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
                        <span className="text-sm group-hover:text-background-200 transition-colors">
                          {loc}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Type Section */}
                <div>
                  <h3 className="font-semibold mb-4 text-background-200">
                    Job Type
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                                ? "bg-primary-500 border-primary-500"
                                : "border-white/30 group-hover:border-white/60"
                            }`}
                          >
                            {selectedJobTypes.includes(type) && (
                              <svg
                                className="w-3 h-3 text-white"
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
                        <span className="text-sm group-hover:text-background-200 transition-colors">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Apply Filters Button */}
            <div className="flex justify-end mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="px-6 py-3 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-colors flex items-center gap-2"
              >
                Apply Filters
                <Filter size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="flex justify-between items-center">
          <p className="text-background-200">
            <span className="font-semibold text-white">
              {filteredJobs.length}
            </span>{" "}
            opportunities found
          </p>
          {activeFilterCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-background-300 hover:text-background-100 flex items-center gap-1"
            >
              <X size={16} />
              Clear filters
            </button>
          )}
        </div>

        {/* Main Body - Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentJobs.length > 0 ? (
            currentJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-primary-400/30 transition-all hover:shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-medium text-background-300 bg-primary-400/10 px-3 py-1 rounded-full border border-background/40">
                    {job.type}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-background-200 bg-primary-400/10 px-3 py-1 rounded-full">
                    <Users size={14} />
                    <span>
                      {job.seats} seat{job.seats !== 1 ? "s" : ""} available
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>

                <div className="flex flex-wrap gap-4 mt-4 mb-5">
                  <div className="flex items-center gap-1.5 text-sm text-background-200">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-background-200">
                    <Clock size={16} />
                    <span>{job.employmentType}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-background-200">
                    <svg
                      className="w-4 h-4"
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

                <a
                  href={job.url}
                  className="inline-flex items-center gap-2 text-background-300 hover:text-background-100 font-medium group mt-4"
                >
                  Apply Now
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <div className="text-background-200 mb-2">
                No opportunities match your filters
              </div>
              <button
                onClick={clearAllFilters}
                className="text-background-300 hover:text-background-100 underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Footer - Pagination */}
        {filteredJobs.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-white/10">
            <div className="text-sm text-background-200">
              Showing{" "}
              <span className="font-medium text-white">
                {indexOfFirstJob + 1}-
                {Math.min(indexOfLastJob, filteredJobs.length)}
              </span>{" "}
              of{" "}
              <span className="font-medium text-white">
                {filteredJobs.length}
              </span>{" "}
              jobs
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={16} />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => paginate(page)}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                        page === currentPage
                          ? "bg-primary-500 text-white"
                          : "bg-white/10 hover:bg-white/15"
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
                className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
