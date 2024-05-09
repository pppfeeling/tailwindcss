import { KBarAnimator, KBarPortal, KBarPositioner, KBarSearch, KBarProvider, ActionImpl,Action } from "kbar";

import RenderResults  from "./RenderResults";

import React from "react"
import { GitBranch, Moon, PhoneCall, Search, Sun, SunDim,  X } from "lucide-react";


export default function ControlK({ children }:{children: React.ReactNode}) {


// actions

  const actions:Action[] = [
    {
      id: "homeAction",
      name: "Home",
      shortcut: ["h"],
      keywords: "back",
      section: "Navigation",
      subtitle: "Subtitles can help add more context.",
    },
    {
      id: "docsAction",
      name: "Docs",
      shortcut: ["g", "d"],
      keywords: "help",
      section: "Navigation",
      perform: () => window.alert("docs"),
    },
    {
      id: "contactAction",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email hello",
      section: "Navigation",
      icon: <PhoneCall className="w-6 h-6 mx-3" />,
      perform: () => window.alert("Contact"),
    },
    {
      id: "twitterAction",
      name: "Twitter",
      shortcut: ["g", "t"],
      keywords: "social contact dm",
      section: "Navigation",
      icon: <X className="w-6 h-6 mx-3" />,
      perform: () => window.alert("Twitter"),
    },
    {
      id:"githubAction",
      name: "Github",
      shortcut: ["g", "h"],
      keywords: "sourcecode",
      section: "Navigation",
      icon: <GitBranch className="w-6 h-6 mx-3" />,
      perform: () => window.alert("Github"),
    },
    {
      id: "blog",
      name: "Search Blogs",
      shortcut: ["?"],
      keywords: "serach articles",
      section: "blog",
      icon: <Search className="w-6 h-6 mx-3" />
    },
    {
      id: "theme",
      name: "Change theme…",
      keywords: "interface color dark light",
      section: "Preferences",
      icon: <Sun className="w-6 h-6 mx-3" />,
    },
    {
      id: "darkTheme",
      name: "Dark",
      keywords: "dark theme",
      section: "Preferences",
      perform: () => window.alert("Dark"),
      icon: <Moon className="w-6 h-6 mx-3" />,
      parent: "theme",
    },
    {
      id: "lightTheme",
      name: "Light",
      keywords: "light theme",
      section: "Preferences",
      perform: () => window.alert("Light"),
      icon: <SunDim className="w-6 h-6 mx-3" />,
      parent: "theme",
    },

  ];

  return (<KBarProvider options={{ enableHistory: true }} actions={actions}>

    {children}

    <KBarPortal>
      <KBarPositioner className="p-2 w-full bg-gray-900/80 flex items-center">
        <KBarAnimator className=" w-full w-max-[600px] overflow-hidden p-2 bg-white rounded-xl">
          <KBarSearch className="flex px-4 w-full h-16 outline-none" />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>

  </KBarProvider>)
}