import React from "react";

export type IconName =
  | "call"
  | "search"
  | "whatsapp"
  | "tune"
  | "close"
  | "verified"
  | "storefront"
  | "camera"
  | "open_in_new"
  | "inventory"
  | "payments"
  | "architecture"
  | "shipping"
  | "shield"
  | "zoom_in"
  | "arrow_back"
  | "location"
  | "schedule"
  | "chevron_right"
  | "grid"
  | "check"
  | "copy"
  | "info";

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function Icon({ name, className = "w-5 h-5", size }: IconProps) {
  const style = size ? { width: size, height: size } : undefined;

  switch (name) {
    case "whatsapp":
      return (
        <svg
          style={style}
          className={`fill-current ${className}`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.12c-.24.67-1.39 1.29-1.92 1.37-.5.08-1.14.12-3.32-.78-2.61-1.08-4.28-3.76-4.41-3.93-.13-.18-1.06-1.41-1.06-2.69 0-1.28.67-1.91.91-2.17.24-.26.53-.32.71-.32.18 0 .35 0 .5.01.16.01.37-.06.58.44.22.53.75 1.83.82 1.96.07.13.11.29.02.47-.09.18-.13.29-.26.44-.13.16-.28.35-.4.47-.13.13-.27.28-.12.54.16.26.69 1.14 1.48 1.84 1.02.91 1.88 1.19 2.15 1.32.26.13.42.11.58-.07.16-.18.67-.78.85-1.05.18-.27.35-.22.59-.13.24.09 1.5.71 1.76.84.26.13.44.2.5.31.07.11.07.65-.17 1.32z" />
        </svg>
      );

    case "call":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );

    case "search":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );

    case "tune":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      );

    case "close":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );

    case "verified":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 3.09L19.46 6l.77 4.29 3.77 2.2-1.95 3.93.77 4.29-4.29.77-2.2 3.77-3.93-1.95L8 24.25l-.77-4.29-4.29-.77 1.95-3.93L1.12 11l3.77-2.2.77-4.29L9.95 3.74 12 2z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "storefront":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
          <path d="M2 7h20v5a3 3 0 0 1-5 2.24A3 3 0 0 1 12 12a3 3 0 0 1-5 2.24A3 3 0 0 1 2 12V7z" />
        </svg>
      );

    case "camera":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );

    case "open_in_new":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      );

    case "inventory":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="21 8 21 21 3 21 3 8" />
          <rect x="1" y="3" width="22" height="5" />
          <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
      );

    case "payments":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      );

    case "architecture":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <path d="m5 22 5-11" />
          <path d="m19 22-5-11" />
          <path d="M7 17h10" />
        </svg>
      );

    case "shipping":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );

    case "shield":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "zoom_in":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      );

    case "arrow_back":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      );

    case "location":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );

    case "schedule":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );

    case "chevron_right":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      );

    case "grid":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      );

    case "check":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );

    case "copy":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      );

    case "info":
      return (
        <svg
          style={style}
          className={`fill-none stroke-current stroke-2 ${className}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );

    default:
      return null;
  }
}

