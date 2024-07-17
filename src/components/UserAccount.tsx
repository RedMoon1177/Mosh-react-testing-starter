import { User } from "../entities";

const UserAccount = ({ user }: { user: User }) => {
  return (
    <>
      <h2>User Profile</h2>
      {user.isAdmin && <button>Edit</button>}
      <div>
        <strong>Name:</strong> {user.name}
      </div>
    </>
  );
};

export default UserAccount;


// Syntax lesson learnt:
// ({ user }: { user: User }):

// This part is the TypeScript type annotation for the function parameter. 
// It uses destructuring to extract the user property from the passed object.
// The parameter is annotated with { user: User }, 
// which means the function expects an object with a user property of type User.