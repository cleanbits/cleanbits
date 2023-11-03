import { CB } from "..";

type DataProps = {
  cbValue: any;
  cbAs?: any;
  cbCallback?: (...agrs: any) => any;
  cbHidden?: boolean;
  children?: never;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Data = ({
  cbAs,
  cbCallback,
  cbHidden,
  cbValue,
  ...props
}: DataProps) => {
  return (
    <>
      <CB.Box cbAs={cbAs} cbHidden={cbHidden} {...props}>
        {cbCallback ? cbCallback(cbValue) : cbValue}
      </CB.Box>
    </>
  );
};
