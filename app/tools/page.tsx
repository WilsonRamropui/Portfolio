import React from "react";
import Image from "next/image";
import { CometCard } from "@/components/ui/comet-card";
import { toolsPageStyles as s } from "@/styles/dummy-styles";

const tools = [
  {
    name: "VS Code",
    category: "Editor",
    image: "/vscode.webp",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Cursor",
    category: "AI Editor",
    image: "/cursor.webp",
    link: "https://cursor.sh/",
  },
  {
    name: "Vercel",
    category: "Deployment",
    image: "/vercel.svg",
    link: "https://vercel.com/",
  },
  {
    name: "ChatGPT",
    category: "AI Assistant",
    image: "/chatgpt.webp",
    link: "https://chat.openai.com/",
  },
  {
    name: "Claude",
    category: "AI Assistant",
    image: "/claude.webp",
    link: "https://claude.ai/",
  },
];

export default function Tools() {
  return (
    <div className={s.pageContainer}>
      <div className={s.contentContainer}>
        <div className={s.headerContainer}>
          <h1 className={s.headerTitle}>Tools & Setup</h1>
          <p className={s.headerSubtitle}>
            My favorite tools, applications, and hardware I use to build software.
          </p>
        </div>

        <div className={s.toolsGrid}>
          {tools.map((tool, idx) => (
            <a 
              key={idx} 
              href={tool.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={s.toolCardLink}
            >
              <CometCard className="w-full h-full p-6 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center gap-4 transition-colors">
                <div className={s.toolIconContainer}>
                  <Image 
                    src={tool.image} 
                    alt={tool.name} 
                    width={48} 
                    height={48} 
                    className="rounded-lg object-contain"
                  />
                </div>
                <div className={s.toolTextContainer}>
                  <h3 className={s.toolName}>{tool.name}</h3>
                  <p className={s.toolCategory}>{tool.category}</p>
                </div>
              </CometCard>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}