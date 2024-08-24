import { render, screen } from "@testing-library/react";
import ProductList from "../../src/components/ProductList";
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";
import { db } from "../mocks/db";

describe("ProductList", () => {
  // create an array to remember the product test data so that after the tests, we will remove them!
  const productIds: number[] = [];

  beforeAll(() => {
    // create the test data
    [1, 2, 3].forEach(() => {
      const product = db.product.create();
      productIds.push(product.id);
    });
  });

  afterAll(() => {
    // delete the test data
    db.product.deleteMany({ where: { id: { in: productIds } } });
  });

  it("should render the List of products", async () => {
    render(<ProductList />);

    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBeGreaterThan(0);
  });

  it("should render np products available if no product is found", async () => {
    // override the request sent to the mocked API endpoint in order to get back no data as expected
    server.use(http.get("/products", () => HttpResponse.json([])));

    render(<ProductList />);

    const message = await screen.findByText(/no products/i);
    expect(message).toBeInTheDocument();
  });
});
