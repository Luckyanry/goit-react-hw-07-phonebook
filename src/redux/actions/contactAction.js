import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CONTACT_FILTER,
} from "../constants/contactConstants";

export const addContact = createAction(ADD_CONTACT, (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
export const deleteContact = createAction(DELETE_CONTACT);
export const handleFilter = createAction(CONTACT_FILTER, ({ target }) => ({
  payload: target.value,
}));
