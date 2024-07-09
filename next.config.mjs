const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    domains: [],
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isProd ? "/nxpc.live-vol.70" : "",
  assetPrefix: isProd ? "/nxpc.live-vol.70/" : "",
};

export default nextConfig;
