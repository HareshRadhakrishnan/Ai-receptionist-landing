/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` emits plain static files to ./out
  // Deployable to Vercel, Netlify, S3, or any static host.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
