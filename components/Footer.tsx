import Link from 'next/link';
import Image from 'next/image';
import Logo from './icons/Logo';
import GitHub from './icons/GitHub';

const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1920px] bg-blue-700 px-6 text-white transition-colors duration-150">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-blue-600 py-12 text-white transition-colors duration-150 bg-blue-700">
        <div className="col-span-1 lg:col-span-2">
          <Link href="/">
            <p className="flex flex-initial items-center font-bold md:mr-24">
              <span className="border-blue-200 mr-2">
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
        <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-end text-black">
          <div className="flex space-x-6 items-center h-10">
            <a
              aria-label="Github Repository"
              href="https://github.com/dipass-io"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4 bg-blue-700">
        <div>
          <span>&copy; 2024-2025 Dipassio SL All rights reserved.</span>
        </div>
        <div className="flex items-center">
          <span className="text-white">Crafted with ❤️ in 2024 by</span>
          <a href="https://dipass.io" aria-label="Dipass.io Link">
            <Image
              src="/rhinologo best.svg"
              height={32}
              width={32}
              alt="Dipass.io Logo"
              className="inline-block h-6 ml-4 text-white"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;