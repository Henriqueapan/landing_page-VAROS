import ContentWrapper from "../../../components/ContentWrapper";
import Anchor from "../../../components/Clickables/Anchor";
import { ArrowRight } from "@carbon/icons-react";
import LogoInfiniteSlider from "../../../components/Sliders/LogoInfiniteSlider";
import Fator from "@/public/svg/FATOR.svg";
import Dividendos from "@/public/svg/Dividendos.svg";
import py from "@/public/svg/py.svg";
import Image from "next/image";
import { ReactNode } from "react";

type TProductHeroCardListItem = {
  alignment: "start" | "end" | "center";
  "margin-bottom"?: number;
  productLogoSrc: any;
  productName?: string;
  htmlProductName?: ReactNode;
  blurredLightDecorationStyle?: TBlurredLightProductCardDecoration;
};

type TBlurredLightProductCardDecoration = {
  width: number;
  height: number;
  centerColor: Array<number>;
  tipColor: Array<number>;
  alignment: number;
};

export default function Hero() {
  return (
    <ContentWrapper
      Element="section"
      className="flex flex-row justify-between max-w-[1100px]"
    >
      <header className="flex flex-col">
        <h1
          className="text-grey-100 text-center lg:text-left font-bold text-4xl lg:text-5xl xl:text-6xl mb-6
                xl:max-w-[564px] lg:max-w-[487px]"
        >
          Investir de forma mais inteligente passa por aqui.
        </h1>
        <h2 className="text-grey-200 text-center lg:text-left text-lg leading-[120%] mb-[32px] lg:max-w-[487px]">
          Fazemos de tudo para que você possa conquistar seus sonhos da melhor
          forma possível.
        </h2>
        <Anchor
          stylization={{ type: "blended", twColor: "green" }}
          className="w-full max-w-[263px] mx-auto lg:mx-0
                mb-[72px]"
        >
          Comprar agora <ArrowRight />
        </Anchor>
        <LogoInfiniteSlider
          extraClassName="self-center lg:self-start"
          max-width={350}
        />
      </header>

      <div className="hidden lg:block">
        <ul className="py-5 w-[350px] flex flex-col">
          <ProductHeroCardListItem
            alignment="start"
            margin-bottom={73}
            productName="Carteira FATOR"
            productLogoSrc={Fator}
            blurredLightDecorationStyle={{
              width: 128,
              height: 97,
              alignment: handleProductCardDecorationAligment("end"),
              centerColor: [57, 255, 217],
              tipColor: [19, 19, 19],
            }}
          />
          <ProductHeroCardListItem
            alignment="end"
            margin-bottom={73}
            productName="Carteira de Dividendos"
            productLogoSrc={Dividendos}
            blurredLightDecorationStyle={{
              width: 188,
              height: 97,
              alignment: handleProductCardDecorationAligment("start"),
              centerColor: [211.04, 214.49, 223.12],
              tipColor: [19, 19, 19],
            }}
          />
          <ProductHeroCardListItem
            alignment="start"
            productLogoSrc={py}
            htmlProductName={
              <span>
                Código<span className="text-turquoise-200">.py</span>
              </span>
            }
            blurredLightDecorationStyle={{
              width: 188,
              height: 97,
              alignment: handleProductCardDecorationAligment("end"),
              centerColor: [28, 183, 153],
              tipColor: [19, 19, 19],
            }}
          />
        </ul>
      </div>
    </ContentWrapper>
  );
}

function ProductHeroCardListItem(props: TProductHeroCardListItem) {
  return (
    <li
      className="w-fit relative z-10"
      style={{
        marginBottom: props["margin-bottom"],
        alignSelf: props.alignment,
      }}
    >
      <div className="bg-grey-900 border rounded-[16px] border-grey-700">
        <div className="flex flex-row items-center">
          <div
            className="flex justify-center items-center border rounded-[8px] border-grey-700 bg-c-black
                        w-[51px] h-[46px] ml-[13px]"
          >
            <Image
              src={props.productLogoSrc}
              alt={"Logo " + props.productName}
            />
          </div>
          <span className="h-fit ml-[19px] mr-12 my-[21px] text-nowrap">
            {props.productName ? props.productName : props.htmlProductName}
          </span>
        </div>
      </div>
      {props.blurredLightDecorationStyle ? (
        <BlurredLightProductCardDecoration
          {...props.blurredLightDecorationStyle}
        />
      ) : null}
    </li>
  );
}

function handleProductCardDecorationAligment(alignmentType: string) {
  switch (alignmentType) {
    case "center":
      return 25;
    case "end":
      return 75;
    case "start":
      return 25;
    default:
      return 0;
  }
}

function BlurredLightProductCardDecoration(
  props: TBlurredLightProductCardDecoration,
) {
  return (
    <div
      style={{
        width: props.width + "px",
        height: props.height + "px",
        background: `radial-gradient(
                    50% 50% at 50% 50%,
                    rgb(${props.centerColor[0]}, ${props.centerColor[1]}, ${props.centerColor[2]}) 0%,
                    rgba(${props.tipColor[0]}, ${props.tipColor[1]}, ${props.tipColor[2]}, 0) 100%
                    )`,
        filter: "blur(10px)",
        position: "absolute",
        top: "-25%",
        bottom: 0,
        zIndex: -1,
        left: props.alignment + "%",
        transform: "translateX(-50%)",
      }}
    ></div>
  );
}
