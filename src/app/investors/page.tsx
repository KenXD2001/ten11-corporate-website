import InvestorsHero from "@/components/InvestorsPage/InvestorsHero";
import InvestmentPhilosophy from "@/components/InvestorsPage/InvestmentPhilosophy";
import CurrentPartners from "@/components/InvestorsPage/CurrentPartners";

export default function InvestorsPage() {
  return (
    <div className="full">
      <InvestorsHero />
      <InvestmentPhilosophy />
      <CurrentPartners />
    </div>
  );
}
