import {SVGProps} from "react";

import {gpmColors} from "@/lib/constants/gpm-colors";

type Props = {
  logoColor?: string;
} & SVGProps<SVGSVGElement>;

export function GPMLogo({...props}: Props) {
  return (
    <svg version="1.1" viewBox="0 12 420.9 439" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M404.5,221.7L221.2,38.4c-5.5-5.5-15.3-5.5-20.8,0L17.2,221.7c-2.8,2.8-4.3,6.5-4.3,10.4s1.5,7.6,4.3,10.4l183.3,183.2c2.8,2.8,6.5,4.3,10.4,4.3s7.6-1.5,10.4-4.3l183.2-183.2c2.8-2.8,4.3-6.5,4.3-10.4,0-3.9-1.5-7.6-4.3-10.4ZM373.3,232.1l-162.5,162.5L48.3,232.1,210.8,69.5l162.5,162.6Z"
        fill={gpmColors.yellow}
      />
    </svg>
  );
}
