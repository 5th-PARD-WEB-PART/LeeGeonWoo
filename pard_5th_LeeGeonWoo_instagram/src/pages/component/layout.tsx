import React, { ReactNode } from "react";
import Sidebar from "./sidebar";
import { FaLeaf } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden sm:block md:hidden">
        <Sidebar collapsed={true} />
      </div>

      <div className="hidden md:block">
        <Sidebar collapsed={false} />
      </div>

      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default Layout;
