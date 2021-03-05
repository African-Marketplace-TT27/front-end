import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(4, 'Name must be at least 4 characters long'),
  email: Yup.string()
  .required('Email is required')
  .min(4, 'Email must be at least 4 characters long'),
  password: Yup
    .string()
    .required("Please enter your password")
    .min(4, 'password must be at least 4 characters long'),
  pwconfirm: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    )
  }),
  country_id: Yup
    .string(),
  terms: Yup.boolean().oneOf([true], "Please Check Terms of Service"),

});
