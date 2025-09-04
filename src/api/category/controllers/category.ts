/**
 * category controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async findBySlug(ctx) {
      const { slug } = ctx.params;
      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const post = await strapi
        .documents("api::category.category")
        .findMany(query);
      const schema = strapi.getModel("api::category.category");

      const sanitizedEntity = await strapi.contentAPI.sanitize.output(
        post,
        schema
      );

      return this.transformResponse(sanitizedEntity[0]);
    },
  })
);
