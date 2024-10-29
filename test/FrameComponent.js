import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent1 = ({
  className = "",
  checklistIcon,
  sTEP1,
  shareYourVision,
  frameDivMarginBottom,
  checklistIconOverflow,
  shareYourVisionColor,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      marginBottom: frameDivMarginBottom,
    };
  }, [frameDivMarginBottom]);

  const checklistIconStyle = useMemo(() => {
    return {
      overflow: checklistIconOverflow,
    };
  }, [checklistIconOverflow]);

  const shareYourVisionStyle = useMemo(() => {
    return {
      color: shareYourVisionColor,
    };
  }, [shareYourVisionColor]);

  return (
    <div
      className={`mb-[-1px] h-[274px] w-[337px] flex flex-col items-start justify-start gap-10 z-[4] text-center text-xl text-gray-200 font-product-sans ${className}`}
      style={frameDivStyle}
    >
      <div className="w-[208.5px] h-20 flex flex-row items-start justify-start py-0 pl-[128.5px] pr-0 box-border">
        <div className="h-20 w-20 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray-100 flex flex-col items-center justify-center p-2.5 box-border">
          <img
            className="w-10 h-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={checklistIcon}
            style={checklistIconStyle}
          />
        </div>
      </div>
      <div className="w-[337px] h-[154px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-3">
        <h3 className="m-0 w-[338px] h-6 relative text-inherit font-bold font-[inherit] inline-block shrink-0">
          {sTEP1}
        </h3>
        <div className="w-[337px] h-[114px] flex flex-col items-start justify-start gap-2 text-lg text-black font-product-sans-medium">
          <div
            className="w-[338px] h-[22px] relative inline-block shrink-0"
            style={shareYourVisionStyle}
          >
            {shareYourVision}
          </div>
          <div className="w-80 h-[84px] flex flex-row items-start justify-start py-0 pl-[17px] pr-0 box-border text-sm text-gray-200 font-product-sans">
            <div className="w-[303px] relative inline-block h-[84px] shrink-0">
              <p className="m-0">
                Tell us about your new business and the brand vision you want to
                bring to life. Our team of Atom creatives will use this
                inspiration to start designing a logo that truly reflects what
                makes your brand unique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  checklistIcon: PropTypes.string,
  sTEP1: PropTypes.string,
  shareYourVision: PropTypes.string,

  /** Style props */
  frameDivMarginBottom: PropTypes.string,
  checklistIconOverflow: PropTypes.string,
  shareYourVisionColor: PropTypes.string,
};

export default FrameComponent1;