const Model = require('./model');

exports.create = async (newData) => {
  const newModel = new Model(newData);
  const result = await newModel.save();
  if (!result) {
    return { status: 400, error: "Something went wrong" }
  }
  else {
    return { status: 200, message: "Created successfully" }
  }
}

exports.update = async (id, newData) => {
  const result = await Model.findOneAndUpdate({ _id: `${id}` }, newData);
  if (!result) {
    return { status: 400, error: "Something went wrong" }
  }
  else {
    return { status: 200, message: "Updated successfully" }
  }
}

exports.remove = async (id) => {
  const result = await Model.deleteOne({ _id: `${id}` });
  if (!result) {
    return { status: 400, error: "Something went wrong" }
  }
  else {
    return { status: 200, message: "Deleted successfully" }
  }
}
