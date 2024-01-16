import * as Section from "./pageResources/sections/sectionsBarrel"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 bg-c-black text-doc">
        <Section.Hero/>
        <Section.Conteudos/>
    </main>
  )
}
