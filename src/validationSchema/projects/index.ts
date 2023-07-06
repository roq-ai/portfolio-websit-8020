import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  link: yup.string().required(),
  job_hire_id: yup.string().nullable(),
});
