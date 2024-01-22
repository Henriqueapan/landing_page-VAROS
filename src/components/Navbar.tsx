"use client";

import Image from "next/image";
import {
  ReactNode,
  useEffect,
  useState,
  Fragment,
  useRef,
  DOMElement,
  Ref,
  MutableRefObject,
} from "react";
import Hamburger from "hamburger-react";
import Button from "@/src/components/Clickables/Button";
import Anchor from "@/src/components/Clickables/Anchor";
import SetaDireita from "@/public/svg/seta_direita.svg";
import { AnimatePresence, motion, Variants } from "framer-motion";

type TNavbar = {
  logo: any;
  mainContent: Array<TNavbarMainContent>;
  sideContent: Array<TNavbarSideContent>;
};

export type TNavbarMainContent = {
  title: string;
  href?: string;
  subContent?: Array<TNavbarSubContent>;
};

export type TNavbarSubContent = {
  title: string;
  description: string;
  href: string;
};

export type TNavbarSideContent = {
  title: string;
  logo: any;
  signInButton?: boolean;
  href: string;
};

export default function Navbar({ logo, mainContent, sideContent }: TNavbar) {
  const [hoveredDropdownButtonIndex, setHoveredDropdownButtonIndex] = useState(
    null as null | number,
  );

  return (
    <div className="flex flex-row justify-between items-center gap-44">
      <ul className="hidden xl:flex flex-row items-center justify-between grow [&>li:not(:last-child)]:mr-4">
        <li className="h-fit">
          <Image src={logo} alt="Logotipo VAROS" style={{ minWidth: "50px" }} />
        </li>
        {mainContent.map((content, idx) => {
          if (content.subContent)
            return (
              <li
                key={idx}
                className="p-4 relative"
                onMouseEnter={() => setHoveredDropdownButtonIndex(idx)}
                onMouseLeave={() => setHoveredDropdownButtonIndex(null)}
              >
                <span className="text-sm text-nowrap cursor-pointer">
                  {content.title}
                </span>
                {hoveredDropdownButtonIndex === idx ? (
                  <SubContentMenu
                    subContent={content.subContent}
                  ></SubContentMenu>
                ) : null}
              </li>
            );
          else
            return (
              <a
                key={idx}
                className="text-sm text-nowrap cursor-pointer p-4"
                href={content.href}
              >
                {content.title}
              </a>
            );
        })}
      </ul>
      <ul className="hidden xl:flex flex-row">
        {sideContent.map((content, idx) => (
          <li key={idx}>
            <a className="flex flex-row justify-between gap-4 text-lg p-5 cursor-pointer">
              <Image src={content.logo} alt="#" />
              <span>{content.title}</span>
            </a>
          </li>
        ))}
      </ul>
      <MobileMenu
        logo={logo}
        mainContent={mainContent}
        sideContent={sideContent}
      />
    </div>
  );
}

function SubContentMenu({
  subContent,
}: {
  subContent: Array<TNavbarSubContent>;
}) {
  return (
    <>
      <ul
        className="absolute min-w-[350px] h-fit px-6 py-6 border border-grey-700 bg-grey-900 rounded-2xl
                  [&>li:not(:last-child)]:after:content-[<hr/>]"
      >
        {subContent.map((content, idx) => {
          if (idx === subContent.length - 1)
            return (
              <li key={idx}>
                <a href={content.href}>
                  <div className="hover:bg-grey-800 border-0 rounded-3xl px-5 py-7">
                    <p className="text-lg text-fl-green font-semibold">
                      {content.title}
                    </p>
                    <p className=" text-sm">{content.description}</p>
                  </div>
                </a>
              </li>
            );
          else
            return (
              <Fragment key={idx}>
                <li>
                  <a href={content.href}>
                    <div className="hover:bg-grey-800 border-0 rounded-3xl px-5 py-7">
                      <p className="text-lg text-fl-green font-semibold">
                        {content.title}
                      </p>
                      <p className="text-sm">{content.description}</p>
                    </div>
                  </a>
                </li>
                <hr className="my-2 border-grey-700 mx-auto w-[90%]" />
              </Fragment>
            );
        })}
      </ul>
    </>
  );
}

function MobileMenu({ logo, mainContent, sideContent }: TNavbar) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      window.document.body.style.overflow = "hidden";
    } else window.document.body.style.overflow = "scroll";
  }, [isMobileMenuOpen]);

  const menuTransitionVariants = {
    closed: {
      opacity: 0.5,
      translateY: "-150%",
      translateX: "-50%",
      pointerEvents: "none",
      overflow: "hidden",
      boxShadow: "none",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      translateY: "0%",
      translateX: "-50%",
      pointerEvents: "auto",
      boxShadow: "0px 100px 200px #131313",
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
  } satisfies Variants;

  return (
    <nav className="h-[96px] z-[100] xl:hidden">
      <div className="xl:hidden fixed left-0 top-0 w-full">
        <div className="w-full py-6 px-4 top-0 left-0 flex flex-row justify-between bg-c-black">
          <Image src={logo} alt="Logotipo VAROS" />
          <Hamburger onToggle={setIsMobileMenuOpen} />
        </div>
        {isMobileMenuOpen ? (
          <div
            className="w-full h-[100svh] pt-14 pb-80 bg-c-black absolute overflow-y-scroll z-[100] top-auto
                      left-[0%] -translate-x-[0%] border-t border-t-grey-800"
          >
            <div className="h-[100vh]">
              <div className="flex flex-col justify-between self-center max-w-[500px] mx-auto px-6">
                <ul className="flex flex-col-reverse gap-4">
                  {sideContent.map((content, idx) => (
                    <li key={idx}>
                      {content.signInButton ? (
                        <Anchor
                          stylization={{ type: "outlined", twColor: "gray" }}
                          className="!border rounded-[4px] !border-doc !text-lg !font-semibold tracking-widest"
                        >
                          <Image src={content.logo} alt="#" />
                          <span>{content.title.toUpperCase()}</span>
                        </Anchor>
                      ) : (
                        <Anchor
                          stylization={{ type: "base", twColor: "green" }}
                          className="border rounded-[4px] !border-doc !text-lg !font-semibold tracking-widest"
                        >
                          <span>{content.title.toUpperCase()}</span>
                        </Anchor>
                      )}
                    </li>
                  ))}
                </ul>
                <ul className="mt-10">
                  {mainContent.map((content, idx) => {
                    const className =
                      idx !== mainContent.length - 1 && !content.subContent
                        ? "border-b border-b-grey-800"
                        : "";
                    return (
                      <li key={idx} className={className}>
                        {content.subContent ? (
                          <MobileMenuDropdownAnchor {...content} />
                        ) : (
                          <a href={content.href}>
                            <div className="p-6 font-bold text-doc">
                              {content.title}
                            </div>
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

function MobileMenuDropdownAnchor({
  title,
  href,
  subContent,
}: TNavbarMainContent) {
  return (
    <div className="relative bg-grey-800 border-0 rounded-[8px]">
      <div>
        <div className="p-6 font-bold border-b border-b-grey-500">
          <a href={href} className="cursor-pointer">
            {title}
          </a>
        </div>
        {subContent?.map((content, idx) => (
          <div key={idx}>
            <a href={content.href}>
              <div className="flex flex-col px-5 py-7">
                <div className="flex flex-row justify-between">
                  <p className="text-doc font-semibold">{content.title}</p>
                  <Image src={SetaDireita} alt="Seta para a direita" />
                </div>
                <p className="text-xs text-grey-500">{content.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
