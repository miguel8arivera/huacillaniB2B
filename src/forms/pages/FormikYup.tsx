import { useFormik } from 'formik';

import * as Yup from 'yup';
import '../../pages/styles/formStyle.css';

export default function FormikYup() {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required('Required').max(15, 'Must be 15 characters or less'),
      lastName: Yup.string().required('Required').max(15, 'Must be 15 characters or less'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
  });
  return (
    <div>
      <h1>Formik Yup</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName"> First Name</label>
        <input type="text" {...getFieldProps('firstName')} />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName"> Last Name</label>
        <input type="text" {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email"> Email</label>
        <input type="text" {...getFieldProps('email')} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
