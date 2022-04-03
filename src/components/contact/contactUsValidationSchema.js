import * as Yup from "yup";

const ContactUsSchema = Yup.object().shape({
  clientName: Yup.string().required("Name is required"),
  clientEmail: Yup.string().required("Email is required"),
  message: Yup.string().trim().required("Message is required"),
});

export { ContactUsSchema };
