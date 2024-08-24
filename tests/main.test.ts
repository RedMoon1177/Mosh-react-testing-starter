import { it, describe } from "vitest";
import { db } from "./mocks/db";

describe("group", () => {
  // it("should", async () => {
  //   const response = await fetch("/categories");
  //   const data = await response.json();
  //   // console.log(data);
  //   expect(data).toHaveLength(3);
  // });

  // it("should", () => {
  //   console.log({
  //     name: faker.commerce.productName(),
  //     price: faker.commerce.price({ min: 1, max: 100 }),
  //   });
  // });

  it("should", () => {
    // const product = db.product.create(); // create a random product
    const product = db.product.create({ name: "Apple" });
    // console.log(db.product.getAll());
    // console.log(db.product.count());
    console.log(db.product.delete({ where: { id: { equals: product.id } } }));
  });
});
