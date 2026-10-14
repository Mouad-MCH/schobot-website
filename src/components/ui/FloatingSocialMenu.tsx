"use client";

import RadialSocialMenu from "./RadialSocialMenu";
import type { SocialItem } from "./RadialSocialMenu";

const socialItems: SocialItem[] = [
  { href: "#", label: "Facebook",  color: "#1877F2", iconSrc: "/images/icons/social-media/facebook.png" },
  { href: "#", label: "Instagram", color: "#E4405F", iconSrc: "/images/icons/social-media/instagram.png" },
  { href: "#", label: "TikTok",    color: "#010101", iconSrc: "/images/icons/social-media/tik-tok.png" },
  { href: "#", label: "WhatsApp",  color: "#25D366", iconSrc: "/images/icons/social-media/social.png" },
];

export default function FloatingSocialMenu() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "3rem",
        right: "6rem",
        zIndex: 200,
      }}
    >
      <RadialSocialMenu items={socialItems} radius={85} size={48} />
    </div>
  );
}
