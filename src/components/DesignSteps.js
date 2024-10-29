import PropTypes from "prop-types";

const DesignLaunchSteps = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-gray-100 max-w-full overflow-hidden flex flex-col items-start justify-start py-[40px] px-0 box-border gap-[77px] leading-[normal] tracking-[normal] text-center text-4xl text-gray-200 font-product-sans-black mq450:gap-[19px] mq750:gap-[38px] ${className}`}
    >
      <div className="self-stretch relative mq450:text-5xl mq750:text-13xl">
        Launch Your Design Contest Fast
      </div>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[46px] box-border max-w-full mq750:pl-[23px] mq750:pr-[23px] mq750:box-border">
        <div className="h-[279px] flex-1 relative max-w-full aspect-[3/1]">
          <img
            className="absolute top-[50%] left-[0px] w-full h-[90%] overflow-hidden object-contain transform -translate-y-1/2"
            alt=""
            src="./DesignContestFast.svg"
          />
          <img
            className="absolute top-[39px] left-[214px] w-[920px] h-0.5 overflow-hidden z-[1]"
            loading="lazy"
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