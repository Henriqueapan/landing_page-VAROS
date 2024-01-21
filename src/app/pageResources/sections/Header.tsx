import ContentWrapper from "@/src/components/ContentWrapper";
import Navbar, {
  TNavbarMainContent,
  TNavbarSideContent,
} from "@/src/components/Navbar";
import User from "@/public/svg/User.svg";
import ShoppingCart from "@/public/svg/shopping-cart.svg";
import Varos from "@/public/svg/varos.svg";

const mainContent: Array<TNavbarMainContent> = [
  {
    title: "Produtos",
    subContent: [
      {
        title: "Carteiras",
        description:
          "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa " +
          "um futuro financeiro sólido.",
        href: "#",
      },
      {
        title: "Cursos",
        description:
          "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa " +
          "um futuro financeiro sólido.",
        href: "#",
      },
      {
        title: "Consultoria",
        description:
          "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa " +
          "um futuro financeiro sólido.",
        href: "#",
      },
    ],
  },
  {
    title: "Blog",
  },
  {
    title: "Conteúdos",
  },
  {
    title: "Quem Somos",
  },
];

const sideContent: Array<TNavbarSideContent> = [
  {
    title: "Assinar Agora",
    logo: ShoppingCart,
    href: "#",
  },
  {
    title: "Entrar",
    logo: User,
    signInButton: true,
    href: "#",
  },
];

export default function Header() {
  return (
    <ContentWrapper Element="section">
      <header>
        <Navbar
          logo={Varos}
          mainContent={mainContent}
          sideContent={sideContent}
        />
      </header>
    </ContentWrapper>
  );
}
