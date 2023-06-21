const searchService = require('../service/searchService')
class SearchController {
    async search(req, res) {
        res.locals.title = 'Tìm kiếm';
        const searchTxt = req.query.searchTxt
        let list = await searchService.findByTxt(searchTxt)
        res.render('search', { list })
    }


}

module.exports = new SearchController()