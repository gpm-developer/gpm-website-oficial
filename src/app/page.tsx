import { PageContainer } from "@/components/layout/page-container";
import { CompanyAbout } from "@/components/pages/home/about";
import { Fields } from "@/components/pages/home/fields";
import Hero from "@/components/pages/home/hero";
import { Intro } from "@/components/pages/home/intro";

export default function Home() {
  return (
    <>
      <Hero />
      <PageContainer>
        <Intro />
        <Fields />
        <CompanyAbout />
      </PageContainer>
    </>
  );
}
