"use client";

import { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import { Lang } from "@/types/lang";

function isRtlLang(lang: Lang) {
  switch (lang) {
    case "fa":
      return true;
    case "en":
      return false;
  }
}

function MainLayout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Lang;
}) {
  useEffect(() => {
    if (isRtlLang(lang)) {
      document.querySelector("html")?.setAttribute("dir", "rtl");
    } else {
      document.querySelector("html")?.setAttribute("dir", "ltr");
    }
  }, [lang]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
