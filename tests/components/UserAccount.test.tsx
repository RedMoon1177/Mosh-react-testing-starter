import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "@auth0/auth0-react";

// my solution
// describe("UserAccount", () => {
//   it("should render UserAccount with user's name and without edit button if the given user is not admin!", () => {
//     const user: User = {
//       id: 1,
//       name: "Annie",
//       isAdmin: false
//     };

//     render(<UserAccount user={ user }/>);

//     const name = screen.getByText('Annie');
//     expect(name).toBeInTheDocument();

//     const button = screen.getByRole('button');
//     expect(button).toBe(false); (????????)
//   });
// });

// Mosh solution
describe("UserAccount", () => {
  it("should render user name", () => {
    const user: User = { id: 1, name: "Mosh" };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render edit button if user is admin", () => {
    const user: User = { id: 1, name: "Mosh", isAdmin: true };

    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("should not render edit button if user is not admin", () => {
    const user: User = { id: 1, name: "Mosh", isAdmin: false };

    render(<UserAccount user={user} />);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
