import { useParams } from "react-router-dom";
import EditUserForm from "./EditUserForm";

import { useGetUsersQuery } from "./usersApiSlice";

const EditUser = () => {
  const { id } = useParams();

  const { user } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      user: data?.entities[id],
    }),
  });

  return <>{user ? <EditUserForm user={user} /> : <p>Loading...</p>}</>;
};

export default EditUser;
