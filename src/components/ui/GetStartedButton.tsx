"use client";

interface GetStartedButtonProps {
  label: string;
  className?: string;
}

export default function GetStartedButton({ label, className = "btn-primary cta-btn" }: GetStartedButtonProps) {
  function open() {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  }

  return (
    <button type="button" className={className} onClick={open}>
      {label}
    </button>
  );
}
