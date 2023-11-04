import { Fragment } from "react";

type BoxProps = {
  cbAs?: any;
  cbHidden?: boolean;
  children?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Box = ({ cbAs, cbHidden, children, ...props }: BoxProps) => {
  let Component = cbAs || Fragment;
  let SecondaryProps = {};

  if (Array.isArray(cbAs)) {
    Component = cbAs[0];
    SecondaryProps = cbAs[1];
  } else if (cbAs) {
    Component = cbAs as any;
  }
  return (
    <>
      {!cbHidden && (
        <Component {...props} {...SecondaryProps}>
          {children}
        </Component>
      )}
    </>
  );
};
