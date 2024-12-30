class BaseResponse {
    static success(data, message = 'Success', statusCode = 200) {
      return {
        status: 'success',
        message,
        statusCode,
        data,
      };
    }
  
    static error(message = 'Error', statusCode = 500) {
      return {
        status: 'error',
        message,
        statusCode,
      };
    }
  }
  
  module.exports = BaseResponse;
  