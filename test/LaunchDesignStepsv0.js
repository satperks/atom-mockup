import React, { useMemo } from "react";
import { Rocket, ClipboardList, Search, Trophy } from "lucide-react";

const StepsFrame = ({
  className = "",
  icon: Icon,
  titleOf,
  tellUsAboutYourNewBusiness,
  iconOverflow,
  titleOfColor,
  tellUsAboutColor,
}) => {
  const iconStyle = useMemo(() => {
    return {
      overflow: iconOverflow,
    };
  }, [iconOverflow]);

  const titleOfStyle = useMemo(() => {
    return {
      color: titleOfColor,
    };
  }, [titleOfColor]);

  const tellUsAboutStyle = useMemo(() => {
    return {
      color: tellUsAboutColor,
    };
  }, [tellUsAboutColor]);

  return (
    <div
      className={`w-full max-w-[400px] flex flex-col items-center justify-start gap-[25px] text-center text-4xl text-gray-200 font-bold ${className}`}
    >
      <div className="w-[116px] h-[116px] shadow-[0px_4px_8px_rgba(0,_0,_0,_0.25)] rounded-xl bg-gray-100 border-gray-400 border border-solid flex items-center justify-center relative">
        <Icon
          className="w-16 h-16 text-gray-600"
          style={iconStyle}
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-3">
        <div className="self-stretch relative h-[27px]">
          STEP
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-2xl">
          <div className="self-stretch relative" style={titleOfStyle}>
            {titleOf}
          </div>
          <div
            className="self-stretch relative text-base text-gray-300"
            style={tellUsAboutStyle}
          >
            {tellUsAboutYourNewBusiness}
          </div>
        </div>
      </div>
    </div>
  );
};

const LaunchYourDesignSteps = ({ className = "" }) => {
  const steps = [
    {
      icon: Rocket,
      title: "Share Your Vision",
      description: "Tell us about your new business and the brand vision you want to bring to life. Our team of Atom creatives will use this inspiration to start designing a logo that truly reflects what makes your brand unique.",
    },
    {
      icon: ClipboardList,
      title: "Shape Your Logo with Feedback",
      description: "As entries come in, rate them and leave feedback on what you like or want adjusted. This collaboration helps our designers fine-tune each submission to your taste, making sure the designs align with your vision.",
    },
    {
      icon: Search,
      title: "Audience Testing & Trademark Screening",
      description: "Got some top picks? We'll test these designs with your target audience to ensure they connect with your customers. Plus, our team can handle Trademark screening for peace of mind.",
    },
    {
      icon: Trophy,
      title: "Choose Your Winning Logo",
      description: "Once testing is complete, select your favorite entry. Your chosen designer will be paid, and you'll receive a unique logo ready to represent your brand.",
    },
  ];

  return (
    <div className={`w-full max-w-[1920px] mx-auto ${className}`}>
      <section className="bg-white overflow-hidden flex flex-col items-start justify-start py-16 px-4 sm:px-6 lg:px-8 gap-12">
        <h1 className="w-full text-5xl font-bold text-center text-black">
          Launch Your Design Contest Fast
        </h1>
        <div className="w-full overflow-x-auto">
          <div className="inline-flex gap-8 pb-4">
            {steps.map((step, index) => (
              <StepsFrame
                key={index}
                icon={step.icon}
                titleOf={step.title}
                tellUsAboutYourNewBusiness={step.description}
                iconOverflow="hidden"
                titleOfColor="#000"
                tellUsAboutColor="#000"
              />
            ))}
          </div>
        </div>
        <div className="w-full max-w-[1216px] mx-auto relative">
          <div className="absolute top-[-150px] left-0 right-0 flex justify-between">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="w-[317px] h-[1px] border-t border-dashed border-gray-300" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaunchYourDesignSteps;