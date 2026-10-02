const express = require("express");

const RSVP = require("../models/RSVP");

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    const {
      name,
      phone,
      guests,
      attending,
    } = req.body;

    if (!name || !phone || !guests) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const rsvp = await RSVP.create({
      name,
      phone,
      guests,
      attending,
    });

    res.status(201).json({
      success: true,
      message: "RSVP submitted successfully.",
      data: rsvp,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server error.",
    });

  }

});

module.exports = router;