import * as Section from "./pageResources/sections/sectionsBarrel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24 bg-c-black text-doc">
      <Section.Header />
      <Section.Hero />
      <Section.Conteudos />
      <Section.Reviews />
      <Section.Cadastro />
      <Section.Footer />
    </main>
  );
}
