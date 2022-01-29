export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "classroom",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
      },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
      },
      {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
      },
      { src: "assets/js/stisla.js" },
      { src: "assets/js/scripts.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/style.css", "~/assets/css/components.css"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // "@nuxtjs/auth-next",
  ],

  auth: {},
  // set middleware auth

  // router: {
  //   middleware: ["auth"],
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
