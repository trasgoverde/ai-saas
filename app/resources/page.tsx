import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Navbar } from '@/components/Navbar';
import { UserButton } from "@clerk/nextjs";
import MobileNav from '@/components/MobileNav';
import newsletter from '@/components/newsletter';
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Logo from 'components/icons/Logo';
import GitHub from 'components/icons/GitHub';
import Footer from '@/components/Footer';

const ResourcesPage = () => {
    return (
      <>
        <div className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
          <MaxWidthWrapper>
              
              
            <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
              <Logo />
              <Link
              
                href='/'
                className='flex z-30 font-bold pr-10 text-lg'>
                <span>Dipassio | Digital Developments</span>
              </Link>
  
              <MobileNav />
  
              <div className='hidden items-center text-lg space-x-8 sm:flex'>
              <Link
                  href='/product'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Product
                </Link>
                <Link
                  href='/company'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Company
                </Link>
                <Link
                  href='/pricing'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Pricing
                </Link>

                <Link
                  href='/sign-in' // Provide the href attribute here
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Sign in
                </Link>
  
                <Link
                  href='/sign-up' // Provide the href attribute here
                  className={buttonVariants({
                    size: 'sm',
                  })}>
                  Get started{' '}
                  <ArrowRight className='ml-1.5 h-5 w-5' />
                </Link>
  
                
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
  
        <section className="mb-20 mt-20 sm:mt-30 flex flex-col items-center justify-center text-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r text-blue-600">
                  Product & Features
                </h1>

              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[950px] py-8 text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto text-justify">
  
  {/* Title */}
  <h1 className="text-3xl font-semibold mb-4">
    Unleash the Power of AI with DIPASSIO AI: Revolutionizing Copywriting, SEO, Email Generation, Content Generation, and PDF AI Chat
  </h1>

  {/* Paragraph 1 */}
  <p className="mb-4">
    In the ever-evolving landscape of digital marketing and content creation, staying ahead of the curve is essential. Enter DIPASSIO AI, the groundbreaking AI SaaS tool that has taken the world by storm. This comprehensive article will delve into the realm of DIPASSIO AI, exploring its diverse functionalities, and demonstrating how it can transform your approach to copywriting, SEO, email generation, content generation, and PDF AI chat. Buckle up as we embark on a journey to discover the future of digital marketing and content creation.
  </p>

  {/* Subtitle */}
  <h2 className="text-2xl font-semibold mb-4">
    What is DIPASSIO AI?
  </h2>

  {/* Paragraph 2 */}
  <p className="mb-4">
    DIPASSIO AI is a multifaceted AI-powered platform designed to elevate your content creation and digital marketing strategies. It is a game-changer for anyone looking to streamline their processes and enhance productivity. Let's explore its key features.
  </p>

  {/* Subtitle */}
  <h3 className="text-xl font-semibold mb-4">
    1. Copywriting with DIPASSIO AI: Elevating Creativity and Efficiency
  </h3>

  {/* Paragraph 3 */}
  <p className="mb-4">
    When it comes to copywriting, DIPASSIO AI stands out as a reliable companion. This remarkable tool empowers you to craft engaging and persuasive copy effortlessly. Whether you're writing product descriptions, ad copy, or blog posts, DIPASSIO AI analyzes your input and generates compelling content, saving you time and effort. It's your go-to resource for creating attention-grabbing headlines, persuasive sales pitches, and captivating storytelling.
  </p>

  {/* Subtitle */}
  <h3 className="text-xl font-semibold mb-4">
    2. SEO Dominance with DIPASSIO AI: Rank Higher, Faster
  </h3>

  {/* Paragraph 4 */}
  <p className="mb-4">
    SEO is the cornerstone of online visibility, and DIPASSIO AI takes the complexity out of the equation. By using AI-driven insights, this tool helps you identify the best keywords and phrases to target. It can also assist in optimizing your content for search engines, ensuring that your website ranks higher in search results. With DIPASSIO AI, you'll have the upper hand in the competitive world of SEO.
  </p>

  {/* Subtitle */}
  <h3 className="text-xl font-semibold mb-4">
    3. Email Generation Made Simple
  </h3>

  {/* Paragraph 5 */}
  <p className="mb-4">
    Email marketing is a powerful way to engage with your audience, and DIPASSIO AI simplifies the process. Whether you need to create newsletters, sales emails, or personalized messages, this tool can generate email content that resonates with your subscribers. Say goodbye to writer's block and hello to effective email campaigns.
  </p>

  {/* Subtitle */}
  <h3 className="text-xl font-semibold mb-4">
    4. Content Generation: Quality Content at Your Fingertips
  </h3>

  {/* Paragraph 6 */}
  <p className="mb-4">
    Content generation is often a time-consuming task, but DIPASSIO AI streamlines it. By analyzing your topic and requirements, this AI tool can produce high-quality content that is not only informative but also engaging. It's a boon for content marketers, bloggers, and businesses looking to expand their online presence.
  </p>

  {/* Subtitle */}
  <h3 className="text-xl font-semibold mb-4">
    5. PDF AI Chat: Interactive Documents for a Modern Audience
  </h3>

  {/* Paragraph 7 */}
  <p className="mb-4">
    In today's fast-paced world, PDF documents often feel static and outdated. DIPASSIO AI introduces a game-changing feature – PDF AI Chat. This enables you to create interactive PDFs that engage your readers, turning passive documents into dynamic, user-friendly experiences. Whether you're creating reports, manuals, or guides, DIPASSIO AI takes your PDFs to the next level.
  </p>

  {/* Subtitle */}
  <h2 className="text-2xl font-semibold mb-4">
    How DIPASSIO AI Works
  </h2>

  {/* Paragraph 8 */}
  <p className="mb-4">
    DIPASSIO AI operates on advanced natural language processing and machine learning algorithms. It learns from your input and provides content suggestions, ensuring that the output aligns with your style and tone. This makes it a versatile tool suitable for a wide range of industries and niches.
  </p>

  {/* Subtitle */}
  <h2 className="text-2xl font-semibold mb-4">
    Why Choose DIPASSIO AI?
  </h2>

  {/* List */}
  <ul className="list-disc pl-8 mb-4">
    <li className="mb-2">
      Unrivaled Efficiency: DIPASSIO AI streamlines your content creation process, saving you time and effort.
    </li>
    <li className="mb-2">
      Improved SEO: Elevate your website's ranking in search engines with AI-optimized content.
    </li>
    <li className="mb-2">
      Consistent Quality: The tool ensures that your content maintains a high standard across all platforms.
    </li>
    <li>
      Enhanced Engagement: PDF AI Chat brings your static documents to life, engaging your audience like never before.
    </li>
  </ul>

  {/* Paragraph 9 */}
  <p className="mb-4">
    Harness the Power of DIPASSIO AI Today
  </p>

  {/* Paragraph 10 */}
  <p className="mb-4">
    In a world where digital marketing and content creation are more competitive than ever, DIPASSIO AI emerges as a reliable and innovative solution. Whether you're a seasoned marketer or just starting your journey, this AI SaaS tool has the potential to redefine your approach. Say goodbye to content creation struggles and hello to efficiency, quality, and engagement.
  </p>

  {/* Paragraph 11 */}
  <p className="mb-4">
    DIPASSIO AI is your secret weapon for conquering the digital realm. Embrace the future of marketing and content creation by incorporating this groundbreaking tool into your arsenal. Stay ahead of the competition, drive results, and unlock your full potential with DIPASSIO AI.
  </p>

  {/* Paragraph 12 */}
  <p>
    In conclusion, DIPASSIO AI is not just another AI tool; it's a game-changer that can revolutionize your content creation and digital marketing efforts. By harnessing its capabilities for copywriting, SEO, email generation, content generation, and PDF AI chat, you're poised to dominate the digital landscape. Don't be left behind – join the future of content creation with DIPASSIO AI today.
  </p>
</div>


      </section>
    </>
  );
};

export default ResourcesPage;
