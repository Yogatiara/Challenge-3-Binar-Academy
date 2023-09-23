const checkBody = (req, res, next) => {

  if (!req.body.plate || !req.body.manufacture) {
    return res.status(404).json({
      status: "failed",
      message: "name or price are required",
    })
  }
  next();

}

module.exports = checkBody;