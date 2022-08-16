const boom = require('boom')

const genericCrud = (model) => ({
  async get({ params: { id } }) {
    try {
      const item = await model.findById(id)
      return item
    } catch(error) {
      throw boom.boomify(error);
    }
  },
  async getAll() {
    try {
      const item = await model.find()
      return item
    } catch(error) {
      throw boom.boomify(error);
    }
  },
  async create({ body }) {
    try {
      const item = new model(body)
      const newItem = await item.save()
      return newItem
    } catch(error) {
      throw boom.boomify(error);
    }
  },
  async update({ params: { id }, body }) {
    try {
      const item = await model.findByIdAndUpdate(id, body, { new: true })
      return item
    } catch(error) {
      throw boom.boomify(error);
    }
  },
  async delete({ params: { id } }) {
    try {
      await model.findByIdAndDelete(id)
      return { status: 'ok', message: 'item is removed' }
    } catch(error) {
      throw boom.boomify(error);
    }
  },
})