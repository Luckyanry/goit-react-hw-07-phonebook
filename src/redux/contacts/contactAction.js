import { createAction } from "@reduxjs/toolkit";

export const getContactsRequest = createAction("@contact/getRequest");
export const getContactsSeccess = createAction("@contact/getSeccess");
export const getContactsError = createAction("@contact/getError");

export const addContactRequest = createAction("@contact/addRequest");
export const addContactSeccess = createAction("@contact/addSeccess");
export const addContactError = createAction("@contact/addError");

export const deleteContactRequest = createAction("@contact/deleteRequest");
export const deleteContactSeccess = createAction("@contact/deleteSeccess");
export const deleteContactError = createAction("@contact/deleteError");

export const handleFilter = createAction("@contact/filter", ({ target }) => ({
  payload: target.value,
}));

// export const addContact = createAction(ADD_CONTACT, (name, number) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

// export const deleteContact = createAction(DELETE_CONTACT);
