import w1 from "@/images/workflow-1.png";
import w2 from "@/images/workflow-2.png";
import w3 from "@/images/workflow-3.png";
import w4 from "@/images/workflow-4.png";
import Image from "next/image";

const steps = [
  {
    title: "Discovery",
    icon: w1,
    w: 85,
    s: 0,
  },
  {
    title: "Planning",
    icon: w2,
    w: 102,
    s: 2,
  },
  {
    title: "Execution",
    icon: w4,
    w: 90,
    s: 0,
  },
  {
    title: "Delivery",
    icon: w3,
    w: 89,
    s: 2,
  },
];

const Howiworksection = () => {
  return (
    <div
      id="howiwork"
      className="bg-black relative overflow-clip min-h-screen w-full"
    >
      {/* Wrapping Div */}
      <div className="container mx-auto text-[#FFFFFF] overflow-clip flex flex-col justify-center items-center pb-10">
        <h1 className="md:text-[40px] text-[35px] text-[#FFFFFF] font-inter mt-20 md:mt-30 font-thin mb-2">
          Journey of a Project
        </h1>
        <p className="font-inter text-[#A1A1A1] md:text-[18px] text-[16px] px-[10px] md:px-0 font-light text-center">
          My approach is a simple and focused on delivering the best results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-y-20 lg:gap-x-70 md:gap-y-30 md:gap-x-20 max-w-9xl mx-auto mt-20">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="bg-[#FFFFFF] h-[180px] md:h-[190px]  rounded-[8px] p-5 px-20 hover:scale-105">
                <p className="font-inter text-[28px] text-[#161616] text-center font-medium">
                  {step.title}
                </p>
                <div className="flex justify-end">
                  <Image
                    src={step.icon}
                    alt="icon"
                    className={`mx-auto mt-${step.s}`}
                    width={`${step.w}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Howiworksection;
