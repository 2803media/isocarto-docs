import React from "react";
import Category from "@theme-original/DocSidebarItem/Category";
import { Icon } from "@iconify/react";
import { addCollection } from "@iconify/react";
import heroicons from "@iconify/json/json/heroicons.json";

// Charger les icônes Heroicons en local (pas d'appel API)
addCollection(heroicons);

export default function CategoryWrapper(props) {
  const { item } = props;

  // On récupère l'icône depuis customProps au lieu de parser le label
  const icon = item.customProps?.icon;

  // Si pas d'icône, retourne le composant original
  if (!icon) {
    return <Category {...props} />;
  }

  // Si icône détectée, on modifie l'affichage du label
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

  return <Category {...props} item={modifiedItem} />;
}
