/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http', // Or 'https' if your localhost uses HTTPS
            hostname: 'localhost',
            port: '1337', // Or the port your local server runs on (if not 3000)
            pathname: '/**', // Allows any path from this hostname
          }
        ],
        domains: ['localhost', '127.0.0.1', 'youtube.com', 'img.youtube.com'],
        unoptimized: true
      },
};

export default nextConfig;
