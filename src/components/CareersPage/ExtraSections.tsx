export default function ExtraSections() {
  return (
    <section className="w-full bg-white text-[var(--foreground)] py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Top Section */}
        <div className="mb-20 w-5/6 mx-0 text-center md:text-left">
          <div className="flex items-center gap-10 mb-4 justify-center md:justify-start">
            <h2 className="text-lg uppercase tracking-widest text-[var(--foreground)]/70">
              CAREERS & TRAINING
            </h2>
            <div className="border-b-2 border-[var(--foreground)]/70 w-20"></div>
          </div>

          <h3 className="text-4xl md:text-5xl font-light leading-tight text-[var(--foreground)] mb-4">
            We offer structured programs for fresh graduates and professionals to kickstart their journey in hospitality and grow with us.
          </h3>
        </div>

        {/* Bottom Section: Internships & Training */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Internships */}
          <div className="p-8 border border-background hover:border-muted transition-border duration-300">
            <h4 className="text-xl md:text-2xl lg:text-3xl font-light mb-4">
              Internships & Freshers
            </h4>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              Training and growth-focused programs designed for fresh graduates and young professionals looking to start their journey in the hospitality industry.
            </p>
          </div>

          {/* Training */}
          <div className="p-8 border border-background hover:border-muted transition-border duration-300">
            <h4 className="text-xl md:text-2xl lg:text-3xl font-light mb-4">
              Training Modules
            </h4>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              Accessible with employee login, our training modules are tailored to build skills and ensure continuous professional growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
