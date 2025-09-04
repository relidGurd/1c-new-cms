import type { Schema, Struct } from '@strapi/strapi';

export interface AllTabDescription extends Struct.ComponentSchema {
  collectionName: 'components_all_tab_descriptions';
  info: {
    displayName: 'tab-description';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
  };
}

export interface AllTabProductVariants extends Struct.ComponentSchema {
  collectionName: 'components_all_tab_product_variants';
  info: {
    displayName: 'tab-product-variants';
  };
  attributes: {
    variants: Schema.Attribute.Component<'pieces.product-variants', true>;
  };
}

export interface AllTabRelatedNews extends Struct.ComponentSchema {
  collectionName: 'components_all_tab_related_news';
  info: {
    displayName: 'tab-related-news';
    icon: 'book';
  };
  attributes: {
    related_news: Schema.Attribute.JSON;
  };
}

export interface AllTabRelatedProducts extends Struct.ComponentSchema {
  collectionName: 'components_all_tab_related_products';
  info: {
    displayName: 'tab-related-products';
  };
  attributes: {
    realted_ids: Schema.Attribute.JSON;
  };
}

export interface PiecesProductVariants extends Struct.ComponentSchema {
  collectionName: 'components_pieces_product_variants';
  info: {
    displayName: 'product-variants';
  };
  attributes: {
    description: Schema.Attribute.Text;
    price: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'all.tab-description': AllTabDescription;
      'all.tab-product-variants': AllTabProductVariants;
      'all.tab-related-news': AllTabRelatedNews;
      'all.tab-related-products': AllTabRelatedProducts;
      'pieces.product-variants': PiecesProductVariants;
    }
  }
}
