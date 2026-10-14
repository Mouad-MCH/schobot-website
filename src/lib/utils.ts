export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

import type { SocialItem } from "@/components/ui/RadialSocialMenu";

export const socialItems: SocialItem[] = [
  { href: "#", label: "Facebook",  color: "#1877F2", iconSrc: "/images/icons/social-media/facebook.png" },
  { href: "#", label: "Instagram", color: "#E4405F", iconSrc: "/images/icons/social-media/instagram.png" },
  { href: "#", label: "TikTok",    color: "#010101", iconSrc: "/images/icons/social-media/tik-tok.png" },
  { href: "#", label: "WhatsApp",  color: "#25D366", iconSrc: "/images/icons/social-media/social.png" },
];
