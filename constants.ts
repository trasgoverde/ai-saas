"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { Boxes, Target, Files, Rocket, CalendarClock, LayoutDashboard, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export const MAX_FREE_COUNTS = 40;

export const tools = [
  {
    label: 'Pdf Analysis',
    icon: Target,
    href: '/pdf-files',
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: 'Email Generation',
    icon: Boxes,
    href: '/email-generation',
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    label: 'Social Media Ads',
    icon: CalendarClock,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: '/ads-social-media',
  },
  {
    label: 'Ecommerce SEO',
    icon: Files,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: '/ecommerce-seo',
  },
  {
    label: 'Long Term Articles for Blogs',
    icon: Rocket,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: '/blogging-generation',
  },
];

export const pools = [
  {
    label: 'Cold Outbound',
    icon: Target,
    href: '/cold-email',
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: 'Follow up Email',
    icon: Boxes,
    href: '/follow-email',
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    label: 'Event Promotion',
    icon: CalendarClock,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: '/event-promo',
  },
  {
    label: 'Discounts & Sales',
    icon: Files,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: '/sales-discounts',
  },

  
];

export const sools = [
  {
    label: 'Linkedin Posts',
    icon: Target,
    href: '/linkedin-post',
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: 'Google Ads',
    icon: Boxes,
    href: '/google-ads',
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    label: 'Facebooks Ads',
    icon: CalendarClock,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: '/facebook-ads',
  },
  {
    label: 'Twitter Engagement',
    icon: Files,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: '/twitter-engagement',
  },

  
];

export const rools = [
  {
    label: 'Landing SEO',
    icon: Target,
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
    icon: CalendarClock,
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
    icon: Target,
    href: '/blog-seo-article',
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: 'Generate Topic Ideas',
    icon: Boxes,
    href: '/topic-idea',
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    label: 'Rewrite Article',
    icon: CalendarClock,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: '/rewrite',
  },
  {
    label: 'Blog Metadescriptions',
    icon: Files,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: '/metadescription',
  },

  
];