import StepsFrame from "./StepFrame";
import PropTypes from "prop-types";
import rocketshipIcon from '../assets/images/rocketship.svg';
import checklistIcon from '../assets/images/checklist-icon.svg';
import DataMagnifyGlass from '../assets/images/data-magnifying-glass.svg';
import TrophyStar from '../assets/images/trophy-star.svg';

const LaunchYourDesignSteps = ({ className = "" }) => {
  return (
    <div className={`w-[2112px] max-w-full flex flex-row items-start justify-start leading-[normal] tracking-[normal] font-product-sans ${className}`}>
      <section className="flex-1 bg-white overflow-hidden flex flex-col items-start justify-start pt-[99px] pb-[110px] pl-[93.5px] pr-[92.4px] box-border relative gap-[99px] max-w-full text-center text-[66px] text-black font-product-sans">
        <h1 className="m-0 self-stretch relative text-inherit font-bold font-product-sans">
          Launch Your Design Contest Fast
        </h1>
        <div className="overflow-x-auto flex flex-row items-start justify-start gap-[55px] max-w-full mq700:gap-[27.5px]">
          <StepsFrame
            rocketship={rocketshipIcon}
            titleOf="Share Your Vision"
            tellUsAboutYourNewBusiness="Tell us about your new business and the brand vision you want to bring to life. Our team of Atom creatives will use this inspiration to start designing a logo that truly reflects what makes your brand unique."
          />
          <StepsFrame
            rocketship={checklistIcon}
            titleOf="Shape Your Logo with Feedback"
            tellUsAboutYourNewBusiness="As entries come in, rate them and leave feedback on what you like or want adjusted. This collaboration helps our designers fine-tune each submission to your taste, making sure the designs align with your vision."
            rocketshipIconOverflow="hidden"
            titleOfColor="#000"
            tellUsAboutColor="#000"
          />
          <StepsFrame
            rocketship={DataMagnifyGlass}
            titleOf={`Audience Testing & Trademark Screening`}
            tellUsAboutYourNewBusiness="Got some top picks? We’ll test these designs with your target audience to ensure they connect with your customers. Plus, our team can handle Trademark screening for peace of mind."
            rocketshipIconOverflow="unset"
            titleOfColor="#212529"
            tellUsAboutColor="#000"
          />
          <StepsFrame
            rocketship={TrophyStar}
            titleOf="Choose Your Winning Logo"
            tellUsAboutYourNewBusiness="Once testing is complete, select your favorite entry. Your chosen designer will be paid, and you’ll receive a unique logo ready to represent your brand."
            rocketshipIconOverflow="unset"
            titleOfColor="#212529"
            tellUsAboutColor="#000"
          />
        </div>
        <div className="w-[1337.6px] h-0 !m-[0] absolute top-[333.3px] left-[calc(50%_-_668.8px)] flex flex-row items-start justify-between pt-0 px-0 pb-0 box-border gap-5 max-w-full z-[1]">
          <div className="h-[1.21px] w-[348.81px] relative border-lightgray border-t-[1.21px] border-dashed box-border" />
          <div className="h-[1.21px] w-[348.81px] relative border-lightgray border-t-[1.21px] border-dashed box-border" />
          <div className="h-[1.21px] w-[348.81px] relative border-lightgray border-t-[1.21px] border-dashed box-border" />
        </div>
      </section>
    </div>
  );
};

LaunchYourDesignSteps.propTypes = {
  className: PropTypes.string,
};

export default LaunchYourDesignSteps;
