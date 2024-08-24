import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

export const db = factory({
  product: {
    id: primaryKey(faker.number.int),
    name: faker.commerce.productName,
    price: () => faker.number.int({ min: 1, max: 100 }), // this requires a getter function, that's why we use an arrow func here!
  },
});
