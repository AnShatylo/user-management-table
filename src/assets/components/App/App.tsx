import UserTable from "../UserTable/UserTable";
import { fetchUsers } from "../../redux/userOperations";
import { useAppDispatch } from "../../redux/hooks";
import { useEffect } from "react";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <UserTable/>;
}
