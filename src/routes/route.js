const homeRouter = require('./home')
const courseRouter = require('./course')
const parentRouter = require('./parent')
const rankRouter = require('./rank')
const registerRouter = require('./register')
const loginRouter = require('./login')
const logoutRouter = require('./logout')
const saveScoreRouter = require('./saveScore')
const searchRouter = require('./search')
const apiAdmin = require('./apiAdmin')
function route(app) {
    app.use('/', homeRouter)
    app.use('/course', courseRouter)
    app.use('/parent', parentRouter)
    app.use('/rank', rankRouter)
    app.use('/register', registerRouter)
    app.use('/login', loginRouter)
    app.use('/logout', logoutRouter)
    app.use('/save-score', saveScoreRouter)
    app.use('/search', searchRouter)
    //api-admin
    app.use('/api/admin', apiAdmin)
}

module.exports = route