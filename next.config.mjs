/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static export by setting up the trailingSlash option (optional)
    exportTrailingSlash: true,
    
    // Optionally disable image optimization if you don't want Next.js to optimize images during static export
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;
  