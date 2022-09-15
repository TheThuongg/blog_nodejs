const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //  [GET] /
    home(req, res, next) {

        // Tryefn kieu callback
        // Course.find({}, function(err, courses) {
        //     if(!err) {
        //         res.json(courses);   
        //     }else{
        //         next(err);
        //     }
        // });
        // truyen kieur promises
        Course.find({})
            .then(courses => {
               
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next); 

        // res.render('home');
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    // req : chứa thông tin các yêu cầu gửi lên từ server
    //res : lựa chọn các kêys quả trả về qua rep
    //
}
module.exports = new SiteController();
