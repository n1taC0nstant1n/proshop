import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import User from '../models/userModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const users = await User.find({})
    // throw new Error('Page not found')
    res.json(users)
  })
)

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
      res.json(user)
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
)

export default router