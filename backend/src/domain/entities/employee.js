const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  vacations: [
    {
      start_date: { type: Date, required: true },
      end_date: { type: Date, required: true },
    },
  ],
});

module.exports = mongoose.model('Employee', employeeSchema);
