import Image from "next/image";
import demo1 from "@/images/demo-1.png";
import demo2 from "@/images/demo-2.png";

const Myworksection = () => {
  return (
    <div
      id="mywork"
      className="bg-black relative overflow-clip min-h-screen w-full"
    >
      {/* Wrapping Div */}
      <div className="container mx-auto text-[#FFFFFF] overflow-clip flex flex-col justify-center items-center lg:pb-30 md:pb-10 pb-20">
        {/* Title */}
        <h1 className="font-inria text-[40px] text-[#FFFFFF] md:mt-30 mt-25 mb-2 font-light">
          This Is What I Do
        </h1>
        {/* Subtitle */}
        <p className="font-inter text-[#A1A1A1] md:text-[18px] text-[16px] px-[35px] md:px-0 text-center">
          Selected samples of my UI/UX and front-end craft.
        </p>
        {/* 2 DEMO Storing div */}
        <div className="flex flex-col justify-center items-center gap-20 lg:gap-20 md:gap-25 mt-30 lg:ml-26 md:ml-0 ">
          {/* 1Demo */}
          <div className="flex  md:flex-row flex-col justify-center items-center lg:gap-55 md:gap-10">
            {/* Left Side */}
            <div className="md:flex flex-col text-left mt-2 hidden">
              <p className="md:text-[29px] text-[25px] text-[#F7F7F7] font-inter md:block hidden">
                Ai Resume Landing Page
              </p>
              <p className="font-inter text-[#999999] text-[18px] font-light mt-2 hidden lg:block">
                An AI-powered landing page that helps users generate job-ready{" "}
                <span className="block">
                  resumes in seconds. Clean UI,smart preview, and mordern
                  layout.
                </span>
              </p>
              <p className="font-inter text-[#999999] text-[18px] font-light flex gap-2 mt-3">
                Tools Used{" "}
                <span>
                  <Image
                    src="/arrow-2.svg"
                    alt="arrow"
                    width={15}
                    height={5}
                    className="mt-[4px]"
                  />
                </span>
                OpenAI | Figma | React | Tailwind
              </p>
              <a
                href="https://ai-resume-landing-liard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D9D9D9] text-[17px] rounded-[4px] mt-8 pt-[3px] w-[110px] h-[35px] font-poppins text-[#000000] hover:scale-104 hidden md:block"
              >
                <button>
                  Live Demo
                </button>
              </a>
            </div>

            {/* Right Side */}
            <p className="md:text-[29px] text-[25px] text-[#F7F7F7] font-inter md:hidden block">
              Ai Resume Landing Page
            </p>
            <Image
              src={demo1}
              alt="Demo-1"
              width={330}
              className="md:w-[250px] lg:w-[330px] mt-10 md:mt-0"
            />
            <a
              href="https://ai-resume-landing-liard.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D9D9D9] md:hidden block text-[17px] rounded-[4px] mt-8 pt-[3px] w-[110px] h-[35px] font-poppins text-[#000000] hover:scale-104"
            >
              <button>
                Live Demo
              </button>
            </a>
          </div>

          {/* 2Demo */}
          <div className="flex md:flex-row flex-col justify-center items-center lg:gap-55 md:gap-10">
            {/* Left Side */}
            <div className="md:flex flex-col text-left mt-2  hidden">
              <p className="md:text-[29px] text-[25px] text-[#F7F7F7] font-inter">
                No-Code Website Builder{" "}
                <span className="block lg:inline-block">Landing Page</span>
              </p>
              <p className="font-inter text-[#999999] text-[18px] font-light mt-2 hidden lg:block">
                A no-code landing page that lets the users design and launch
                websites{" "}
                <span className="block">
                  in minutes.Minimal UI,live preview and responsive layout.
                </span>
              </p>
              <p className="font-inter text-[#999999] text-[18px] font-light flex gap-2 mt-3">
                Tools Used{" "}
                <span>
                  <Image
                    src="/arrow-2.svg"
                    alt="arrow"
                    width={15}
                    height={5}
                    className="mt-[5px]"
                  />
                </span>
                OpenAI | Figma | React | Tailwind
              </p>
              <a
                href="https://nocode-landing-page.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D9D9D9] text-[17px] rounded-[4px] mt-8 pt-[3px] w-[110px] h-[35px] font-poppins text-[#000000] hover:scale-104 hidden md:block"
              >
                <button>
                  Live Demo
                </button>
              </a>
            </div>

            {/* Right Side */}
            <p className="md:text-[29px] text-[25px] text-[#F7F7F7] font-inter md:hidden block">
              No-Code Website Builder
            </p>
            <Image
              src={demo2}
              alt="Demo-2"
              width={330}
              className="md:w-[250px] lg:w-[330px] w-[330px] mt-10 md:mt-0"
            />
            <a
              href="https://nocode-landing-page.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D9D9D9] md:hidden block text-[17px] rounded-[4px] mt-8 pt-[3px] w-[110px] h-[35px] font-poppins text-[#000000] hover:scale-104"
            >
              <button>
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myworksection;
