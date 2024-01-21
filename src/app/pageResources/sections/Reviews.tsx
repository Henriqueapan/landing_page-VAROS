"use client";

import ContentWrapper from "@/src/components/ContentWrapper";
import Image from "next/image";
import Professores from "@/public/img/professores.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import Aspas from "@/public/svg/aspas.svg";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";

type TSliderCard = {
  text: string;
  author: string;
  customClassName?: string;
};

const reviewsSliderContent: Array<TSliderCard> = [
  {
    text:
      "Conteúdos preparados para trazer mais segurança, independente do seu nível. Conteúdos preparados para " +
      "trazer mais segurança, independente do seu nível.Conteúdos preparados para trazer mais segurança, independente" +
      " do seu nível.",
    author: "Assinante VAROS",
  },
  {
    text:
      "Eu acompanho vários gestores de fundo e educadores financeiros. Tu de longe és um dos que mais contribui" +
      " para minha construção de conhecimento. A forma que colocas coisas que outras pessoas fazem parecer complexas " +
      "de uma forma super simples e ginal. Parabéns! E continue.",
    author: "Assinante VAROS",
  },
  {
    text:
      "Nunca vi algo tão completo que nem o de vocês. E olha que esses 11 anos que tô no MF já assinei muita" +
      " casa de análise. Nada chega perto do trabalho seu e da sua equipe.",
    author: "Assinante VAROS",
  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim sapien, iaculis ullamcorper ex eu, " +
      "accumsan ornare ex. Etiam eu augue eu nulla fermentum ornare vitae ut tellus. Ut fringilla arcu mi, vel " +
      "egestas odio rhoncus vel. Donec faucibus diam ut facilisis suscipit. Suspendisse at tincidunt lorem, sit amet" +
      " euismod.",
    author: "Lorem Ipsum",
  },
];

export default function Reviews() {
  return (
    <ContentWrapper
      Element="section"
      className="flex flex-col lg:flex-row items-center w-full justify-between mt-[82px] lg:mt-44 xl:mt-48 gap-6"
    >
      <header className="pb-[48px] xl:pb-[38px] w-full lg:max-w-[463px] block flex-shrink overflow-y-hidden">
        <h1
          className="text-grey-100 text-center lg:text-left font-bold text-3xl lg:text-4xl mb-6
                  xl:max-w-[608px] lg:max-w-[487px]"
        >
          Didática de verdade
        </h1>
        <h2
          className="text-grey-100 text-center lg:text-left text-lg leading-[120%] mb-[32px] lg:max-w-[487px]
            xl:max-w-[504px]"
        >
          Garantindo seu aprendizado
        </h2>

        <>
          <div
            className="relative overflow-x-hidden max-w-[700px] mx-auto

                      before:content-none xl:before:content-[''] before:absolute before:w-full
                      before:h-full before:z-10 before:bg-gradient-to-r before:from-transparent before:to-c-black
                      before:from-70% before:to:100% before:pointer-events-none

                      after:content-none xl:after:content-[''] after:absolute after:w-full after:h-full after:z-10
                      after:bg-gradient-to-b after:from-transparent after:to-c-black after:from-85% after:to-100%
                      after:pointer-events-none overflow-y-hidden after:top-0"
          >
            <Swiper
              className="[&_.swiper-wrapper]:xl:pb-6"
              spaceBetween={60}
              slidesPerView={1}
              effect={"creative"}
              modules={[EffectCreative, Autoplay]}
              autoplay={{
                delay: 5e3,
                disableOnInteraction: false,
                stopOnLastSlide: false,
              }}
              creativeEffect={{
                next: {
                  translate: ["50%", "28%", -500],
                  opacity: 5,
                  scale: 1.1,
                },
                prev: {
                  translate: ["-100%", 100, -500],
                  opacity: 0.25,
                  scale: 1.1,
                },
              }}
            >
              {reviewsSliderContent.map((content, idx) => (
                <SwiperSlide key={idx}>
                  <SliderCard
                    text={content.text}
                    author={content.author}
                    customClassName="min-h-[350px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      </header>
      <div className="min-w-[350px]">
        <Image src={Professores} alt="Professores" className="mb-[72px]" />
        <NotasDisplay />
      </div>
    </ContentWrapper>
  );
}

function NotasDisplay() {
  return (
    <div
      className="py-4 w-full border border-[#4D5358] rounded-[24px] relative
        flex justify-center"
    >
      <div
        className="w-full h-[106%] -top-[1px] left-[3px] absolute
             bg-[linear-gradient(to_right,transparent,#131313_85%)]"
      />
      <ul className="z-10 flex flex-row gap-8 justify-between items-center">
        <li className="text-center max-w-[110px]">
          <span className="font-bold text-lg text-grey-400">+ 1000</span>
          <p className="text-[14px] text-grey-400">
            Nota média geral das aulas
          </p>
        </li>
        <li className="text-center max-w-[110px]">
          <span className="font-bold text-lg text-fl-green">4,8/5</span>
          <p className="text-[14px] text-grey-400">
            Nota média geral das aulas
          </p>
        </li>
        <li className="text-center max-w-[110px]">
          <span className="font-bold text-lg text-grey-400">10k +</span>
          <p className="text-[14px] text-grey-400">Comunidade</p>
        </li>
      </ul>
    </div>
  );
}

function SliderCard({ ...props }: TSliderCard) {
  const customClassName = props.customClassName ? props.customClassName : "";

  const mainDivClassname =
    "xl:max-w-[368px] border border-grey-800 rounded-3xl bg-grey-900 " +
    "flex xl:flex-row flex-col py-6 pl-6 pr-8 xl:gap-4 xl:gap-[14px] shrink " +
    customClassName;
  return (
    <div className={mainDivClassname}>
      <div className="w-[21px] h-[23px]">
        <Image
          src={Aspas}
          alt="Decoração de aspas representando citação"
          className="self-start"
          style={{ height: "23px", width: "21px" }}
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <p className="text-grey-500 xl:max-w-[276px] text-lg leading-[21.6px] pt-[15px] font-semibold">
          {props.text}
        </p>
        <span className="text-grey-100 block xl:mt-[22px] mt-4 italic">
          {props.author}
        </span>
      </div>
    </div>
  );
}
