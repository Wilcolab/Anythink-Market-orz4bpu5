/**
 * Express router providing comment related routes.
 * @module routes/api/comments
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * Route serving a list of comments.
 * @name get/comments
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {JSON} - A JSON object containing a list of comments or an error message
 */
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json({ comments });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;