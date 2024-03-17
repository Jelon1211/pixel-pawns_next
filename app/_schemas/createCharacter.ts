import * as Yup from "yup";

export const CreateCharacterSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  race: Yup.string()
    .required("Race is required")
    .min(3, "Race must be at least 3 characters"),
  weapon: Yup.string()
    .required("Weapon is required")
    .min(3, "Weapon must be at least 3 characters"),
  attributes: Yup.string()
    .required("Attributes is required")
    .min(3, "Attributes must be at least 3 characters"),
});
