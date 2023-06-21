const accountService = require('../service/accountService')
const parentService = require('../service/parentService')
const fs = require('fs');

class ParentController {
  async show(req, res) {
    res.locals.title = 'Phụ huynh';
    let taikhoan = req.cookies.username
    if (taikhoan) {
      let listCourse = await parentService.findCourseAndScore(taikhoan)
      let account = await accountService.check(taikhoan)
      res.render('parent', { account: account[0], listCourse })
    } else {
      res.render('blankPage')
    }

  }

  async upload(req, res) {
    const deleteFile = (filePath) => {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Lỗi khi xóa file:', err);
        } else {
          console.log('File đã được xóa thành công');
        }
      });
    };
    const uploadDirectory = './src/public/uploads/';
    let filename = req.file.filename
    let taikhoan = req.cookies.username
    let avatar = await accountService.findAvatar(taikhoan)
    const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000
    console.log(avatar[0].avatar)
    if (avatar[0].avatar === 'anhdaidienchung') {
      let result = await accountService.updateAvatar(filename, taikhoan)
      console.log(result)
      res.cookie('avatar', filename, { maxAge: thirtyDaysInMilliseconds })
      res.redirect('/parent')
    } else {
      deleteFile(uploadDirectory + avatar[0].avatar)
      let result = await accountService.updateAvatar(filename, taikhoan)
      console.log(result)
      res.cookie('avatar', filename, { maxAge: thirtyDaysInMilliseconds })
      res.redirect('/parent')
    }
  }


}

module.exports = new ParentController()