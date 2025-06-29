class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something Went wwrong",
    error = [],
    statck = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.errors = this.errors;

    if (statck) {
      this.satck = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
