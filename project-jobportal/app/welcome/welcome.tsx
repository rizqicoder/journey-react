import { Outlet } from "react-router";
import Navbar from "~/components/navbar";

export function Welcome() {
  return (
    <main className="">
      <Outlet />
    </main>
  );
}

