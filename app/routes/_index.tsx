import type { MetaFunction } from "@remix-run/node";
import Header from "~/common/Header";
import Border1 from "~/components/Home/border1";
import IndexHero from "~/components/Home/border1";
import Border2 from "~/components/Home/border2";
import Border3 from "~/components/Home/border3";

export const meta: MetaFunction = () => {
  return [
    { title: "YMI ITS" },
    { name: "", content: "" },
  ];
};

export default function Index() {
  return (
   <>
      <Header />
      <Border1 />
      <Border2 />
      <Border3 />
   </>
  );
}

