/**
 * Custom image loader for Next.js static export.
 * Formats Cloudinary URLs with width, auto format, and auto quality.
 * Falls back to unoptimized pass-through for non-Cloudinary URLs.
 */
export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  if (!src) return "";

  // Check if the URL is hosted on Cloudinary
  if (src.includes("res.cloudinary.com")) {
    const q = quality || "auto";
    const params = `f_auto,c_limit,w_${width},q_${q}`;

    if (src.includes("/image/upload/")) {
      return src.replace("/image/upload/", `/image/upload/${params}/`);
    }
  }

  // Non-Cloudinary or already formatted images fall back to unoptimized original URL
  return src;
}

