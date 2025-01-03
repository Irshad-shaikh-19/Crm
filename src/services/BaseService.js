const { Types } = require('mongoose');

class BaseService {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return this.model.create(data);
  }

  async findById(id) {
    return this.model.findById(new Types.ObjectId(id));
  }

  async find(query = {}) {
    return this.model.find(query);
  }

  async update(id, data) {
    return this.model.findByIdAndUpdate(new Types.ObjectId(id), data, { new: true });
  }

  async delete(id) {
    return this.model.findByIdAndDelete(new Types.ObjectId(id));
  }

  async exists(query) {
    // Alternative implementation to avoid `exists` issues
    const result = await this.model.findOne(query);
    return result !== null;
  }
}

module.exports = BaseService;
