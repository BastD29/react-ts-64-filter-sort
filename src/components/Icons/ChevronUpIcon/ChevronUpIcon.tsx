import Svg, { SvgProps } from "../../Svg/Svg";

const ChevronUpIcon: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-up"
      {...props}
    >
      <path d="m18 15-6-6-6 6" />
    </Svg>
  );
};

export default ChevronUpIcon;
