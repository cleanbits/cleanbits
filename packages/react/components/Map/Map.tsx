import React from "react";
import { CB } from "..";

type MapProps = {
  cbAs?: any;
  cbHidden?: boolean;
  cbList: any[];
  cbItem?: (value: any, index: number) => any | React.ReactNode;
  cbFilter?: (item: any) => boolean;
  cbCallback?: (item: any, index?: number) => any;
  children?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Map = ({
  cbAs,
  cbList,
  cbItem,
  cbFilter,
  cbCallback,
  cbHidden,
  ...props
}: MapProps) => {
  if (!cbList.length) return;

  const filteredList = cbFilter ? cbList.filter(cbFilter) : cbList;

  if (!filteredList.length) return;

  if (cbItem?.name == "cbItem") {
    return (
      <CB.Box cbAs={cbAs} cbHidden={cbHidden} {...props}>
        {filteredList.map(
          (item, index) =>
            cbItem && cbItem(cbCallback ? cbCallback(item) : item, index),
        )}
      </CB.Box>
    );
  }

  return (
    <CB.Box cbAs={cbAs} cbHidden={cbHidden} {...props}>
      {filteredList.map((item, index) => (
        <CB.Box cbAs={[cbItem, { item, index }]} key={index}></CB.Box>
      ))}
    </CB.Box>
  );
};
