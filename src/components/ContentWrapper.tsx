import React, { ReactNode } from "react";

type TContentWrapper = {
  children: ReactNode;
  className?: string;
  Element: "div" | "section";
};

export default function ContentWrapper({
  children,
  className,
  Element,
}: TContentWrapper) {
  return (
    <Element className={"w-full max-w-[1200px] px-6 mx-auto " + className}>
      {children}
    </Element>
  );
}
