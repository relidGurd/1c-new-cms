module.exports = {
  routes: [
    {
      method: "GET",
      path: "/category/:slug",
      handler: "api::category.category.findBySlug",
    },
  ],
};
