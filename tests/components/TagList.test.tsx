import { render, screen } from "@testing-library/react";
import TagList from "../../src/components/TagList";

describe("TagList", () => {
  it("should render tags", async () => {
    render(<TagList />);

    // approach I: using waitFor()
    // await waitFor(() => {
    //   const listitems = screen.getAllByRole("listitem");
    //   expect(listitems.length).toBeGreaterThan(0);
    // });

    // approach II: using await and findAllByRole()
    const listitems = await screen.findAllByRole("listitem");
    expect(listitems.length).toBeGreaterThan(0);
  });
});
