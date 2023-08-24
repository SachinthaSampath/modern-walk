"use client";
import { createContext, useContext, useState } from "react";

const SideBarContext = createContext({ isOpen: false });
export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SideBarContext.Provider value={{ isOpen }}>
      <SidebarNav />
    </SideBarContext.Provider>
  );
}

function SidebarNav() {
  let { isOpen } = useContext(SideBarContext);
  return (
    <div>
      <p>Home</p>
      {isOpen && <h1>Open</h1>}
    </div>
  );
}
