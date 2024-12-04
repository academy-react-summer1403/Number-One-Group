import { TourProvider } from "@reactour/tour";
import { TourSteps } from "../../constants/tour-steps";
import { getItem } from "../../hooks/local-storage";
import { useTranslation } from "react-i18next";

const TourProvide = ({ children }) => {
  const theme = getItem("theme")
  const { i18n } = useTranslation()
  const radius = 10

  return <TourProvider
    prevButton={({ currentStep, setCurrentStep, steps }) => {
      const first = currentStep === 0
      return (
        <button
          className="bg-VioletBlue px-3 rounded-md text-LightLavender "
          onClick={() => {
            if (first) {
              setCurrentStep((s) => steps.length - 1)
            } else {
              setCurrentStep((s) => s - 1)
            }
          }}
        >
          {i18n.language === 'fa' ? "قبلی" : "Back"}
        </button>
      )
    }}
    badgeContent={({ totalSteps, currentStep }) => currentStep + 1 + "/" + totalSteps}
    steps={TourSteps}
    styles={{
      popover: (base) => ({
        ...base,
        '--reactour-accent': '#5751E1',
        borderRadius: radius,
        backgroundColor: theme ? "#555" : "#fff",
        lineHeight: "30px",
        textAlign: "center"
      }),
      maskArea: (base) => ({ ...base, rx: radius }),
      maskWrapper: (base) => ({ ...base, color: '#000' }),
      badge: (base) => ({ ...base, right: 'auto', left: '-0.8125em' }),
      controls: (base) => ({ ...base, marginTop: 20 }),
      close: (base) => ({ ...base, right: 'auto', left: 8, top: 8, display: "none" }),
    }}


  >{children}</TourProvider>;
};

export default TourProvide;
