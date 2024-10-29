import { useMemo } from "react";
import PropTypes from "prop-types";

const FinalStepIcons5 = ({
  className = "",
  dataMagnifyingGlass,
  finalStepIconsMarginLeft,
  dataMagnifyingGlassOverflow,
}) => {
  const finalStepIconsStyle = useMemo(() => {
    return {
      marginLeft: finalStepIconsMarginLeft,
    };
  }, [finalStepIconsMarginLeft]);

  const dataMagnifyingGlassStyle = useMemo(() => {
    return {
      overflow: dataMagnifyingGlassOverflow,
    };
  }, [dataMagnifyingGlassOverflow]);

  return (
    <div
      className={`flex-1 flex flex-col items-center justify-start pt-0 px-[47px] pb-[19px] box-border gap-10 max-w-full z-[2] text-center text-xl text-gray-200 font-product-sans mq450:gap-5 mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      style={finalStepIconsStyle}
    >
      <div className="shadow-[0px_4px_8px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray-100 border-red border-[1px] border-solid flex flex-col items-center justify-center p-5">
        <img
          className="w-10 h-10 relative"
          loading="lazy"
          alt=""
          src={dataMagnifyingGlass}
          style={dataMagnifyingGlassStyle}
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
            As entries come in, rate them and leave feedback on what you like or
            want adjusted. This collaboration helps our designers fine-tune each
            submission to your taste, making sure the designs align with your
            vision.
          </div>
        </div>
      </div>
    </div>
  );
};

FinalStepIcons5.propTypes = {
  className: PropTypes.string,
  dataMagnifyingGlass: PropTypes.string,

  /** Style props */
  finalStepIconsMarginLeft: PropTypes.string,
  dataMagnifyingGlassOverflow: PropTypes.string,
};

export default FinalStepIcons5;