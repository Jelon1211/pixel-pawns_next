import * as Yup from "yup";

export const CreateCharacterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(3),
});
