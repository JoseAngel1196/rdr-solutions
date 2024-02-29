import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name too short")
    .max(50, "Name too long")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("Phone number is required"),
  message: Yup.string()
    .min(5, "Too short message")
    .max(1000, "Too long message")
    .required("Message is required"),
});
