import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Outlet } from "react-router";
import Navbar from "~/components/navbar";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function LayoutHome() {
  return <>
    <div className='flex items-center justify-center pt-16 pb-4'>
      <Navbar />
    </div>
    <main className='container mx-auto pt-12'>
      <Outlet />
    </main>
  </>;
}
