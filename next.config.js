module.exports = {
  basePath: '/open-academie',
  assetPrefix: '/open-academie/',
  imagesPublicPath: '/open-academie/_next/static/images',
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/cedisco": { page: "/cedisco" },
      "/contact": { page: "/contact" },
      "/emaintenance": { page: "/emaintenance" },
      "/gemasco": { page: "/gemasco" },
      "/mobilisco": { page: "/mobilisco" },
      "/trombinosco": { page: "/trombinosco" },
      "/opencartecomptable": { page: "/opencartecomptable" },
      "/outils": { page: "/outils" },
      "/projet": { page: "/projet" },
      "/votre-projet": { page: "/votre-projet" },
    }
  }
}
