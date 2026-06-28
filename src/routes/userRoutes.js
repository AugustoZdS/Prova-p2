const express = require('express');

const UserController = require(
  '../controllers/UserController'
);

const authMiddleware = require(
  '../middlewares/authMiddleware'
);

const adminMiddleware = require(
  '../middlewares/adminMiddleware'
);

const userPermissionMiddleware = require(
  '../middlewares/userPermissionMIddleware'
);

const router = express.Router();

router.post(
  '/',
  UserController.create
);


router.get(
  '/',
  authMiddleware,
  adminMiddleware,
  UserController.findAll
);

router.get(
  '/:id',
  authMiddleware,
  userPermissionMiddleware,
  UserController.findById
);

router.put(
  '/:id',
  authMiddleware,
  userPermissionMiddleware,
  UserController.update
);

router.delete(
  '/:id',
  authMiddleware,
  adminMiddleware,
  UserController.delete
);

module.exports = router;