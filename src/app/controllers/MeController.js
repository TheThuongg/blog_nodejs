const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { restore } = require('./CourseController');
const { off } = require('../models/Course');

class MeController {
    //  [GET] /me/stored/courses
    storedCourses(req, res, next) {

        
        let courseQuery = Course.find({});

        if(req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]:req.query.type
            });
        }
        //countDocumentsDeleted đếm số bản ghi trong trash
        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses:mutipleMongooseToObject(courses),
                })
            )
            .catch(next);
    }
     //  [GET] /me/trash/courses
    trashCourses(req, res, next){
        let courseQuery = Course.findDeleted({});

        if(req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]:req.query.type
            });
        }
        courseQuery
            .then(courses => res.render('me/trash-courses', {
                courses:mutipleMongooseToObject(courses)
            }))
            .catch(next); //findDeleted() Trả về các file đã xoá
    }
   
}
module.exports = new MeController();
