import { PageContainer } from "@/components/layout/page-container";
import { SectionContainer } from "@/components/layout/section-container";
import Hero from "@/components/pages/home/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <PageContainer>
        <SectionContainer>HOMEPAGE</SectionContainer>
      </PageContainer>
    </>
  );
}
