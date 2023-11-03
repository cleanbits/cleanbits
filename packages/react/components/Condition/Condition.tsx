import { ReactNode } from "react";
import { CB } from "..";

type ConditionGroupProps = {
  cbAs?: any;
  cbHidden?: boolean;
  cbIf?: boolean;
  children?: ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type ConditionProps = {
  cbAs?: any;
  cbHidden?: boolean;
  cbIf?: boolean;
  cbElse?: boolean;
  cbElseIf?: boolean;
  children?: ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Group = ({
  cbAs,
  cbHidden,
  children,
  cbIf,
  ...props
}: ConditionGroupProps) => {
  let renderChildren = children;

  if (typeof cbIf === "boolean" && !cbIf) {
    return;
  }

  if (
    Array.isArray(children) &&
    children.length > 0 &&
    children[0].type.name === "Condition"
  ) {
    renderChildren = children.filter((child) => {
      if (child.props.cbIf || child.props.cbElseIf || child.props.cbElse) {
        return child;
      }
    })?.[0];
  }

  return (
    <CB.Box cbAs={cbAs} cbHidden={cbHidden} {...props}>
      {renderChildren}
    </CB.Box>
  );
};

export const Condition = ({
  cbAs,
  cbHidden,
  children,
  cbIf,
  cbElseIf,
  cbElse,
  ...props
}: ConditionProps) => {
  if (cbIf || cbElseIf || cbElse) {
    return (
      <CB.Box cbAs={cbAs} cbHidden={cbHidden} {...props}>
        {children}
      </CB.Box>
    );
  }
};

Condition.Group = Group;
