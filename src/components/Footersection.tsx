import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/Logo.png";
import twitter from "@/images/social4.jpg";

const Footersection = () => {
  return (
    <footer className="overflow-hidden bg-[#050505] text-white py-8 ">
      <div className="container mx-auto px-6 text-center">
        {/* Branding */}
        <div className="md:flex md:items-center md:gap-30  justify-between">
          <div className="md-text-left ml-28 md:ml-0">
            <Link href="/" className="text-gray-400 hover:text-white">
              <Image src={Logo} alt="logo" width={110} height={150} />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4">
            <ul className="flex justify-center space-x-6 text-white">
              <Link href="#howiwork">
                <span className="hover:text-[#C0C0C0]">How I work</span>
              </Link>
              <Link href="#mywork">
                <span className="hover:text-[#C0C0C0]">My work</span>
              </Link>
              <Link href="#contact">
                <span className="hover:text-[#C0C0C0]">Contact</span>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="border-b-1 text-[#C0C0C0] hidden md:block md:mt-5"></div>
        {/* Social Icons */}
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://github.com/megha-gif"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/social-icon-1.svg"
              alt="social link2"
              width={30}
              height={5}
              className="mt-[4px] hover:scale-120"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/megha-varshini-697747364/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/social-icon-2.svg"
              alt="social link2"
              width={30}
              height={5}
              className="mt-[4px] hover:scale-120"
            />
          </a>
          <a
            href="https://www.instagram.com/meghafrontend/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/social-icon-3.svg"
              alt="social link3"
              width={30}
              height={5}
              className="mt-[4px] hover:scale-120"
            />
          </a>
          <a
            href="https://x.com/meghafrontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={twitter}
              alt="social link3"
              width={30}
              height={5}
              className="mt-[4px] hover:scale-120"
            />
          </a>
        </div>
        {/* Copyright */}
        <div className="mt-6 text-gray-400 text-sm">
          {`&copy; 2025 Megha's portfolio | Made with ❤`}
        </div>
      </div>
    </footer>
  );
};

export default Footersection;
