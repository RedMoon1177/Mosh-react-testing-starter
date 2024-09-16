import { factory, manyOf, oneOf, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

export const db = factory({
  category: {
    id: primaryKey(faker.number.int),
    name: faker.commerce.department,
    products: manyOf("product"), // entity relationship
  },
  product: {
    id: primaryKey(faker.number.int),
    name: faker.commerce.productName,
    price: () => faker.number.int({ min: 1, max: 100 }), // this requires a getter function, that's why we use an arrow func here!
    categoryId: faker.number.int,
    category: oneOf("category"), // entity relationship
  },
});

// helper functions

export const getProductsByCategory = (categoryId: number) =>
  db.product.findMany({
    where: {
      categoryId: { equals: categoryId },
    },
  });
