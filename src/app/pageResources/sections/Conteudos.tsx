"use client";

import ContentWrapper from "@/src/components/ContentWrapper";
import SelecaoIcon from "@/public/svg/selecao_icon.svg";
import Fator from "@/public/svg/FATOR.svg";
import Dividendos from "@/public/svg/Dividendos.svg";
import Valuation from "@/public/svg/VZA.svg";
import CodigoPY from "@/public/svg/CODIGO.svg";
import DashPY from "@/public/svg/Dash.svg";
import Essencial from "@/public/svg/Essencial.svg";
import Reels from "@/public/svg/Minicurso.svg";
import Enciclopedia from "@/public/svg/Enciclopedia.svg";
import GraficoDetalhes from "@/public/img/grafico_detalhes_conteudo.png";
import { Dispatch, SetStateAction, useState } from "react";
import Button, { TButton } from "@/src/components/Clickables/Button";
import {
  handleStylization,
  TStylization,
} from "@/src/components/Clickables/utils";
import { CaretDown, CaretRight } from "@carbon/icons-react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";

type TConteudosDropdown = {
  conteudoState: {
    activeConteudo: string | number | null;
    setActiveConteudo: Dispatch<SetStateAction<string | number | null>>;
    conteudoSelectionHandler: Function;
  };
  subContentState: {
    activeSubContent: TSubContent;
    setActiveSubContent: Dispatch<SetStateAction<TSubContent>>;
    subContentSelectionHandler: Function;
  };
  content: TConteudosDropdownContent;
};

type TConteudosDropdownContent = Array<TConteudosDropdownItem>;

type TConteudosDropdownItem = {
  contentId: string | number | null;
  contentTypeLabel: string;
  subContents: Array<TSubContent>;
};

type TDropdownAnimatedButton = {
  buttonProps: TButton;
  conteudo: TConteudosDropdownItem;
  isActive: boolean;
  activeSubContent: TSubContent;
  onClickHandler: Function;
  onSubContentClickHandler: Function;
};

type TSubContent = {
  name: string;
  icon: any;
  label: string;
};

type TSubContentMenuItem = TSubContent & {
  isActive: boolean;
  onClickHandler: Function;
};

const conteudos: TConteudosDropdownContent = [
  {
    contentId: "carteiras",
    contentTypeLabel: "Carteiras",
    subContents: [
      {
        name: "Carteira Seleção",
        icon: SelecaoIcon,
        label: "carteira_selecao",
      },
      {
        name: "Carteira FATOR",
        icon: Fator,
        label: "carteira_fator",
      },
      {
        name: "Carteira Dividendos",
        icon: Dividendos,
        label: "carteira_dividendos",
      },
      {
        name: "Carteira Seleção",
        icon: SelecaoIcon,
        label: "carteira_selecao1",
      },
    ],
  },
  {
    contentId: "cursos",
    contentTypeLabel: "Cursos",
    subContents: [
      {
        name: "Valuation 2.0",
        icon: Valuation,
        label: "curso_valuation",
      },
      {
        name: "Código.py",
        icon: CodigoPY,
        label: "curso_codigoPY",
      },
      {
        name: "Dash.py",
        icon: DashPY,
        label: "curso_dashPY",
      },
      {
        name: "Carteira Essencial",
        icon: Essencial,
        label: "curso_carteiraEssencial",
      },
      {
        name: "Curso Reels",
        icon: Reels,
        label: "curso_reels",
      },
      {
        name: "Enciclopédia de FII",
        icon: Enciclopedia,
        label: "curso_enciclopedia",
      },
    ],
  },
  {
    contentId: "consultoria",
    contentTypeLabel: "Consultoria",
    subContents: [
      {
        name: "Consultoria VAROS",
        icon: Valuation,
        label: "consult_varos",
      },
    ],
  },
];

export default function Conteudos() {
  const [activeConteudo, setActiveConteudo] = useState(conteudos[0].contentId);

  const handleConteudosDropdownButtonClick = (
    contentId: string | number | null,
  ) => {
    if (activeConteudo === contentId) setActiveConteudo(null);
    else setActiveConteudo(contentId);
  };

  const [activeSubContent, setActiveSubContent] = useState(
    conteudos[0].subContents[0],
  );

  const handleSubContentMenuItemClick = (subContent: {
    name: string;
    icon: any;
    label: string;
  }) => {
    setActiveSubContent(subContent);
  };

  const conteudosDropdownProps: TConteudosDropdown = {
    conteudoState: {
      activeConteudo: activeConteudo,
      setActiveConteudo: setActiveConteudo,
      conteudoSelectionHandler: handleConteudosDropdownButtonClick,
    },
    subContentState: {
      activeSubContent: activeSubContent,
      setActiveSubContent: setActiveSubContent,
      subContentSelectionHandler: handleSubContentMenuItemClick,
    },
    content: conteudos,
  };

  return (
    <ContentWrapper
      Element="section"
      className="mt-[164px] lg:mt-[104px] xl:mt-[252px] flex flex-col
            justify-between max-w-[1100px]"
    >
      <header className="pb-[48px] xl:pb-[38px]">
        <h1
          className="text-grey-100 text-center lg:text-left font-bold text-2xl lg:text-4xl mb-6
                xl:max-w-[608px] lg:max-w-[487px]"
        >
          Simplifique seus investimentos e alcance seus objetivos
        </h1>
        <h2 className="text-grey-500 text-center lg:text-left text-lg leading-[120%] mb-[32px] lg:max-w-[487px] xl:max-w-[504px]">
          Conteúdos preparados para trazer mais segurança, independente do seu
          nível.
        </h2>
      </header>

      <div className="w-full lg:self-start self-center flex flex-col lg:flex-row justify-between">
        <ConteudosDropdown {...conteudosDropdownProps} />
        <ConteudoDetails
          activeSubContentDetails={activeSubContent}
        ></ConteudoDetails>
      </div>
    </ContentWrapper>
  );
}

const conteudosDropdownButtonStyilization: Record<string, TStylization> = {
  active: {
    type: "base",
    twColor: "gray",
  },
  inactive: {
    type: "outlined",
    twColor: "gray",
  },
};

function ConteudosDropdown({ ...props }: TConteudosDropdown) {
  return (
    <ul className="w-full lg:w-fit">
      {props.content.map((conteudo, idx) => {
        const isActive =
          props.conteudoState.activeConteudo === conteudo.contentId;
        const style =
          conteudosDropdownButtonStyilization[isActive ? "active" : "inactive"];

        return (
          <li key={idx} className="w-full lg:w-fit">
            <DropdownButtonWithMenu
              buttonProps={{
                stylization: style,
                className:
                  "text-center text-[18px] w-full lg:max-w-[263px] mx-auto lg:mx-0 mb-[16px] mr-2.5 px-[74.5px]",
              }}
              conteudo={conteudo}
              isActive={isActive}
              activeSubContent={props.subContentState.activeSubContent}
              onClickHandler={props.conteudoState.conteudoSelectionHandler}
              onSubContentClickHandler={
                props.subContentState.subContentSelectionHandler
              }
            />
            {/*<Button*/}
            {/*    stylization={style}*/}
            {/*    className="text-center w-full max-w-[263px] mx-auto lg:mx-0 mb-[72px] mr-2.5 px-[74.5px]"*/}
            {/*    onClick={() => handleConteudosDropdownButtonClick(conteudo.contentId)}*/}
            {/*>*/}
            {/*    {conteudo.contentTypeLabel}{isActive ? <CaretDown/> : <CaretRight/>}*/}
            {/*</Button>*/}
          </li>
        );
      })}
    </ul>
  );
}

function DropdownButtonWithMenu({
  buttonProps,
  conteudo,
  isActive,
  activeSubContent,
  onClickHandler,
  onSubContentClickHandler,
}: TDropdownAnimatedButton) {
  const menuTransitionVariants = {
    closed: {
      height: 0,
      padding: 0,
      marginBottom: 0,
      opacity: 0,
      overflow: "hidden",
      transition: {
        duration: 0.4,
        ease: "linear",
      },
    },
    open: {
      height: "fit-content",
      opacity: 1,
      marginBottom: "16px",
      padding: "32px",
      transition: {
        ease: "linear",
        // delay: .4,
        duration: 0.4,
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  } satisfies Variants;

  return (
    <div className="lg:w-[270px]">
      <Button
        {...buttonProps}
        stylization={buttonProps.stylization}
        onClick={() => onClickHandler(conteudo.contentId)}
      >
        <span className="tracking-[1.8px]">{conteudo.contentTypeLabel}</span>
        <span className="w-fit">
          {isActive ? <CaretDown /> : <CaretRight />}
        </span>
      </Button>
      <AnimatePresence>
        <motion.div
          className="border border-grey-800 rounded-[32px] bg-grey-900 text-grey-100 flex justify-center"
          animate={isActive ? "open" : "closed"}
          initial="closed"
          exit="closed"
          variants={menuTransitionVariants}
        >
          <ul className="[&>li:not(:last-child)]:mb-[22px] flex flex-col justify-start h-full">
            {conteudo.subContents.map((subContent, idx) => (
              <SubContentMenuItem
                key={idx}
                isActive={subContent.label === activeSubContent.label}
                onClickHandler={onSubContentClickHandler}
                {...subContent}
              />
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function handleSubContentMenuItemStylization(isActive: boolean) {
  const defaultClassName =
    "text-sm font-semibold p-4 " +
    "rounded-[32px] flex flex-row justify-center gap-4 text-nowrap box-border cursor-pointer";
  return defaultClassName + (isActive ? " border-0 bg-grey-800/50" : "");
}

function SubContentMenuItem({
  isActive,
  onClickHandler,
  ...subContent
}: TSubContentMenuItem) {
  return (
    <li
      className={handleSubContentMenuItemStylization(isActive)}
      onClick={() => onClickHandler(subContent)}
    >
      <Image src={subContent.icon} alt={"Logo " + subContent.name}></Image>
      <span className="w-fit">{subContent.name}</span>
    </li>
  );
}

function ConteudoDetails({
  activeSubContentDetails,
}: {
  activeSubContentDetails: TSubContent;
}) {
  "xl:min-w-[662px] lg:min-w-[560px] max-w-[348px] pt-[29px] pl-[41px] h-[536px]";
  return (
    // <div className="border-1 border-red-500 flex flex-col xl:min-w-[662px] lg:min-w-[560px] max-w-[348px]">
    <div
      className="border border-grey-800 rounded-[32px] bg-grey-900 text-grey-100 flex flex-col items-start
            xl:w-[662px] lg:w-[560px] w-full pt-[29px] pl-4 lg:pl-[41px] lg:pr-0 pr-4 lg:pb-0 pb-6 lg:max-h-[536px]
            overflow-hidden lg:mt-0 mt-8"
    >
      <div className="text-sm font-semibold py-4 flex flex-row justify-center gap-4 text-nowrap mb-6">
        <Image
          height={22}
          src={activeSubContentDetails.icon}
          alt={"Logo " + activeSubContentDetails.name}
        ></Image>
        <span className="w-fit">{activeSubContentDetails.name}</span>
      </div>
      <div className="max-w-[347px]">
        <h1
          className="text-grey-100 lg:text-left font-bold text-xl lg:text-2xl mb-4
                xl:max-w-[608px] lg:max-w-[487px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </h1>
        <h2
          className="text-grey-500 text-[16px] leading-[120%] mb-[15px] lg:max-w-[487px]
                     xl:max-w-[504px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        </h2>
      </div>
      <div className="border-0 rounded-br-[32px] self-center lg:self-start">
        <div className="w-full lg:min-w-[621px] lg:h-auto h-[292px]">
          <Image
            src={GraficoDetalhes}
            alt="Gráfico CDI x Seleção"
            style={{
              height: "100%",
              width: "auto",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "32px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
