const errorHandler = (err, req, res, next) => {
  res.status(400).json({
    success: false,
    message: err.message ? err.message : `An error occurred`,
  });
};
module.exports = errorHandler;
