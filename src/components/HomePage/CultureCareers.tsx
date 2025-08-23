import Image from "next/image"

export default function CultureCareers() {
  return (
    <section className="relative bg-background dark:bg-background py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Left Side - Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/hospitality-staff.jpg" // Replace with actual image path
            alt="Hospitality staff in action"
            fill
            className="object-cover shadow-lg bg-black/5"
          />
        </div>

        {/* Right Side - Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Culture & Careers
          </h2>

          <p className="text-lg text-muted">
            We believe in people-first hospitality. Our team is our greatest strength,
            driven by passion, collaboration, and growth.
          </p>

          <p className="text-lg text-muted">
            From young talent to experienced professionals, we nurture careers that
            grow with the company.
          </p>

          <button className="px-6 py-3 bg-primary text-background shadow hover:bg-secondary transition">
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  )
}
