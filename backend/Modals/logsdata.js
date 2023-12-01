const mongoose = require("mongoose");

const logDataSchema = mongoose.Schema({
  level: {
    type: String,
    required: true,
  },
 message: {
    type: String,
    required: true,
  },
resourceId: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  traceId: {
    type: String,
    required: true,
  },
 spanId: {
    type: String,
    required: true,
  },
 commit: {
    type: String,
    required: true,
  },
 metadata : {

        parentResourceId: {
          type: String, // Assuming the parentResourceId is a string
          required: true,
        }
  }
});

const logDatamodel = mongoose.model("logs",logDataSchema)

module.exports = logDatamodel;