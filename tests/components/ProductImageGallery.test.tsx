import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

// my solution
// describe("ProductImageGallery", () => {
//   it("should render ProductImageGallery if image urls are available", () => {
//     const imageUrls: string[] = ["url1", "url2"];

//     render(<ProductImageGallery imageUrls={imageUrls} />);

//     imageUrls.forEach((imageUrl) => {
//       const img = screen.getByRole("listitem", { key: imageUrl });
//       expect(img).toBeInTheDocument();
//     });
//   });
// });

// Mosh solution
describe("ProductImageGallery", () => {
  it("should render nothing if given an empty array", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render a list of images", () => {
    const imageUrls = ["url1", "url2"];

    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
