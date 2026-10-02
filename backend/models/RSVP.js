const mongoose = require("mongoose");

const rsvpSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    guests: {
      type: Number,
      required: true,
    },

    attending: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "RSVP",
  rsvpSchema
);