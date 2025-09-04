/**
 * subcategory controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::subcategory.subcategory",
  ({ strapi }) => ({
    async findBySlug(ctx) {
      const { slug } = ctx.params;
      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const post = await strapi
        .documents("api::subcategory.subcategory")
        .findMany(query);
      const schema = strapi.getModel("api::subcategory.subcategory");

      const sanitizedEntity = await strapi.contentAPI.sanitize.output(
        post,
        schema
      );

      return this.transformResponse(sanitizedEntity[0]);
    },
  })
);
