import css from "./UserTable.module.css";

import SearchInputs from "../SearchInputs/SearchInputs";
import { useAppSelector } from "../../redux/hooks";
import { selectedUsers } from "../../redux/usersSlice";

const UserTable = () => {
  const filteredUsers = useAppSelector(selectedUsers);
  return (
    <div className={css.userTableWrap}>
      <table className={css.userTable}>
        <thead>
          <tr className={css.tableHeader}>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          <SearchInputs />
        </thead>
        <tbody className={css.userTableBody}>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className={css.userTableNotFound}>
                User not found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
