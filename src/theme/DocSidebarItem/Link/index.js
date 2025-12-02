import React from "react";
import Link from "@theme-original/DocSidebarItem/Link";
import { Icon } from "@iconify/react";

function extractIcon(label) {
  if (typeof label === "string") {
    const match = label.match(/^icon:(\S+)\s+(.+)$/);
    if (match) {
      return { icon: match[1], text: match[2] };
    }
  }
  return { icon: null, text: label };
}

export default function LinkWrapper(props) {
  const { item } = props;
  const { icon, text } = extractIcon(item.label);

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
        <span>{text}</span>
      </span>
    ),
  };

  return <Link {...props} item={modifiedItem} />;
}
