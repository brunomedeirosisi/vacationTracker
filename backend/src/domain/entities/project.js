const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  project_name: { type: String, required: true },
  initial_date_estimated: { type: Date, required: true },
  final_date_estimated: { type: Date, required: true },
  initial_date_real: { type: Date },
  final_date_real: { type: Date },
});

module.exports = mongoose.model('Project', projectSchema);
