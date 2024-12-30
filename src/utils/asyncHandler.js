/**
 * Wrapper for async route handlers to catch errors and pass them to Express's error handler.
 */
const asyncHandler = (fn) => (req, res, next) => {
    fn(req, res, next).catch(next);
  };
  
  module.exports = asyncHandler;
  