import ContentWrapper from "@/src/components/ContentWrapper";
import CadastroForm from "@/src/app/pageResources/sections/Cadastro/CadastroForm";

export type TFieldNames = "name" | "email" | "tel";

export default function Cadastro() {
  return (
    <ContentWrapper
      Element="section"
      className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between mt-32 lg:mt-44
              xl:mt-48"
    >
      <header className="pb-[40px] lg:pb-[48px] xl:pb-[38px] w-full max-w-[463px]">
        <h1
          className="text-grey-100 text-center lg:text-left font-bold text-3xl lg:text-4xl mb-6
                xl:max-w-[608px] lg:max-w-[487px]"
        >
          Cadastre-se para receber mais informações.
        </h1>
        <h2
          className="text-grey-100 text-center lg:text-left text-lg leading-[120%] lg:max-w-[487px]
          xl:max-w-[504px]"
        >
          Fique ligado no que tem de melhor no Mercado Financeiro.
        </h2>
      </header>
      <CadastroForm />
    </ContentWrapper>
  );
}
