const express = require("express");

const Invitation = require("../models/Invitation");

const router = express.Router();

// GET INVITATION BY SLUG
router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const invitation = await Invitation.findOne({
      slug: slug.toLowerCase(),
      isActive: true,
    });

    if (!invitation) {
      return res.status(404).json({
        success: false,
        message: "Invitation not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: invitation,
    });
  } catch (error) {
    console.error("Get invitation error:", error);

    res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
});

module.exports = router;