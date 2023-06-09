const { test, create, update, remove, get, getById, addImageById } = require('./service')

exports.test = async (req, res) => {
  const response = await test();
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.create = async (req, res) => {
  const response = await create(req.body);
  const { status, error, message } = response;
  if (error) {
    return res.status(status).json({ status, error });
  }
  return res.status(status).json({ status: 200, message });
}

exports.update = async (req, res) => {
  const { id } = req.params;
  const response = await update(id, req.body);
  const { status, error, message } = response;
  if (error) {
    return res.status(status).json({ status, error });
  }
  return res.status(status).json({ status: 200, message });
}

exports.remove = async (req, res) => {
  const { id } = req.params;
  const response = await remove(id, req.body);
  const { status, error, message } = response;
  if (error) {
    return res.status(status).json({ status, error });
  }
  return res.status(status).json({ status: 200, message });;
}

exports.get = async (req, res) => {
  const response = await get();
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.getById = async (req, res) => {
  const { id } = req.params;
  const response = await getById(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.addImageById = async (req, res) => {
  const { id } = req.params;
  const path = req.pathName;
  const response = await addImageById(id, { imageUrl: path });
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}