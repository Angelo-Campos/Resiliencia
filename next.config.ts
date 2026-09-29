import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  basePath: '/Resiliencia', 
  images: {
    unoptimized: true, 
    remotePatterns: [
      { protocol: "https", hostname: "static.cegal.es" },
      { protocol: "https", hostname: "images.cdn2.buscalibre.com" },
      { protocol: "https", hostname: "librosparaemprendedores.net" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "www.penguinlibros.com" },
      { protocol: "https", hostname: "images4.penguinrandomhouse.com" },
    ],
  },
};

export default nextConfig;
