export default function MapSection() {
  return (
    <section className="py-24 bg-white">
      <div className=" mx-auto px-6 md:px-12 text-center flex flex-col items-center space-y-12">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-light">
          Find Us on Globe
        </h4>
        <div className="w-full h-[400px] overflow-hidden shadow-lg border border-primary">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2584986600364!2d80.2753994!3d13.0827969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526500435b8af3%3A0x494e01d4ef6c6dd6!2sInej%20-%20IRCTC%20Executive%20Lounge!5e0!3m2!1sen!2sin!4v1756977824822!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
