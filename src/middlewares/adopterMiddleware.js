function adopterMiddleware(
  req,
  res,
  next
) {
  if (
    req.user.role !== 'adopter'
  ) {
    return res.status(403).json({
      message:
        'Somente usuários adopter podem adotar pets'
    });
  }

  next();
}

module.exports =
  adopterMiddleware;