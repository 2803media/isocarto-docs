import React from "react";
import Category from "@theme-original/DocSidebarItem/Category";
import { Icon } from "@iconify/react";

// Fonction pour extraire l'icône du label
function extractIcon(label) {
  if (typeof label === "string") {
    const match = label.match(/^icon:(\S+)\s+(.+)$/);
    if (match) {
      return { icon: match[1], text: match[2] };
    }
  }
  return { icon: null, text: label };
}

export default function CategoryWrapper(props) {
  const { item } = props;
  const { icon, text } = extractIcon(item.label);

  // Si pas d'icône, retourne le composant original
  if (!icon) {
    return <Category {...props} />;
  }

  // Si icône détectée, modifie le label
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

  return <Category {...props} item={modifiedItem} />;
}
