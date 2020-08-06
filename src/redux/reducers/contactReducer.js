import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  handleFilter,
} from "../actions/contactAction";

const removeContact = (state, { payload }) =>
  state.filter((contact) => contact.id !== payload);

export const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: removeContact,
});

export const filter = createReducer("", {
  [handleFilter]: (state, { payload }) => (state = payload),
});
