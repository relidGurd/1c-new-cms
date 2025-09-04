module.exports = {
  routes: [
    {
      method: "GET",
      path: "/subcategory/:slug",
      handler: "api::subcategory.subcategory.findBySlug",
    },
  ],
};
