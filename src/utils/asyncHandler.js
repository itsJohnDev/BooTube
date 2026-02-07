const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, nexy)).catch((err) => next(err));
  };
};

module.exports = asyncHandler;
