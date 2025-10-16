import css from "./SearchInputs.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import {
  changeFilter,
  selectFilterEmail,
  selectFilterName,
  selectFilterPhone,
  selectFilterUsername,
} from "../../redux/userFilterSlice";

import { FilterField } from "../App/App.types";

export default function SearchInputs() {
  const dispatch = useAppDispatch();

  const filterName = useAppSelector(selectFilterName);
  const filterUsername = useAppSelector(selectFilterUsername);
  const filterEmail = useAppSelector(selectFilterEmail);
  const filterPhone = useAppSelector(selectFilterPhone);
  const handleFilter = (field: FilterField, value: string) => {
    dispatch(changeFilter({ [field]: value }));
  };
  return (
    <tr className={css.tableSearch}>
      <th></th>
      <th>
        <input
          type="text"
          className={css.input}
          value={filterName}
          onChange={(e) => handleFilter("name", e.target.value)}
          placeholder="Filter by name..."
        />
      </th>
      <th>
        <input
          type="text"
          className={css.input}
          value={filterUsername}
          onChange={(e) => handleFilter("username", e.target.value)}
          placeholder="Filter by username..."
        />
      </th>
      <th>
        <input
          type="text"
          className={css.input}
          value={filterEmail}
          onChange={(e) => handleFilter("email", e.target.value)}
          placeholder="Filter by email..."
        />
      </th>
      <th>
        <input
          type="text"
          className={css.input}
          value={filterPhone}
          onChange={(e) => handleFilter("phone", e.target.value)}
          placeholder="Filter by phone..."
        />
      </th>
    </tr>
  );
}
