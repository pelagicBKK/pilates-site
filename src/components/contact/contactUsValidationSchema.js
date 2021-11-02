import * as Yup from "yup";

const ContactUsSchema = Yup.object().shape({
  from: Yup.string().required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  body: Yup.string().trim().required("Body is required"),
});

export { ContactUsSchema };
