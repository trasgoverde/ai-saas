"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { FileText, Share2, Magnet, MailPlus, Boxes, Target, Files, Rocket, CalendarClock, LayoutDashboard, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";


const montserrat = Montserrat ({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-500"
  },
  {
    label: 'Pdfs',
    icon: FileText,
    href: '/pdf-files',
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: 'Emails',
    icon: MailPlus,
    href: '/email-generation',
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    label: 'Social Media',
    icon: Share2,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: '/ads-social-media',
  },
  {
    label: 'SEO',
    icon: Magnet,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: '/ecommerce-seo',
  },
  {
    label: 'Blogs',
    icon: Rocket,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: '/blogging-generation',
  },
];

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname(); 

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#6366f1] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/rhinologo best.svg" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            DIPASSIO
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-white-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar