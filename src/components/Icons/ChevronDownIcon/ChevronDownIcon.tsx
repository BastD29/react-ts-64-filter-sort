import Svg, { SvgProps } from "../../Svg/Svg";

const ChevronDownIcon: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-down"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </Svg>
  );
};

export default ChevronDownIcon;
