import React from "react";
import Link from "@theme-original/DocSidebarItem/Link";
import { Icon } from "@iconify/react";

export default function LinkWrapper(props) {
  const { item } = props;

  // On récupère l'icône depuis customProps
  const icon = item.customProps?.icon;

  if (!icon) {
    return <Link {...props} />;
  }

  const modifiedItem = {
    ...item,
    label: (
      <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Icon
          icon={icon}
          style={{
            width: "1.25rem",
            height: "1.25rem",
            flexShrink: 0,
          }}
        />
        <span>{item.label}</span>
      </span>
    ),
  };

  return <Link {...props} item={modifiedItem} />;
}
