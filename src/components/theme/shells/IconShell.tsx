import type { FunctionComponent, ReactNode } from 'react';

type IconGhostProps = {
  as?: 'div' | 'button';
  isButton?: boolean;
  [x: string]: any;
  children: ReactNode;
  hasBorder?: boolean;
};

type WrapperProps = {
  children: ReactNode;
  isButton?: boolean;
  hasBorder?: boolean;
  [x: string]: any;
};

const Wrapper: FunctionComponent<WrapperProps> = ({
  children,
  isButton,
  hasBorder = true,
  ...props
}) => {
  const Component = isButton ? 'button' : 'div';
  const classes = `flex justify-center items-center px-2 w-8 h-8 rounded-md ${hasBorder ? 'border border-solid border-[#ffffff17] hover:cursor-pointer hover:border-white/40 transition-colors  duration-500' : ''}`;
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default function IconGhost({
  as = 'div',
  children,
  isButton,
  hasBorder,
  ...props
}: IconGhostProps) {
  return (
    <Wrapper isButton={isButton} hasBorder={hasBorder} {...props}>
      <span className="size-icon-size text-[#fff9]">{children}</span>
    </Wrapper>
  );
}

/* usage
<IconGhost isButton={true} onClick={() => console.log('Icon clicked')}>
  <MapIcon />
</IconGhost>
<IconGhost>
  <UserIcon />
</IconGhost>
*/
