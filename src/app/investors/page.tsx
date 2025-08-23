import InvestorsHero from "@/components/InvestorsPage/InvestorsHero";
import InvestmentPhilosophy from "@/components/InvestorsPage/InvestmentPhilosophy";
import CurrentPartners from "@/components/InvestorsPage/CurrentPartners";

export default function InvestorsPage() {
  return (
    <div className="container mx-auto px-0">
      <InvestorsHero />
      <InvestmentPhilosophy />
      <CurrentPartners />
    </div>
  );
}
