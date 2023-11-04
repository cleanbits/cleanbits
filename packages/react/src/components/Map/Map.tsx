import React from "react";
import { CB } from "..";

type MapProps = {
  cbAs?: any;
  cbHidden?: boolean;
  cbList: any[];
  cbItem?: any;
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
          (item, index, list) =>
            cbItem && cbItem(cbCallback ? cbCallback(item) : item, index, list),
        )}
      </CB.Box>
    );
  }

  if (Array.isArray(cbItem)) {
    if (cbItem.length > 2) {
      return (
        <CB.Box cbAs={cbAs} cbHidden={cbHidden} {...props}>
          {filteredList.map((...args) => (
            <CB.Box
              cbAs={[
                cbItem[0],
                {
                  [cbItem[2]]: args[0],
                  index: args[1],
                  list: args[2],
                  ...cbItem[1],
                },
              ]}
              key={args[1]}
            />
          ))}
        </CB.Box>
      );
    }

    return (
      <CB.Box cbAs={cbAs} cbHidden={cbHidden} {...props}>
        {filteredList.map((...args) => (
          <CB.Box
            cbAs={[
              cbItem[0],
              {
                ...args[0],
                index: args[1],
                list: args[2],
                ...cbItem[1],
              },
            ]}
            key={args[1]}
          />
        ))}
      </CB.Box>
    );
  }

  return (
    <CB.Box cbAs={cbAs} cbHidden={cbHidden} {...props}>
      {filteredList.map((...args) => (
        <CB.Box
          cbAs={[cbItem, { ...args[0], index: args[1], list: args[2] }]}
          key={args[1]}
        />
      ))}
    </CB.Box>
  );
};
