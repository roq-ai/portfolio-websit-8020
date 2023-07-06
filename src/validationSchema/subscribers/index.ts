import * as yup from 'yup';

export const subscriberValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  blog_id: yup.string().nullable(),
});
