/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: '/',
    src: '/dist',
  },
  alias: {
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    [
      'snowpack-sass-compiler',
      {
        includePaths: ['./src']
      },
    ],
    '@snowpack/plugin-babel',
    "@snowpack/plugin-postcss"
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    baseUrl: "/build"
  },
};
