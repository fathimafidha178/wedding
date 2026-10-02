const mongoose = require("mongoose");

const invitationSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    groomName: {
      type: String,
      required: true,
    },

    brideName: {
      type: String,
      required: true,
    },

    weddingDate: {
      type: Date,
      required: true,
    },

    venueName: {
      type: String,
      required: true,
    },

    venueAddress: {
      type: String,
      required: true,
    },

    mapUrl: {
      type: String,
      default: "",
    },

    invitationMessage: {
      type: String,
      default: "",
    },

    coverImage: {
      type: String,
      default: "",
    },

    gallery: [
      {
        type: String,
      },
    ],

    events: [
      {
        title: String,
        date: Date,
        time: String,
        venue: String,
        address: String,
      },
    ],

    musicUrl: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Invitation",
  invitationSchema
);