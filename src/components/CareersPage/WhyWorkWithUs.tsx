import CardOneImage from "@/assets/images/Home/HomeCore0101.webp"

export default function WhyWorkWithUs() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div
          className="mb-12 sm:mb-16 md:mb-20 w-full mx-auto
"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-10 mb-4">
            <h2 className="text-base sm:text-lg uppercase tracking-widest">
              Why Work With Us
            </h2>
            <div className="border-b-2 w-16 sm:w-[100px] border-foreground/50"></div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            Join our team and be part of an innovative hospitality company that values excellence, collaboration, and growth
          </h3>
        </div>

        {/* Main Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-8">
            {/* Content card */}
            <div className="p-8 bg-primary text-white rounded-2xl shadow-md flex flex-col justify-between aspect-[4/3] gap-4">
              <h3 className="text-2xl font-semibold">
                Work with Global Leaders & Be Part of Iconic Projects
              </h3>
              <p className="text-white/90 text-xl">
                Collaborate with seasoned global professionals in hospitality
                and contribute to first-of-its-kind lounge projects across
                India, redefining customer experience.
              </p>
            </div>
            {/* Image card */}
            <div
              className="rounded-2xl shadow-md bg-cover bg-center aspect-[4/3]"
              style={{ backgroundImage: `url(${CardOneImage.src})` }}
            ></div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8">
            {/* Image card */}
            <div
              className="rounded-2xl shadow-md bg-cover bg-center aspect-[4/3]"
              style={{ backgroundImage: `url(${CardOneImage.src})` }}
            ></div>
            {/* Content card */}
            <div className="p-8 bg-primary text-white rounded-2xl shadow-md flex flex-col justify-between aspect-[4/3] gap-4">
              <h3 className="text-2xl font-semibold">
                Accelerated Growth in a Collaborative Culture
              </h3>
              <p className="text-white/90 text-xl">
                Fast-track your career in a rapidly expanding organization while
                working in a collaborative, inclusive environment that values
                innovation and teamwork.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-8">
            {/* Content card */}
            <div className="p-8 bg-primary text-white rounded-2xl shadow-md flex flex-col justify-between aspect-[4/3] gap-4">
              <h3 className="text-2xl font-semibold">
                Learn from the Best in the Industry
              </h3>
              <p className="text-white/90 text-xl">
                Gain direct exposure to top industry experts, sharpening your
                skills and building a strong foundation for long-term success.
              </p>
            </div>
            {/* Image card */}
            <div
              className="rounded-2xl shadow-md bg-cover bg-center aspect-[4/3]"
              style={{ backgroundImage: `url(${CardOneImage.src})` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
