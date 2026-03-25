export const loggerMiddleware = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const log = {
      method: req.method,
      url: req.url,
      status: res.statusCode,
      time: `${Date.now() - start}ms`,
    };

    console.log(log);
  });

  next();
};