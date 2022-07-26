class NewsController{
    //  [GET] /news
    index(req, res) {
        res.render('news');
    }
    // [GET] /news/:slug
    show(req, res) {
        res.send('NEW DETTAIL!!!');
    }


    // req : chứa thông tin các yêu cầu gửi lên từ server
    //res : lựa chọn các kêys quả trả về qua rep
    // 

}
module.exports = new NewsController;