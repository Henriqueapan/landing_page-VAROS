import ContentWrapper from "@/src/components/ContentWrapper";
import Image from "next/image";
import VarosText from "@/public/svg/varos_text.svg";
import { list } from "postcss";

const footerListItemArray: Array<TFooterListItem> = [
  {
    title: "Cursos",
    content: [
      {
        text: "Valuation do Zero ao Avançado 2.0",
        href: "#",
      },
      {
        text: "Código.py",
        href: "#",
      },
      {
        text: "Minicurso Reels",
        href: "#",
      },
      {
        text: "Enciclopédia de FII",
        href: "#",
      },
    ],
  },
  {
    title: "Carteiras",
    content: [
      {
        text: "Carteira FATOR",
        href: "#",
      },
      {
        text: "Carteira Seleção",
        href: "#",
      },
      {
        text: "Carteira Essencial",
        href: "#",
      },
      {
        text: "Carteira Small Caps",
        href: "#",
      },
      {
        text: "Carteira Dividendos",
        href: "#",
      },
      {
        text: "Carteira FIIs",
        href: "#",
      },
    ],
  },
  {
    title: "Sobre",
    content: [
      {
        text: "Quem somos",
        href: "#",
      },
    ],
  },
  {
    title: "Redes Sociais",
    content: [
      {
        text: "Instagram",
        href: "#",
      },
      {
        text: "Twitter",
        href: "#",
      },
      {
        text: "Youtube",
        href: "#",
      },
    ],
  },
];

export default function Footer() {
  return (
    <ContentWrapper Element="footer" className="mt-32 pt-14">
      <div className="flex flex-col gap-8 xl:flex-row justify-between">
        <div className="flex flex-col justify-between gap-6">
          <a className="m-0 p-0 w-fit" href="#">
            <Image
              src={VarosText}
              alt="Logotipo da VAROS com nome da empresa em baixo"
            />
          </a>
          <div className="pr-20">
            <p>VAROS 2023</p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>

        <ul className="flex flex-row justify-between grow flex-wrap">
          {footerListItemArray.map((footerListItem, idx) => (
            <FooterListItem
              key={idx}
              title={footerListItem.title}
              content={footerListItem.content}
            />
          ))}
        </ul>
      </div>
    </ContentWrapper>
  );
}

type TFooterListItem = {
  title: string;
  content: Array<TFooterListItemAnchor>;
};

type TFooterListItemAnchor = {
  text: string;
  href: string;
};

function FooterListItem({ ...props }: TFooterListItem) {
  return (
    <li className="[&_a:not(:last-child)]:mb-6 mx-2 my-8 lg:my-0">
      <p className="text-2xl mb-6 font-bold">{props.title}</p>
      {props.content.map((listItemAnchor, idx) => (
        <a
          key={idx}
          href={listItemAnchor.href}
          className="block text-wrap max-w-[172px]"
        >
          {listItemAnchor.text}
        </a>
      ))}
    </li>
  );
}
