import { useEffect, useState } from "react";
import style from "./about.module.scss";

interface Icon {
  image: string;
  alt: string;
}

export default function HomeSection() {
  const [icons, setIcons] = useState<Icon[] | null>(null);

  useEffect(() => {
    fetch("/assets/jsons/icons.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIcons(data["allIcons"]);
      });
  }, []);

  if (!icons) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      {icons.map((icon, index) => {
        return <img key={index} src={`/assets/SkillsIcons/${icon.image}.png`} alt={icon.alt} />;
      })}
    </div>
  );
}


