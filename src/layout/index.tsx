import { useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname.includes("/signup");
  console.log("isHOme", isHome);
  return (
    <>
      {!isHome && <Header />}
      <div
        style={{
          minHeight: `calc(100vh - ${isHome?"80":"145"}px)`
        }}
        className="flex justify-center items-center"
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
