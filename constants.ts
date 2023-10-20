"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import {FileText, Codesandbox, PencilRuler, Layers, CircuitBoard, PenSquare, Layers3, TrendingUp, WayPoints, Snowflake, Linkedin, Twitter, Send, FlaskConical,  Share2, Magnet, Facebook, PercentSquare, Boxes, MailPlus, Target, Files, Rocket, CalendarRange, CalendarClock, LayoutDashboard, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export const MAX_FREE_COUNTS = 40;

export const tools = [
  {
    label: 'Pdf AI',
    icon: FileText,
    href: '/pdf-files',
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: 'Emailing',
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

export const pools = [
  {
    label: 'Cold Outbound',
    icon: Snowflake,
    href: '/cold-email',
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: 'Follow up Email',
    icon: Send,
    href: '/follow-email',
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    label: 'Event Promotion',
    icon: CalendarRange,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: '/event-promo',
  },
  {
    label: 'Discounts & Sales',
    icon: PercentSquare,
    color: "text-red-500",
    bgColor: "bg-yellow-500/10",
    href: '/sales-discounts',
  },

  
];

export const sools = [
  {
    label: 'Linkedin Posts',
    icon: Linkedin,
    href: '/linkedin-post',
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: 'Google Ads',
    icon: FlaskConical,
    href: '/google-ads',
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    label: 'Facebooks Ads',
    icon: Facebook,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: '/facebook-ads',
  },
  {
    label: 'Twitter Engagement',
    icon: Twitter,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: '/twitter-engagement',
  },

  
];

export const rools = [
  {
    label: 'Landing SEO',
    icon: Codesandbox,
    href: '/landing-seo',
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: 'Generate Bulletpoints',
    icon: Boxes,
    href: '/bullet-points',
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    label: 'High Converting SEO',
    icon: TrendingUp,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: '/high-converting',
  },
  {
    label: 'Twitter Engagement',
    icon: Files,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: '/twitter-engagement',
  },

  
];

export const hools = [
  {
    label: 'Write Article',
    icon: PencilRuler,
    href: '/blog-seo-article',
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: 'Generate Topic Ideas',
    icon: Layers,
    href: '/topic-idea',
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    label: 'Rewrite Article',
    icon: PenSquare,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: '/rewrite',
  },
  {
    label: 'Blog Metadescriptions',
    icon: CircuitBoard,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: '/metadescription',
  },

  
];