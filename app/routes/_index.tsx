import type { MetaFunction } from "@remix-run/node";
import Header from "~/common/Header";
import Border1 from "~/components/border1";
import IndexHero from "~/components/border1";

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
   </>
  );
}

