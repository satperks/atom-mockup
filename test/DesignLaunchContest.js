import FrameComponent1 from "./FrameComponent";
import PropTypes from "prop-types";

const DesignLaunchSteps = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-gray-100 max-w-full overflow-hidden flex flex-col items-start justify-start py-[100px] px-0 box-border gap-[77px] leading-[normal] tracking-[normal] text-center text-21xl text-gray-200 font-product-sans-black mq450:gap-[19px] mq750:gap-[38px] ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] mq450:text-5xl mq750:text-13xl">
        Launch Your Design Contest Fast
      </h1>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[46px] box-border max-w-full mq750:pl-[23px] mq750:pr-[23px] mq750:box-border">
        <div className="flex-1 flex flex-row items-end justify-center flex-wrap content-end relative gap-0 [row-gap:20px] max-w-full">
          <FrameComponent1
            checklistIcon="/checklist-icon.svg"
            sTEP1="STEP 2"
            shareYourVision="Shape Your Logo with Feedback"
          />
          <FrameComponent1
            checklistIcon="/checklist-icon-1.svg"
            sTEP1="STEP 2"
            shareYourVision="Shape Your Logo with Feedback"
            frameDivMarginBottom="-1px"
            checklistIconOverflow="hidden"
            shareYourVisionColor="#000"
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[219px] max-w-full">
            <FrameComponent1
              checklistIcon="/data-magnifying-glass.svg"
              sTEP1="STEP 3"
              shareYourVision={`Audience Testing & Trademark Screening`}
              frameDivMarginBottom="unset"
              checklistIconOverflow="unset"
              shareYourVisionColor="#212529"
            />
          </div>
          <FrameComponent1
            checklistIcon="/trophy-star.svg"
            sTEP1="STEP 4"
            shareYourVision="Choose Your Winning Logo"
            frameDivMarginBottom="unset"
            checklistIconOverflow="unset"
            shareYourVisionColor="#212529"
          />
          <img
            className="h-0.5 w-[920px] absolute !m-[0] top-[39px] left-[calc(50%_-_460px)] overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/dottedlines-2.svg"
          />
        </div>
      </section>
    </div>
  );
};

DesignLaunchSteps.propTypes = {
  className: PropTypes.string,
};

export default DesignLaunchSteps;