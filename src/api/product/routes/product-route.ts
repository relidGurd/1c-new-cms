module.exports = {
  routes: [
    {
      method: "GET",
      path: "/product/:slug",
      handler: "api::product.product.findBySlug",
    },
  ],
};
