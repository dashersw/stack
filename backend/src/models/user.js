const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
)

userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
