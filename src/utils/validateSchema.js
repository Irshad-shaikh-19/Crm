const Joi = require('joi');

const validateSchema = async (data, schema) => {
  try {
    const value = await schema.validateAsync(data, { abortEarly: false });
    return value;
  } catch (error) {
    if (error instanceof Joi.ValidationError) {
      throw new Error(error.details.map((err) => err.message).join(', '));
    }
    throw new Error('An unexpected error occurred during validation');
  }
};

module.exports = { validateSchema };
