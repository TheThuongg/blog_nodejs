class SiteController {
    //  [GET] /
    home(req, res) {
        res.render('home');
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
