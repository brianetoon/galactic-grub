const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // 404 Not Found errors for undefined routes
  if (err.status === 404) {
    return res.status(404).json({
      success: false,
      error: err.message || "Resource not found",
    });
  }

  // Mongoose Validation Errors
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      success: false,
      error: "Validation failed",
      details: errors,
    });
  }

  // Invalid ObjectId or CastError
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      error: "Invalid ID format",
    });
  }

  // JWT authentication errors
  if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
    return res.status(401).json({
      success: false,
      error: "Invalid or expired token",
    });
  }

  // Generic Server Error
  res.status(500).json({
    success: false,
    error: err.message || "Something went wrong 🤷",
  });
};

export default errorHandler;
