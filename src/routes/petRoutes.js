const express = require('express');

const PetController = require(
  '../controllers/PetController'
);

const authMiddleware = require(
  '../middlewares/authMiddleware'
);

const adminMiddleware = require(
  '../middlewares/adminMiddleware'
);

const router = express.Router();


router.get(
  '/available',
  PetController.findAvailable
);


router.get(
  '/',
  authMiddleware,
  adminMiddleware,
  PetController.findAll
);

router.get(
  '/:id',
  authMiddleware,
  adminMiddleware,
  PetController.findById
);

router.post(
  '/',
  authMiddleware,
  adminMiddleware,
  PetController.create
);

router.put(
  '/:id',
  authMiddleware,
  adminMiddleware,
  PetController.update
);

router.delete(
  '/:id',
  authMiddleware,
  adminMiddleware,
  PetController.delete
);

module.exports = router;