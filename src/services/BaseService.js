const { Types, Model } = require('mongoose');

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

  // New method to check if a record exists based on a query
  async exists(query) {
    return this.model.exists(query).then((result) => result !== null);
  }
}

module.exports = BaseService;
