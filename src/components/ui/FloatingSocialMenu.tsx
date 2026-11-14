"use client";

import RadialSocialMenu from "./RadialSocialMenu";
import type { SocialItem } from "./RadialSocialMenu";
import styles from "./FloatingSocialMenu.module.css";

const socialItems: SocialItem[] = [
  { href: "https://youtube.com/@schobotofficialchannel", label: "YouTube", color: "#FF0000", iconSrc: "/images/icons/social-media/youtube.svg" },
  { href: "https://instagram.com/bazacademy", label: "Instagram", color: "#E4405F", iconSrc: "/images/icons/social-media/instagram.png" },
  { href: "https://tiktok.com/@baz.academy.schob", label: "TikTok", color: "#010101", iconSrc: "/images/icons/social-media/tik-tok.png" },
  { href: "https://linkedin.com/in/baz-academy-schobot-3a0289423", label: "LinkedIn", color: "#0A66C2", iconSrc: "/images/icons/social-media/linkedin.svg" },
  { href: "https://wa.me/201055428293", label: "WhatsApp", color: "#25D366", iconSrc: "/images/icons/social-media/social.png" },
];

interface Props {
  dir?: "ltr" | "rtl";
}

export default function FloatingSocialMenu({ dir = "ltr" }: Props) {
  return (
    <div className={styles.wrapper}>
      <RadialSocialMenu items={socialItems} radius={85} size={48} dir={dir} />
    </div>
  );
}
