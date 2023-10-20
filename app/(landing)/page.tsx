import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Navbar } from '@/components/Navbar';
import { UserButton } from "@clerk/nextjs";
import MobileNav from '@/components/MobileNav';
import Newsletter from '@/components/newsletter';
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TypewriterComponent from "typewriter-effect";
import Logo from '@/components/icons/Logo';
import GitHub from '@/components/icons/GitHub';


const LandingPage = () => {
  return (
    <>
      <div className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
            
            
          <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
            <Logo />
            <Link
            
              href='/'
              className='flex z-30 font-bold pr-10 text-lg'>
              <span>Dipassio | AI Assistant</span>
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
                href='/resources'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                Resources
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
                <ArrowRight className='ml-1.5 h-5 w-5  transition-transform transform hover:translate-x-2' />
              </Link>

              
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Top Section */}
      <MaxWidthWrapper className="mb-12 mt-12 sm:mt-30 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p>
          🎉 Unleash the Power of AI: Revolutionizing Copywriting, SEO, Email Generation, Content Generation, and PDF AI Chat!
          </p>
          <Link
                href='/sign-up' // Provide the href attribute here
                className={buttonVariants({
                  size: 'sm',
                  variant: 'secondary',
                })}>
                Read More!{' '}
                <ArrowRight className='ml-1.5 h-5 w-5  transition-transform transform hover:translate-x-2' />
              </Link>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mt-5">
        Real World AI{" "}
          <p className="text-blue-600">Professional AI Solution </p>{" "}
        </h1>
 
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        DIPASSIO AI, exploring its diverse functionalities, and demonstrating how it can transform your approach to copywriting, SEO, email generation, content generation, and PDF AI chat.
        </p>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        Copywriting, SEO, Email Generation, Content Generation, and PDF AI Chat
        </p>
        <span className='items-center text-lg space-x-8 sm:flex'>
        <Link
          className={buttonVariants({
            size: "md",
            className: "mt-5",
            variant: 'secondary',
          })}
          href="/dashboard"
          target="_blank">
          Read More! <ArrowRight className="ml-2 h-5 w-5 transition-transform transform hover:translate-x-2" />
        </Link>
        
        
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboard"
          target="_blank">
          Start for Free <ArrowRight className="ml-2 h-5 w-5  transition-transform transform hover:translate-x-2" />
        </Link>
        </span>
        
      </MaxWidthWrapper>

      {/* Value Proposition Section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          {/* Content in this section */}
          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="Dashboard Preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Start your Journey with us in minutes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We specialize in designing highly functional, visually stunning
              websites that are aligned with your brand and business goals
              through a tailored, unique experience for your intended users.
              Developing your Projects has never been easier than with Dipassio
              Agency.
            </p>
          </div>
        </div>

        {/* Steps */}
        <ol className="my-9 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 1</span>
              <span className="text-xl font-semibold">
                If you have a project in mind and want to explore the
                possibility of working with us.
              </span>
              <span className="mt-2 text-zinc-700">
                Either you need a renovation or a complete new project, choose
                the right{" "}
                <Link
                  href="/sign-up"
                  className="text-blue-700 underline underline-offset-2">
                  Pro Plan
                </Link>{" "}
                for you.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 2</span>
              <span className="text-xl font-semibold">
                Upload your Assets, Logos, Texts, Domain, Calendar, and
                Specifications
              </span>
              <span className="mt-2 text-zinc-700">
                We&apos;ll process all your information and make it ready for a
                Videocall to discuss your tailored Specifications.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 3</span>
              <span className="text-xl font-semibold">
                Start Developing for you
              </span>
              <span className="mt-2 text-zinc-700">
                We&apos;ll start developing for you immediately. It&apos;s that simple!
                Try out Dipassio today - it really takes a few steps to have
                your Digital Project deployed.
              </span>
            </div>
          </li>
        </ol>
      </div>
      <div className='mx-auto max-w-6xl px-6 lg:px-8 mb-20'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/file-upload-preview.jpg'
                alt='uploading preview'
                width={1419}
                height={732}
                quality={100}
                className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>
        <div>
     <section className="mb-20 mt-20 sm:mt-30 flex flex-col items-center justify-center text-center" >
        <div className="container px-4 md:px-6" >
    <div className="grid gap-6 items-center" >
      <div className="flex flex-col justify-center space-y-8 text-center" >
        <div className="space-y-2" >
          <h1
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-700"
          >
                            Discover Our Unique Features
          </h1>
          <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-zinc-100 mx-auto" >
                            Our features are designed to enhance your productivity and streamline your workflow.
          </p>
        </div>
        <div className="w-full max-w-full space-y-4 mx-auto" >
          <div className="grid grid-cols-3 gap-8" >
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg" >
              <div className="p-4 bg-blue-700  rounded-full" >
                <svg
                  className=" text-white h-6 w-6 mb-2 opacity-75"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                  <path
                    d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-700" >
                Smart Inbox
              </h2>
              <p className="text-zinc-600 dark:text-zinc-700" >
                Our Smart Inbox feature helps you manage your emails efficiently by prioritizing important emails.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg" >
              <div className="p-4 bg-blue-700  rounded-full" >
                <svg
                  className=" text-white h-6 w-6 mb-2 opacity-75"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m8 6 4-4 4 4" />
                  <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
                  <path d="m20 22-5-5" />
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-700" >
                Seamless Integration
              </h2>
              <p className="text-zinc-600 dark:text-zinc-700" >
                Seamless Integration allows you to connect with your favorite apps and services without leaving your inbox.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg" >
              <div className="p-4 bg-blue-700  rounded-full" >
                <svg
                  className=" text-white h-6 w-6 mb-2 opacity-75"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-700" >
                Advanced Customization
              </h2>
              <p className="text-zinc-600 dark:text-zinc-700" >
                With Advanced Customization, you can personalize your email client to suit your preferences and work style.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg" >
              <div className="p-4 bg-blue-700  rounded-full" >
                <svg
                  className=" text-white h-6 w-6 mb-2 opacity-75"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-700" >
                Powerful Search
              </h2>
              <p className="text-zinc-600 dark:text-zinc-700" >
                Our Powerful Search feature allows you to find any email, contact, or file in seconds.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg" >
              <div className="p-4 bg-blue-700  rounded-full" >
                <svg
                  className=" text-white h-6 w-6 mb-2 opacity-75"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-700" >
                Reliable Security
              </h2>
              <p className="text-zinc-600 dark:text-zinc-700" >
                With Reliable Security, your data is always safe and protected.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg" >
              <div className="p-4 bg-blue-700  rounded-full" >
                <svg
                  className=" text-white h-6 w-6 mb-2 opacity-75"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m8 6 4-4 4 4" />
                  <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
                  <path d="m20 22-5-5" />
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-700" >
                Easy Collaboration
              </h2>
              <p className="text-zinc-600 dark:text-zinc-700" >
                Easy Collaboration allows you to share and edit documents with your team in real time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 <section className="mb-20 mt-20 sm:mt-30 flex flex-col items-center justify-center text-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-700">
                Revolutionize Your Develop Experience
              </h1>
              <p className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto">
                Join us and take control of how are your Digital Product being Developed. Fast, secure, and designed most modern frameworks.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1 bg-gray-100 text-gary border-gray-900"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="bg-white text-black" type="submit">
                  Join Now
                </Button>
              </form>
              <p className="text-xs text-zinc-800 dark:text-zinc-100">
                Get ready to redefine your email experience.
                <Link className="underline underline-offset-2 text-gray" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="mb-20 mt-20 sm:mt-30 flex flex-col items-center justify-center text-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-700">
            Frecuent Asked Questions  | FAQ
            </h1>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto">What can I create with Dipassio AI?</AccordionTrigger>
                    <AccordionContent className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto text-justify">
                    We have copywriting tools for everything you need to start and run your business! You can write blog posts, product descriptions, story, email, ad copy, and even Instagram captions with Dipassio AI
                   </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto">Can I use the outputs for commercial purposes?</AccordionTrigger>
                    <AccordionContent className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto text-justify">
                    Absolutely. When you use our AI tools to generate outputs, you are free to use them for your commercial activities. Our tools are designed to aid your endeavors, whether they are personal or commercial.
                   </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto">Does Dipassio AI have a free trial?</AccordionTrigger>
                    <AccordionContent className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto text-justify">
                    We don’t offer a free trial for users at this time. However, we offer a free version of Dipassio AI that includes top quality essential functionality. We believe this is a better way to allow users to become familiar with Dipassio AI.
                   </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto">What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto text-justify">
                    We strive to offer convenient and secure payment options for our users. We accept major credit cards including Visa, MasterCard, American Express, and Discover. All payments are processed securely through Stripe, a leading online payment platform, ensuring your transactions are safe and reliable.
                   </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto">Can I cancel my subscription?</AccordionTrigger>
                    <AccordionContent className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto text-justify">
                    Yes, customers can cancel their subscription at any time.

To cancel your subscription, kindly follow the outlined steps:

1. Please visit our website and proceed to log in to your account.
2. After successful login, locate and click on the account icon, which can be found at the upper right corner of the webpage.
3. From the ensuing options, please select "Manage subscription".
4. Within the "Manage subscription" section, your current subscription details will be displayed. To proceed with the cancellation, click on "Cancel Plan".
                   </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto">Will you add new tools to Dipassio AI?</AccordionTrigger>
                    <AccordionContent className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto text-justify">
                    Yes! We're always updating our tools, so let us know what else you'd like to see. We're constantly working to improve our platform and provide the best tools possible.
                   </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto">How does Dipassio AI handle sensitive data?</AccordionTrigger>
                    <AccordionContent className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-aut text-justify">
                    Dipassio AI upholds strict policies to ensure the privacy and security of user data. This includes industry-standard encryption of all data, strict access control measures, and no sharing or selling of personal information with third parties.
                   </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto">How long does Dipassio AI retain the data?</AccordionTrigger>
                    <AccordionContent className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto text-justify">
                    Dipassio AI retains data only as long as is necessary for the purposes for which it was collected. When you delete any generated results or data, it is permanently removed from our systems.
                   </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto">Does Dipassio AI use customer data to train its AI systems?</AccordionTrigger>
                    <AccordionContent className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto text-justify">
                    No, your data is your own. We do not use customer data to train our AI systems. Our algorithms are designed and developed independently of user data.
                   </AccordionContent>
              </AccordionItem>
            </Accordion>

            </div> 
            </div>
            </div>
            </div>
       </section>     
       <footer className="mx-auto max-w-[1920px] bg-zinc-700 px-6 text-white transition-colors duration-150">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-600 py-12 text-white transition-colors duration-150 bg-zinc-700">
    <div className="col-span-1 lg:col-span-2">
      <Link href="/">
        <p className="flex flex-initial items-center font-bold md:mr-24">
          <span className="rounded-full border border-zinc-200 mr-2">
            <Logo />
          </span>
          <span>DIPASSIO</span>
        </p>
      </Link>
    </div>
    <div className="col-span-1 lg:col-span-2">
      <ul className="flex flex-initial flex-col md:flex-1">
        <li className="py-3 md:py-0 md:pb-4">
          <Link href="/">
            <p className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
              Home
            </p>
          </Link>
        </li>
        <li className="py-3 md:py-0 md:pb-4">
          <Link href="/about-us">
            <p className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
              About
            </p>
          </Link>
        </li>
        <li className="py-3 md:py-0 md:pb-4">
          <Link href="/">
            <p className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
              Careers
            </p>
          </Link>
        </li>
        <li className="py-3 md:py-0 md:pb-4">
          <Link href="/">
            <p className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
              Blog
            </p>
          </Link>
        </li>
      </ul>
    </div>
    <div className="col-span-1 lg:col-span-2">
      <ul className="flex flex-initial flex-col md:flex-1">
        <li className="py-3 md:py-0 md:pb-4">
          <p className="text-white font-bold hover:text-zinc-200 transition ease-in-out duration-150">
            LEGAL
          </p>
        </li>
        <li className="py-3 md:py-0 md:pb-4">
          <Link href="/privacy">
            <p className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
              Privacy Policy
            </p>
          </Link>
        </li>
        <li className="py-3 md:py-0 md:pb-4">
          <Link href="/terms">
            <p className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
              Terms of Use
            </p>
          </Link>
        </li>
      </ul>
    </div>
    <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-end text-gray-500">
      <div className="flex space-x-6 items-center h-10">
        <p
          aria-label="Github Repository"
          href="https://github.com/vercel/nextjs-subscription-payments"
        >
          <GitHub />
        </p>
      </div>
    </div>
  </div>
  <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4 bg-zinc-700">
    <div>
      <span>&copy; 2023-2024 Dipassio SL All rights reserved.</span>
    </div>
    <div className="flex items-center">
      <span className="text-white">Crafted with love ❤️ in 2023 by</span>
      <p href="https://dipass.io" aria-label="Dipass.io Link">
        <Image
          src="rhinologo best.svg"
          height="32"
          width="32"
          alt="Dipass.io Logo"
          className="inline-block h-6 ml-4 text-white"
        />
      </p>
    </div>
  </div>
</footer>
       
        </div>

    </>
  );
};

export default LandingPage;

