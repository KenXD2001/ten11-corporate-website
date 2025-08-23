import PressHero from "@/components/PressMediaPage/PressHero";
import MediaMentions from "@/components/PressMediaPage/MediaMentions";
import CompanyAnnouncements from "@/components/PressMediaPage/CompanyAnnouncements";
import PressReleases from "@/components/PressMediaPage/PressReleases";
import ContactPR from "@/components/PressMediaPage/ContactPR";

export default function PressMediaPage() {
  return (
    <div>
      <PressHero />
      <MediaMentions />
      <CompanyAnnouncements />
      <PressReleases />
      <ContactPR />
    </div>
  );
}
