// Importing necessary types from react
import type { FunctionComponent, ReactNode } from "react";

// Defining the props for the IconGhost component
type IconGhostProps = {
  as?: "div" | "button";
  isButton?: boolean;
  [x: string]: any; // Allows for additional props
  children: ReactNode; // Children must be a valid React node
  hasBorder?: boolean; // Optional prop to control border visibility
};

// Defining the props for the Wrapper component
type WrapperProps = {
  children: ReactNode; // Children must be a valid React node
  isButton?: boolean; // Optional prop to determine if the wrapper should render as a button
  hasBorder?: boolean; // Optional prop to control border visibility
  [x: string]: any; // Allows for additional props
};

// Implementing the Wrapper component
const Wrapper: FunctionComponent<WrapperProps> = ({
  children,
  isButton,
  hasBorder = true,
  ...props
}) => {
  const Component = isButton ? "button" : "div"; // Determine the component type based on the isButton prop
  // Constructing the class string to conditionally apply border styles
  const classes = `flex justify-center items-center px-2 w-8 h-8 rounded-md border border-solid  ${
    hasBorder ? "border-[#ffffff17]" : "border-transparent"
  } hover:cursor-pointer hover:border-white/40 transition-colors duration-500`;
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default function IconGhost({
  as = "div",
  children,
  isButton,
  hasBorder,
  ...props
}: IconGhostProps) {
  return (
    <Wrapper isButton={isButton} hasBorder={hasBorder} {...props}>
      <span className="size-ficon-size text-[#fff9]">{children}</span>
    </Wrapper>
  );
}

/* Usage examples
<IconGhost isButton={true} onClick={() => console.log('Icon clicked')}>
  <MapIcon />
</IconGhost>
<IconGhost>
  <UserIcon />
</IconGhost>
*/
