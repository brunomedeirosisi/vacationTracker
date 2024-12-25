const mongoose = require('mongoose');

const dedicationSchema = new mongoose.Schema(
  {
    employee_name: {
      type: String,
      required: true,
      trim: true,
    },
    project: {
      type: String,
      required: true,
      trim: true,
    },
    initial_date_real: {
      type: Date,
      required: true,
    },
    final_date_real: {
      type: Date,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true, // Adiciona createdAt e updatedAt automaticamente
  }
);

const Dedication = mongoose.model('Dedication', dedicationSchema);

module.exports = Dedication;
