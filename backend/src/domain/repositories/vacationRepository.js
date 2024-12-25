const Vacation = require('../entities/vacation');

const createVacation = async (vacationData) => {
  const vacation = new Vacation(vacationData);
  return vacation.save();
};

const findVacationById = async (id) => {
  return Vacation.findById(id).populate('employee');
};

const listVacations = async () => {
  return Vacation.find().populate('employee');
};

const updateVacation = async (id, updateData) => {
  return Vacation.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteVacation = async (id) => {
  return Vacation.findByIdAndDelete(id);
};

module.exports = {
  createVacation,
  findVacationById,
  listVacations,
  updateVacation,
  deleteVacation,
};
