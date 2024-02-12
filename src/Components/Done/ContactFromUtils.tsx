import * as Yup from "yup";


export interface InitialValuess {
    name: string,
    email: string,
    message: string,
  }

export const validationSchema = Yup.object().shape({
    // name: Yup.string().required("Required"),
    // email: Yup.string().required("Required"),
});
  
export const InitialValues :InitialValuess = {
    name: "",
    email: "",
    message: "",
}