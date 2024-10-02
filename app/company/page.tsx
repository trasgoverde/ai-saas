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

const TermsPage = () => {
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
                  DIPASSIO, THE COMPANY
                </h1>

              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[950px] py-8 text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto text-justify">

{/* Title */}
<h1 className="text-3xl font-semibold mb-4">
  DIPASSIO DIGITAL
</h1>

{/* Paragraph 1 */}
<p className="mb-4">
  In the rapidly evolving world of technology, one company has consistently pushed the boundaries, setting new standards in the realms of Web2, Web, Web Apps, and DApps. That company is Dipassio. In this comprehensive article, we'll dive into the innovative world of Dipassio, exploring its impressive journey and the remarkable spinoff that has introduced AI Assistants to the forefront of digital solutions.
</p>

{/* Subtitle */}
<h2 className="text-2xl font-semibold mb-4">
  Unveiling Dipassio: Masters of Web Development
</h2>

{/* Paragraph 2 */}
<p className="mb-4">
  Dipassio is a tech powerhouse, renowned for its expertise in web development across various domains. This company has played a pivotal role in shaping the digital landscape and is continuously setting benchmarks in Web2, Web, Web Apps, and DApps.
</p>
{/* Subtitle */}
<h3 className="text-xl font-semibold mb-4">
  1. Web3: Leading the Decentralized Revolution
</h3>

{/* Paragraph 6 */}
<p className="mb-4">
  The world of Decentralized Applications (DApps) is evolving, and Dipassio is at the forefront. Their expertise in blockchain technology and smart contract development has led to the creation of innovative DApps, offering transparency, security, and trust.
</p>
{/* Subtitle */}
<h3 className="text-xl font-semibold mb-4">
  2. Web2: Embracing the Social Web Revolution
</h3>

{/* Paragraph 3 */}
<p className="mb-4">
  Dipassio is a trailblazer in Web2 development, embracing the dynamic shift towards user-generated content, collaboration, and social interactions. Their work in this space has helped businesses connect with users like never before, fostering engagement and community building.
</p>

{/* Subtitle */}
<h3 className="text-xl font-semibold mb-4">
  3. Web Development: Crafting Digital Excellence
</h3>

{/* Paragraph 4 */}
<p className="mb-4">
  When it comes to traditional web development, Dipassio's capabilities are second to none. Their web development services ensure that businesses have a strong online presence, effectively conveying their messages and services to a global audience.
</p>

{/* Subtitle */}
<h3 className="text-xl font-semibold mb-4">
  4. Web Apps: Elevating User Experiences
</h3>

{/* Paragraph 5 */}
<p className="mb-4">
  Dipassio excels in creating Web Apps that are both functional and user-friendly. Their team leverages cutting-edge technologies to provide tailored solutions, making businesses more accessible and efficient.
</p>



{/* Subtitle */}
<h2 className="text-2xl font-semibold mb-4">
  The Birth of an AI Spinoff
</h2>

{/* Paragraph 7 */}
<p className="mb-4">
  While Dipassio's prowess in web development is undisputed, they didn't stop there. The company embarked on an exciting journey with an AI spinoff, introducing groundbreaking AI Assistants to the digital realm.
</p>

{/* Subtitle */}
<h2 className="text-2xl font-semibold mb-4">
  Meet the AI Spinoff: Where AI Meets Assistance
</h2>

{/* Paragraph 8 */}
<p className="mb-4">
  Dipassio's AI spinoff is a testament to their commitment to innovation and staying ahead of the technological curve. This venture blends the power of Artificial Intelligence with the practicality of digital assistants to deliver solutions that are truly transformative.
</p>

{/* Subtitle */}
<h3 className="text-xl font-semibold mb-4">
  AI Assistants: A Game-Changing Fusion
</h3>

{/* Paragraph 9 */}
<p className="mb-4">
  The AI Assistants introduced by Dipassio's spinoff are not your ordinary virtual assistants. They are powered by advanced AI algorithms, natural language processing, and machine learning. These AI Assistants are designed to understand, interpret, and respond to human interactions in a way that feels natural and intuitive.
</p>

{/* Subtitle */}
<h2 className="text-2xl font-semibold mb-4">
  Applications Across Industries
</h2>

{/* Paragraph 10 */}
<p className="mb-4">
  Dipassio's AI Assistants find applications across various industries, from customer support and e-commerce to healthcare and finance. They automate tasks, provide information, and enhance user experiences, making them invaluable in an increasingly digital world.
</p>

{/* Subtitle */}
<h2 className="text-2xl font-semibold mb-4">
  Why Dipassio Leads the Way
</h2>

{/* List */}
<ul className="list-disc pl-8 mb-4">
  <li className="mb-2">
    Unmatched Expertise: Dipassio's experience in web development and AI is a force to be reckoned with.
  </li>
  <li className="mb-2">
    Innovation at Its Core: They are pioneers in adopting cutting-edge technologies and trends.
  </li>
  <li className="mb-2">
    Client-Centric Approach: Dipassio understands the unique needs of their clients, delivering tailor-made solutions.
  </li>
  <li>
    Future-Ready Solutions: Their offerings are designed to adapt and excel in an ever-changing tech landscape.
  </li>
</ul>

{/* Paragraph 11 */}
<p className="mb-4">
  Embrace the Future with Dipassio
</p>

{/* Paragraph 12 */}
<p className="mb-4">
  In conclusion, Dipassio's journey in mastering Web2, Web, Web Apps, DApps, and AI Assistants is a testament to their unwavering commitment to innovation and excellence. If you're seeking to propel your business into the digital future, Dipassio is the partner you've been looking for.
</p>

{/* Paragraph 13 */}
<p>
  Dipassio has redefined the web development landscape and is now reshaping the future with AI Assistants. Embrace the future with Dipassio and unlock the full potential of digital innovation. Your journey towards excellence begins here.
</p>
</div>



      </section>
    </>
  );
};

export default TermsPage;
