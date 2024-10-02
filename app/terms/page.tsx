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
                  href='/Product'
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
                  Terms & Conditions
                </h1>

              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[950px] py-8 text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto text-justify">

  {/* Title */}
  <h1 className="text-3xl mb-4">
    Terms of Service
  </h1>

  {/* Paragraph 1 */}
  <p className="mb-4">
    These Terms of Service govern your use of the website located at <a href="https://dipass.io/" className="text-blue-600 hover:underline">https://dipass.io/</a> and any related services provided by Dipassio.
  </p>

  {/* Paragraph 2 */}
  <p className="mb-4">
    By accessing <a href="https://dipass.io/" className="text-blue-600 hover:underline">https://dipass.io/</a>, you agree to abide by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with these Terms of Service, you are prohibited from using or accessing this website or using any other services provided by Dipassio.
  </p>

  {/* Paragraph 3 */}
  <p className="mb-4">
    We, Dipassio, reserve the right to review and amend any of these Terms of Service at our sole discretion. Upon doing so, we will update this page. Any changes to these Terms of Service will take effect immediately from the date of publication.
  </p>

  {/* Paragraph 4 */}
  <p className="mb-4">
    These Terms of Service were last updated on 11 March 2021.
  </p>

  {/* Title */}
  <h2 className="text-2xl mb-4">
    Limitations of Use
  </h2>

  {/* List */}
  <ul className="list-disc pl-8 mb-4">
    <li>
      <p>
        Modify, copy, prepare derivative works of, decompile, or reverse engineer any materials and software contained on this website.
      </p>
    </li>
    <li>
      <p>
        Remove any copyright or other proprietary notations from any materials and software on this website.
      </p>
    </li>
    <li>
      <p>
        Transfer the materials to another person or "mirror" the materials on any other server.
      </p>
    </li>
    <li>
      <p>
        Knowingly or negligently use this website or any of its associated services in a way that abuses or disrupts our networks or any other service Dipassio provides.
      </p>
    </li>
    <li>
      <p>
        Use this website or its associated services to transmit or publish any harassing, indecent, obscene, fraudulent, or unlawful material.
      </p>
    </li>
    <li>
      <p>
        Use this website or its associated services in violation of any applicable laws or regulations.
      </p>
    </li>
    <li>
      <p>
        Use this website in conjunction with sending unauthorized advertising or spam.
      </p>
    </li>
    <li>
      <p>
        Harvest, collect, or gather user data without the user's consent.
      </p>
    </li>
    <li>
      <p>
        Use this website or its associated services in such a way that may infringe the privacy, intellectual property rights, or other rights of third parties.
      </p>
    </li>
  </ul>

  {/* Title */}
  <h2 className="text-2xl mb-4">
    Intellectual Property
  </h2>

  {/* Paragraph 5 */}
  <p className="mb-4">
    The intellectual property in the materials contained in this website are owned by or licensed to Dipassio and are protected by applicable copyright and trademark law. We grant our users permission to download one copy of the materials for personal, non-commercial transitory use.
  </p>

  {/* Paragraph 6 */}
  <p className="mb-4">
    This constitutes the grant of a license, not a transfer of title. This license shall automatically terminate if you violate any of these restrictions or the Terms of Service, and may be terminated by Dipassio at any time.
  </p>

  {/* Title */}
  <h2 className="text-2xl mb-4">
    Liability
  </h2>

  {/* Paragraph 7 */}
  <p className="mb-4">
    Our website and the materials on our website are provided on an 'as is' basis. To the extent permitted by law, Dipassio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property, or other violation of rights.
  </p>

  {/* Paragraph 8 */}
  <p className="mb-4">
    In no event shall Dipassio or its suppliers be liable for any consequential loss suffered or incurred by you or any third party arising from the use or inability to use this website or the materials on this website, even if Dipassio or an authorized representative has been notified, orally or in writing, of the possibility of such damage.
  </p>

  {/* Paragraph 9 */}
  <p className="mb-4">
    In the context of this agreement, "consequential loss" includes any consequential loss, indirect loss, real or anticipated loss of profit, loss of benefit, loss of revenue, loss of business, loss of goodwill, loss of opportunity, loss of savings, loss of reputation, loss of use and/or loss or corruption of data, whether under statute, contract, equity, tort (including negligence), indemnity, or otherwise.
  </p>

  {/* Paragraph 10 */}
  <p className="mb-4">
    Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
  </p>

  {/* Title */}
  <h2 className="text-2xl mb-4">
    Accuracy of Materials
  </h2>

  {/* Paragraph 11 */}
  <p className="mb-4">
    The materials appearing on our website are not comprehensive and are for general information purposes only. Dipassio does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on this website, or otherwise relating to such materials or on any resources linked to this website.
  </p>

  {/* Title */}
  <h2 className="text-2xl mb-4">
    Links
  </h2>

  {/* Paragraph 12 */}
  <p className="mb-4">
    Dipassio has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement, approval, or control by Dipassio of the site. Use of any such linked site is at your own risk and we strongly advise you make your own investigations with respect to the suitability of those sites.
  </p>

  {/* Title */}
  <h2 className="text-2xl mb-4">
    Right to Terminate
  </h2>

  {/* Paragraph 13 */}
  <p className="mb-4">
    We may suspend or terminate your right to use our website and terminate these Terms of Service immediately upon written notice to you for any breach of these Terms of Service.
  </p>

  {/* Title */}
  <h2 className="text-2xl mb-4">
    Severance
  </h2>

  {/* Paragraph 14 */}
  <p className="mb-4">
    Any term of these Terms of Service which is wholly or partially void or unenforceable is severed to the extent that it is void or unenforceable. The validity of the remainder of these Terms of Service is not affected.
  </p>

  {/* Title */}
  <h2 className="text-2xl mb-4">
    Governing Law
  </h2>

  {/* Paragraph 15 */}
  <p>
    These Terms of Service are governed by and construed in accordance with the laws of the United States. You irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
  </p>
</div>

      </section>
      <Footer />
    </>
  );
};

export default TermsPage;
