import Link from "next/link";
import HeroSection from "../components/heroSection";
import MainLayout from "../components/mainLayout";
import { getDictionary } from "./dictionaries";
import { Lang } from "@/types/lang";

export default async function Home({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  const dict = await getDictionary(lang);

  return (
    <>
      <div className="flex gap-[40px] p-[40px]">
        <Link href={"/en"}>english</Link>
        <Link href={"/fa"}>persian</Link>
      </div>
      <MainLayout lang={lang}>
        <HeroSection content={dict.homePage.heroSection} />
      </MainLayout>
    </>
  );
}
