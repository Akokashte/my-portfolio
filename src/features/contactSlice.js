import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { notifyError, notifySuccess } from "../utils/toastfy/Notification";

const initialState = {
    contactData: {
        fname: "",
        surname: "",
        email: "",
        phoneNumber: "",
        message: ""
    },
    loading: false,
}

const validateContactData = (contactFormData) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Mobile number regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email regex
    const fnameRegex = /^[A-Za-z\s]+$/

    if (!contactFormData.fname || !fnameRegex.test(contactFormData.fname)) {
        if (!contactFormData.fname) {
            notifyError('fname is required !')
        }
        else {
            notifyError('Please enter a valid name')
        }
        return false;
    }
    else if (!contactFormData.surname || !fnameRegex.test(contactFormData.surname)) {
        if (!contactFormData.surname) {
            notifyError('surname is required !')
        }
        else {
            notifyError('Please enter a valid surname')
        }
        return false
    }
    else if (contactFormData.phoneNumber.length != 10 || !phoneRegex.test(contactFormData.phoneNumber)) {
        if (!contactFormData.phoneNumber) {
            notifyError('phone number is required !')
        }
        else {
            notifyError('Please enter a valid mobile number.')
        }
        return false
    }
    else if (!contactFormData.email || !emailRegex.test(contactFormData.email)) {
        if (!contactFormData.email) {
            notifyError('email is required !')
        }
        else {
            notifyError('Please enter a valid email address.')
        }
        return false
    }
    else if (!contactFormData.message) {
        notifyError('Message is required.')
        return false
    }
    return true;
}

const contactSlice = new createSlice({
    name: "contact",
    initialState,
    reducers: {
        setContactData: (state, action) => {
            state.contactData = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    }
})


// Async action
export const callContactApi = (contactFormData) => async (dispatch) => {
    if (!validateContactData(contactFormData)) {
        return; // Stop execution if validation fails
    }
    dispatch(setLoading(true));
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/contact/send/contact/email`, contactFormData); // Replace with your actual API endpoint

        if (response.data.data.isContactEmailSent) {
            dispatch(setContactData({
                fname: "",
                surname: "",
                email: "",
                phoneNumber: "",
                message: ""
            }))
            notifySuccess("Contact form submitted successfully!");
        }
    } catch (error) {
        notifyError("Something went wrong while submitting the contact form!");
    } finally {
        dispatch(setLoading(false));
    }
};

export const { setContactData, setLoading, setError } = contactSlice.actions;
export default contactSlice.reducer;

