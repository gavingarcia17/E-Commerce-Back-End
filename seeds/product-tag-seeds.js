import { ProductTag } from '../models/index.js';

const productTagData = [
  {
    product_id: 1,
    tag_id: 6,
  },
  {
    product_id: 1,
    tag_id: 7,
  },
  {
    product_id: 1,
    tag_id: 8,
  },
  {
    product_id: 2,
    tag_id: 6,
  },
  // Add more product tag data here
];

const seedProductTags = async () => {
  await ProductTag.bulkCreate(productTagData);
};

export default seedProductTags;
