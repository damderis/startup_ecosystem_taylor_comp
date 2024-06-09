"use client";
import React from 'react';
import { FolderKanban, LayoutDashboard, Handshake, Route, Building2, Settings, User, Info, BotMessageSquare } from 'lucide-react';
import { usePathname } from "next/navigation";
import { Tabs, Tab } from "@nextui-org/react";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className='fixed top-0 left-0 h-full bg-white z-10'>
      <Tabs 
        aria-label="Options" 
        selectedKey={pathname} 
        isVertical={true} 
        color='primary'
        variant="light"
        className='p-4'
        aria-checked={true}
        classNames={{
            tabList:"gap-2 w-full relative p-4 ",
            tab:"flex justify-start items-start p-4 rounded-md aria-checked:bg-gradient-to-r from-purple-800 to-purple-500 hover:bg-slate-100"
        }}
      >
        <Tab 
          key="/" 
          title={
            <div className="flex justify-start items-center gap-2">
              <LayoutDashboard className={pathname === "/dashboard" ? "text-white" : ""} />
              <span className={pathname === "/" ? "text-white" : ""}>Dashboard</span>
            </div>
          } 
          href="/"
          className={pathname === "/" ? "bg-gradient-to-r from-purple-800 to-purple-500 text-white" : ""}
        />
        <Tab 
          key="/registercompany" 
          title={
            <div className="flex items-center gap-2">
              <FolderKanban />
              <span>Company Details</span>
            </div>
          } 
          href="/registercompany" 
          className={pathname === "/registercompany" ? "bg-gradient-to-r from-purple-800 to-purple-500 text-white" : ""}
        />
        <Tab 
          key="/investor" 
          title={
            <div className="flex items-center gap-2">
              <Handshake />
              <span>Investor</span>
            </div>
          } 
          href="/investor" 
          className={pathname === "/investor" ? "bg-gradient-to-r from-purple-800 to-purple-500 text-white" : ""}
        />
        <Tab 
          key="/roadmap" 
          title={
            <div className="flex items-center gap-2">
              <Route />
              <span>Roadmap</span>
            </div>
          }  
          href="/roadmap" 
          className={pathname === "/roadmap" ? "bg-gradient-to-r from-purple-800 to-purple-500 text-white" : ""}
        />
        <Tab 
          key="/community" 
          title={
            <div className="flex items-center gap-2">
              <Building2 />
              <span>Community</span>
            </div>
          }  
          href="/community" 
          className={pathname === "/community" ? "bg-gradient-to-r from-purple-800 to-purple-500 text-white" : ""}
        />
        <Tab 
          key="/chatbot" 
          title={
            <div className="flex items-center gap-2">
              <BotMessageSquare />
              <span>Chatbot</span>
            </div>
          }  
          href="/chatbot" 
          className={pathname === "/chatbot" ? "bg-gradient-to-r from-purple-800 to-purple-500 text-white" : ""}
        />  
      </Tabs>
      <Tabs
      aria-label="Options" 
      selectedKey={pathname} 
      isVertical={true} 
      color='secondary'
      variant="light"
      className='px-4 py-12'
      classNames={{
        tabList:"gap-6 w-full relative p-4",
        tab:"flex justify-start items-start p-2 rounded-md hover:bg-slate-100"
    }}
      >
        <Tab 
          key="/setting" 
          title={
            <div className="flex items-center gap-2">
              <Settings />
              <span>Setting</span>
            </div>
          }  
        />
        <Tab 
          key="/help" 
          title={
            <div className="flex items-center gap-2">
              <Info />
              <span>Help</span>
            </div>
          }  
        />
        <Tab 
          key="/profile" 
          title={
            <div className="flex items-center gap-2">
              <User />
              <span>Profile</span>
            </div>
          }  
        /> 
      </Tabs>
      </div>  
  );
}

export default Navbar;
