const mongoose = require('mongoose');
const { articleSchema } = require('./schemas');

const articleModel = mongoose.model('Article', articleSchema);


module.exports = {
  articleModel
};