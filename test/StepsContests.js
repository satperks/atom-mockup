import FinalStepIcons5 from "./FinalStepsIcons5.js";
import PropTypes from "prop-types";

const DesignContestSteps = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-gray-100 max-w-full overflow-hidden flex flex-col items-start justify-start py-[100px] px-0 box-border gap-[77px] leading-[normal] tracking-[normal] text-center text-21xl text-gray-200 font-product-sans-black mq750:gap-[38px] mq450:gap-[19px] ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] mq1050:text-13xl mq450:text-5xl">
        Launch Your Design Contest Fast
      </h1>
      <section className="self-stretch flex flex-row items-start justify-between relative max-w-full gap-5 text-center text-xl text-gray-200 font-product-sans lg:flex-wrap lg:justify-center">
        <div className="flex flex-col items-center justify-start pt-0 px-[47px] pb-[19px] box-border gap-10 min-w-[432px] max-w-full lg:flex-1 mq750:min-w-full mq450:gap-5 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="shadow-[0px_4px_8px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray-100 border-red border-[1px] border-solid flex flex-col items-center justify-center p-5">
            <img
              className="w-10 h-10 relative"
              loading="lazy"
              alt=""
              src="/rocketship.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-1 gap-3 shrink-0">
            <h3 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] mq450:text-base">
              STEP 1
            </h3>
            <div className="self-stretch flex flex-col items-center justify-start gap-2 text-lg font-product-sans-medium">
              <div className="self-stretch relative">Share Your Vision</div>
              <div className="w-[303px] relative text-sm font-product-sans inline-block">
                <p className="m-0">
                  Tell us about your new business and the brand vision you want
                  to bring to life. Our team of Atom creatives will use this
                  inspiration to start designing a logo that truly reflects what
                  makes your brand unique.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[432px] !m-[0] absolute h-full top-[0px] bottom-[0px] left-[337px] flex flex-col items-center justify-start pt-0 px-[47px] pb-[19px] box-border gap-10 max-w-full z-[1]">
          <div className="shadow-[0px_4px_8px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray-100 border-red border-[1px] border-solid flex flex-col items-center justify-center p-5">
            <img
              className="w-10 h-10 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/checklist-icon.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-1 gap-3 shrink-0">
            <h3 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] mq450:text-base">
              STEP 2
            </h3>
            <div className="self-stretch flex flex-col items-center justify-start gap-2 text-lg font-product-sans-medium">
              <div className="self-stretch relative">
                Shape Your Logo with Feedback
              </div>
              <div className="w-[303px] relative text-sm font-product-sans inline-block">
                As entries come in, rate them and leave feedback on what you
                like or want adjusted. This collaboration helps our designers
                fine-tune each submission to your taste, making sure the designs
                align with your vision.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start min-w-[751px] max-w-full lg:flex-1 mq1050:min-w-full">
          <FinalStepIcons5 dataMagnifyingGlass="/data-magnifying-glass.svg" />
          <div className="w-[418px] flex flex-col items-center justify-start pt-0 px-10 pb-[19px] box-border gap-10 max-w-full z-[3] ml-[-99px] mq450:gap-5">
            <div className="shadow-[0px_4px_8px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray-100 border-red border-[1px] border-solid flex flex-col items-center justify-center p-5">
              <img
                className="w-10 h-10 relative"
                loading="lazy"
                alt=""
                src="/trophy-star.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-1 gap-3 shrink-0">
              <h3 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] mq450:text-base">
                STEP 4
              </h3>
              <div className="self-stretch flex flex-col items-center justify-start gap-2 text-lg font-product-sans-medium">
                <div className="self-stretch relative">
                  Choose Your Winning Logo
                </div>
                <div className="w-[303px] h-[84px] relative text-sm font-product-sans inline-block shrink-0">
                  <p className="m-0">
                    Once testing is complete, select your favorite entry. Your
                    chosen designer will be paid, and you’ll receive a unique
                    logo ready to represent your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 w-[922.8px] !m-[0] absolute top-[40px] right-[255.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border gap-[91.4px] max-w-full z-[4]">
          <div className="h-[1.1px] w-[246px] relative">
            <div className="absolute top-[0px] left-[4px] border-lightgray border-t-[1.1px] border-dashed box-border w-full h-full z-[4]" />
            <div className="absolute top-[0px] left-[0px] border-lightgray border-t-[1.1px] border-dashed box-border w-full h-full" />
          </div>
          <div className="h-[1.1px] w-[261.1px] relative border-lightgray border-t-[1.1px] border-dashed box-border" />
          <div className="h-[1.1px] w-[235.1px] relative border-lightgray border-t-[1.1px] border-dashed box-border" />
        </div>
      </section>
    </div>
  );
};

DesignContestSteps.propTypes = {
  className: PropTypes.string,
};

export default DesignContestSteps;