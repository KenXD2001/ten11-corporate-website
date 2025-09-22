import { jobsData } from "@/data/jobsData";

// Generate static params for all job IDs
export async function generateStaticParams() {
  return jobsData.map((job) => ({
    id: job.id.toString(),
  }));
}

export default function JobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
