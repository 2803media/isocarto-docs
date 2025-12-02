import React from "react";
import Html from "@theme-original/DocSidebarItem/Html";
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

export default function HtmlWrapper(props) {
  const { item } = props;
  const { icon, text } = extractIcon(item.value);

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
        <span>{text}</span>
      </span>
    ),
  };

  return <Html {...props} item={modifiedItem} />;
}
