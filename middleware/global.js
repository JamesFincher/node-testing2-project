const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong but I can't be more specific",
    stack: err.stack,
  });
};
const logger = (req, res, next) => {
  const log = {
    Time: new Date(),
    Method: req.method,
    Endpoint: req.url,
    Body: req.body,
  };
  console.log(log);
  next();
};

module.exports = {
  logger,
  errorHandler,
};
