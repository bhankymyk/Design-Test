import {ComponentProps, forwardRef} from "react";

type Props = ComponentProps<"svg">;
export const MenuIcon = forwardRef<SVGSVGElement, Props>(
  ( {className}, ref) => {
    return (
      <svg
           className={`fill-current h-3 w-3 ${className ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
    )
  })

MenuIcon.displayName = 'MenuIcon'

