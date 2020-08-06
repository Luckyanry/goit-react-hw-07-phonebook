import { createReducer } from "@reduxjs/toolkit";
import {
  addContactSeccess,
  getContactsSeccess,
  deleteContactSeccess,
  handleFilter,
} from "./contactAction";

const removeContact = (state, { payload }) =>
  state.filter((contact) => contact.id !== payload);

export const items = createReducer([], {
  [getContactsSeccess]: (state, { payload }) => payload,
  [addContactSeccess]: (state, { payload }) => [...state, payload],
  [deleteContactSeccess]: removeContact,
});

export const filter = createReducer("", {
  [handleFilter]: (state, { payload }) => (state = payload),
});
