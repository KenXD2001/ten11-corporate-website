export default function ExtraSections() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        {/* Internships */}
        <div className="p-8 bg-gray-50 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Internships & Freshers
          </h3>
          <p className="text-lg text-muted leading-relaxed">
            Training and growth-focused programs designed for fresh graduates
            and young professionals looking to start their journey in the
            hospitality industry.
          </p>
        </div>

        {/* Training */}
        <div className="p-8 bg-gray-50 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Training Modules
          </h3>
          <p className="text-lg text-muted leading-relaxed">
            Accessible with employee login, our training modules are tailored to
            build skills and ensure continuous professional growth.
          </p>
        </div>
      </div>
    </section>
  );
}
