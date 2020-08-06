import axios from "axios";
import {
  addContactRequest,
  addContactSeccess,
  addContactError,
  getContactsRequest,
  getContactsSeccess,
  getContactsError,
  deleteContactRequest,
  deleteContactSeccess,
  deleteContactError,
} from "./contactAction";

axios.defaults.baseURL = "http://localhost:2000";

export const getContacts = () => async (dispatch) => {
  dispatch(getContactsRequest());
  try {
    const result = await axios.get("/contacts");
    dispatch(getContactsSeccess(result.data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const addContact = (name, number) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const result = await axios.post("/contacts", {
      name,
      number,
    });
    dispatch(addContactSeccess(result.data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSeccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
