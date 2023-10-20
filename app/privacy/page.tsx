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

const PrivacyPage = () => {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-700">
                  Privacy Policy
                </h1>
                <div className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto text-justify">
Privacy Policy

Your privacy is important to us. It is Dipassio' policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, https://dipass.io, and other sites we own and operate.

This policy is effective as of 18 October 2023 and was last updated on 18 October 2023.
Information We Collect

Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services.
Log Data

When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter.

Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons.
Collection and Use of Information

We may collect personal information from you when you do any of the following on our website:

    Use a mobile device or web browser to access our content
    Contact us via email, social media, or on any similar technologies
    When you mention us on social media

We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:

Please be aware that we may combine information we collect about you with general information or research data we receive from other trusted sources.
Security of Your Personal Information

When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.

Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. We will comply with laws applicable to us in respect of any data breach.

You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services.
How Long We Keep Your Personal Information

We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. If your personal information is no longer required, we will delete it or make it anonymous by removing all details that identify you.

However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes.
Third Party Privacy Policies

Dipassio’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites.
CCPA Privacy Rights (Do Not Sell My Personal Information)

Under the CCPA, among other rights, California consumers have the right to:
Request that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
Request that a business delete any personal data about the consumer that a business has collected.
Request that a business that sells a consumer’s personal data, not sell the consumer’s personal data.
If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
GDPR Data Protection Rights

We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
Advertising

We may use Service Providers to show advertisements to You to help support and maintain Our Service.
Google AdSense & DoubleClick Cookie

Google, as a third party vendor, uses cookies to serve ads on our Service. Google's use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our Service or other websites on the Internet. You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting the Google Ads Settings web page: http://www.google.com/ads/preferences/
Facebook

Their Privacy Policy can be viewed at https://www.facebook.com/policy.php
Email Marketing

We may use Your Personal Data to contact You with newsletters, marketing or promotional materials and other information that may be of interest to You. You may opt-out of receiving any, or all, of these communications from Us by following the unsubscribe link or instructions provided in any email We send or by contacting Us. ‍We may use Email Marketing Service Providers to manage and send emails to You.
Payments

We may provide paid products and/or services within the Service. In that case, we may use third-party services for payment processing (e.g. payment processors).

We will not store or collect Your payment card details. That information is provided directly to Our third-party payment processors whose use of Your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.
Stripe

Their Privacy Policy can be viewed at: https://stripe.com/us/privacy
Children’s Privacy

We do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect personal information about children under 13.
International Transfers of Personal Information

The personal information we collect is stored and/or processed where we or our partners, affiliates, and third-party providers maintain facilities. Please be aware that the locations to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information. If we transfer your personal information to third parties in other countries: (i) we will perform those transfers in accordance with the requirements of applicable law; and (ii) we will protect the transferred personal information in accordance with this privacy policy.
Your Rights and Controlling Your Personal Information

You always retain the right to withhold personal information from us, with the understanding that your experience of our website may be affected. We will not discriminate against you for exercising any of your rights over your personal information. If you do provide us with personal information you understand that we will collect, hold, use and disclose it in accordance with this privacy policy. You retain the right to request details of any personal information we hold about you.

If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person’s consent to provide the personal information to us.

If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time. We will provide you with the ability to unsubscribe from our email-database or opt out of communications. Please be aware we may need to request specific information from you to help us confirm your identity.

If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date.

If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.
Limits of Our Policy

Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.
Changes to This Policy

At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy.

If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information.
Contact Us

For any questions or concerns regarding your privacy, you may contact us using the following details:

info
hello@dipass.io 

</div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default PrivacyPage;