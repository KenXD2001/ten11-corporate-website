import ProjectsHero from "@/components/ProjectsPage/ProjectsHero";
import ProjectListings from "@/components/ProjectsPage/ProjectListings";

export default function ProjectsPage() {
  return (
    <div className="w-full">
      {/*Projects Hero Section*/}
      <ProjectsHero />

      {/*Projects List Section*/}
      <ProjectListings />
    </div>
  );
}
