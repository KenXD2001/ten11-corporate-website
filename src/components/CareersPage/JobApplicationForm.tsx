"use client";

import { useState } from "react";
import { Upload, Send, CheckCircle, AlertCircle } from "lucide-react";

interface JobApplicationFormProps {
  jobTitle: string;
  jobLocation: string;
}

export default function JobApplicationForm({ jobTitle, jobLocation }: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentCompany: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null,
    portfolio: null as File | null,
    linkedin: "",
    website: "",
    availability: "",
    salary: "",
    noticePeriod: "",
    additionalInfo: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: "resume" | "portfolio") => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the data to your backend
      console.log("Form submitted:", formData);
      
      setSubmitStatus("success");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        currentCompany: "",
        experience: "",
        coverLetter: "",
        resume: null,
        portfolio: null,
        linkedin: "",
        website: "",
        availability: "",
        salary: "",
        noticePeriod: "",
        additionalInfo: ""
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Apply for this Position</h3>
        <p className="text-sm text-muted">
          Join our team as a <span className="font-medium text-foreground">{jobTitle}</span> in <span className="font-medium text-foreground">{jobLocation}</span>
        </p>
      </div>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <h4 className="font-medium text-green-800">Application Submitted!</h4>
              <p className="text-sm text-green-700">Thank you for your interest. We'll review your application and get back to you soon.</p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <div>
              <h4 className="font-medium text-red-800">Submission Failed</h4>
              <p className="text-sm text-red-700">There was an error submitting your application. Please try again.</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div>
          <h4 className="text-lg font-medium text-foreground mb-4">Personal Information</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div>
          <h4 className="text-lg font-medium text-foreground mb-4">Professional Information</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="currentCompany" className="block text-sm font-medium text-foreground mb-2">
                Current Company
              </label>
              <input
                type="text"
                id="currentCompany"
                name="currentCompany"
                value={formData.currentCompany}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Your current company"
              />
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                Years of Experience *
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              >
                <option value="">Select experience level</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-foreground mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-foreground mb-2">
                Portfolio/Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="https://yourportfolio.com"
              />
            </div>
          </div>
        </div>

        {/* Documents */}
        <div>
          <h4 className="text-lg font-medium text-foreground mb-4">Documents</h4>
          <div className="space-y-4">
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-foreground mb-2">
                Resume/CV *
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, "resume")}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                />
                <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <p className="text-xs text-muted mt-1">PDF, DOC, or DOCX files only (Max 5MB)</p>
            </div>
            <div>
              <label htmlFor="portfolio" className="block text-sm font-medium text-foreground mb-2">
                Portfolio (Optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="portfolio"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, "portfolio")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                />
                <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <p className="text-xs text-muted mt-1">PDF, DOC, or DOCX files only (Max 5MB)</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <h4 className="text-lg font-medium text-foreground mb-4">Additional Information</h4>
          <div className="space-y-4">
            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-foreground mb-2">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-foreground mb-2">
                  Availability
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">Select availability</option>
                  <option value="immediate">Immediate</option>
                  <option value="2-weeks">2 weeks</option>
                  <option value="1-month">1 month</option>
                  <option value="2-months">2 months</option>
                  <option value="3-months">3+ months</option>
                </select>
              </div>
              <div>
                <label htmlFor="noticePeriod" className="block text-sm font-medium text-foreground mb-2">
                  Notice Period
                </label>
                <select
                  id="noticePeriod"
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">Select notice period</option>
                  <option value="none">No notice period</option>
                  <option value="2-weeks">2 weeks</option>
                  <option value="1-month">1 month</option>
                  <option value="2-months">2 months</option>
                  <option value="3-months">3 months</option>
                </select>
              </div>
              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-foreground mb-2">
                  Expected Salary
                </label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="e.g., ₹8-12 LPA"
                />
              </div>
            </div>
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-foreground mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                placeholder="Any additional information you'd like to share..."
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-background rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background"></div>
                Submitting Application...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Application
              </>
            )}
          </button>
          <p className="text-xs text-muted text-center mt-3">
            By submitting this application, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </form>
    </div>
  );
}
