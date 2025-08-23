import ProjectsHero from "@/components/ProjectsPage/ProjectsHero";
import ProjectListings from "@/components/ProjectsPage/ProjectListings";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6">
      {/*Projects Hero Section*/}
      <ProjectsHero />

      {/*Projects List Section*/}
      <ProjectListings />
    </div>
  );
}
