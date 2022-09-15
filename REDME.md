GET : Gửi yêu cầu lên server yêu cầu server trả lại dữ liệu về clients
POST : Gửi yêu cầu lên server yêu cầu server tạo mới , lưu lại 1 dữ liệu ( thường để chỉnh sửa dữ liệu , thêm dữ liệu)
PATCH : Chức năng giông như POST nhưng POST thì sửa cả document còn PATCH thì sửa từng field
DELETE : 
OPTIONS : 
HEAD :






Sử dụng promise để đếm số bản ghi đã xoá và lưu ở thùng rác 

    //  [GET] /me/stored/courses
    storedCourses(req, res, next) {
        //countDocumentsDeleted đếm số bản ghi trong trash
        Promise.all([ Course.find({}), Course.countDocumentsDeleted() // dùng promise all để thực hiện liên tiếp 2 hành động là delete soft và đếm số bản ghi đc xoá 
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses:mutipleMongooseToObject(courses),
                })
            )
            .catch(next);
    }
    
