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

exports.get = async (id) => {
  const result = await Model.find().lean();
  const updatedResult = result.map((r) => {
    const id = r._id;
    delete r._id;
    return { id, ...r };
  })
  if (!result) {
    return { status: 400, error: "Something went wrong" }
  }
  else {
    return { status: 200, result: updatedResult }
  }
}

exports.getById = async (id) => {
  const result = await Model.findOne({ _id: id }).lean();
  if (!result) {
    return { status: 400, error: "Something went wrong" }
  }
  else {
    return { status: 200, result }
  }
}

exports.addImageById = async (id, path) => {
  // return { status: 200, message: "Image added", id, path }
  const result = await Model.findOneAndUpdate({ _id: id }, path);
  if (!result) {
    return { status: 400, error: "Something went wrong" }
  }
  else {
    return { status: 200, message: "Image added" }
  }
}
