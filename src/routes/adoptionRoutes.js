const express = require('express');

const AdoptionController = require(
  '../controllers/AdoptionController'
);

const authMiddleware = require(
  '../middlewares/authMiddleware'
);

const adminMiddleware = require(
  '../middlewares/adminMiddleware'
);

const adopterMiddleware = require(
  '../middlewares/adopterMiddleware'
);

const router = express.Router();


router.get(
  '/',
  authMiddleware,
  adminMiddleware,
  AdoptionController.findAll
);


router.post(
  '/',
  authMiddleware,
  adopterMiddleware,
  AdoptionController.create
);

module.exports = router;