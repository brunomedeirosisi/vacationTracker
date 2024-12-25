const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  function: { type: String, required: true },
  projects: [
    {
      project_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
      dedication_percentage: { type: Number },
      initial_date_real: { type: Date },
      final_date_real: { type: Date },
    },
  ],
  vacations: [
    {
      initial_date_real: { type: Date },
      final_date_real: { type: Date },
    },
  ],
});

module.exports = mongoose.model('Employee', EmployeeSchema);
