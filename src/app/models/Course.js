  // khoi tao slug
  const mongoose = require('mongoose');
  const slug = require('mongoose-slug-generator');
  const mongooseDelete = require('mongoose-delete');
  const AutoIncrement = require('mongoose-sequence')(mongoose);
  // Using Node.js `require()`

  const Schema = mongoose.Schema;


  // Khai Bao luoc do Course theo kieeu Schema
  const Course = new Schema({
      _id: {type: Number, },
      name: { type: String, default: '' ,minLength: 0, maxLength: 255},
      description: { type: String, default: '' ,minLength: 0, maxLength: 255},
      image: { type: String, maxLength: 255},
      slug: { type: String, slug: 'name', unique: true}, // lấy name -> biến thành chuỗi k dấu
      videoId: { type: String },
      level: { type: String },
    },
      {
        _id: false,
        timestamps:true,
      });

    // Add plugin
  mongoose.plugin(slug);
  // Override all methods
  Course.plugin(AutoIncrement);
  Course.plugin(mongooseDelete, {
    deletedAt : true , // filled hien thi tg xoa
    overrideMethods: 'all' }); // ghi def lai course trong db

    module.exports = mongoose.model('Course', Course);