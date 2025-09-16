// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/n3clinicas',   
        destination: 'https://inlead.digital/n3clinica/', 
        permanent: true,       
      },
    ];
  },
};

module.exports = nextConfig;
