/**
 * product controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async findBySlug(ctx) {
      const { slug } = ctx.params;
      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const post = await strapi
        .documents("api::product.product")
        .findMany(query);
      const schema = strapi.getModel("api::product.product");

      const sanitizedEntity = await strapi.contentAPI.sanitize.output(
        post,
        schema
      );

      return this.transformResponse(sanitizedEntity[0]);
    },
  })
);
