// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/n3clinicas',     // URL que o usuário acessa
        destination: 'https://inlead.digital/n3clinica/', // URL de destino
        permanent: true,           // true = redirecionamento 301, false = 302
      },
    ];
  },
};

module.exports = nextConfig;
