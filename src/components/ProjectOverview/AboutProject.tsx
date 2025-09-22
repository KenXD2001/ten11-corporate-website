"use client";

interface Project {
  slug: string;
  location: string;
  title: string;
  description: string;
  aboutDescription: string;
}

interface AboutProjectProps {
  project: Project;
}

export default function AboutProject({ project }: AboutProjectProps) {
  return (
    <section className="w-full py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background text-foreground overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-base leading-snug mb-6">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose">
          {project.aboutDescription}
        </p>
      </div>
    </section>
  );
}
