function userPermissionMiddleware(
  req,
  res,
  next
) {
  const loggedUserId =
    Number(req.user.userId);

  const requestedUserId =
    Number(req.params.id);

  const isAdmin =
    req.user.role === 'admin';

  const isOwner =
    loggedUserId ===
    requestedUserId;

  if (!isAdmin && !isOwner) {
    return res.status(403).json({
      message:
        'Você não possui permissão para acessar este usuário'
    });
  }

  next();
}

module.exports =
  userPermissionMiddleware;