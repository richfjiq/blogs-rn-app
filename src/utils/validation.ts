import * as yup from 'yup';

export const blogValidation = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  author: yup.string().required(),
  image_url: yup.string(),
});
