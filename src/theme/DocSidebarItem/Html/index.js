import React from "react";
import Html from "@theme-original/DocSidebarItem/Html";
import { Icon } from "@iconify/react";

export default function HtmlWrapper(props) {
  const { item } = props;

  // On récupère l'icône depuis customProps
  const icon = item.customProps?.icon;

  if (!icon) {
    return <Html {...props} />;
  }

  const modifiedItem = {
    ...item,
    value: (
      <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Icon
          icon={icon}
          style={{
            width: "1.25rem",
            height: "1.25rem",
            flexShrink: 0,
          }}
        />
        <span>{item.value}</span>
      </span>
    ),
  };

  return <Html {...props} item={modifiedItem} />;
}
