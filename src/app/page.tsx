import { PageContainer } from "@/components/layout/page-container";
import Hero from "@/components/pages/home/hero";
import { Intro } from "@/components/pages/home/intro";

export default function Home() {
  return (
    <>
      <Hero />
      <PageContainer>
        <Intro />
      </PageContainer>
    </>
  );
}
