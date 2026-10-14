"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import styles from "./RadialSocialMenu.module.css";
import { MessageCircle } from "lucide-react";

export interface SocialItem {
  href: string;
  label: string;
  color: string;
  iconSrc: string;
}

interface Props {
  items: SocialItem[];
  radius?: number;
  size?: number;
  dir?: "ltr" | "rtl";
}

export default function RadialSocialMenu({ items, radius = 85, size = 48, dir = "ltr" }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.root}
      style={{ "--rsm-size": `${size}px` } as CSSProperties}
    >
      {items.map((item, i) => {
        const ltrAngle = ((Math.PI * 1) / items.length) * i - Math.PI * -4/5;
        const angle = dir === "rtl" ? Math.PI - ltrAngle : ltrAngle;
        const x = open ? +(radius * Math.cos(angle)).toFixed(2) : 0;
        const y = open ? +(radius * Math.sin(angle)).toFixed(2) : 0;

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            tabIndex={open ? 0 : -1}
            className={styles.item}
            style={{
              backgroundColor: item.color,
              transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0)`,
              transitionDuration: `${180 + i * 100}ms`,
              transitionTimingFunction: open
                ? "cubic-bezier(0.935, 0, 0.34, 1.33)"
                : "ease-in",
            }}
          >
            <Image src={item.iconSrc} alt="" width={22} height={22} />
          </a>
        );
      })}

      <button
        className={` ${styles.toggle} ${open ? styles.toggleOpen : ""}`}
        onClick={() => setOpen((v) => !v)}
        style={{ backgroundColor: open ? "#00A99D" : "#07384D" }}
        aria-expanded={open}
        aria-label={open ? "Close social links" : "Open social links"}
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
