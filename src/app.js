// packages
import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
// Route
import indexRouter from './Route/index.js'
// Helper
import EnvData from './Helper/EnvData.js'
// Db
import './Model/Db.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
// view engine setup
app.set('views', path.join(__dirname, 'View'))
app.set('view engine', 'jade')
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    res.status(err.status || 500)
    res.render('error')
})

app.listen(EnvData.port, () => {
    console.log(`Server is running on port ${EnvData.port}`)
})

export default app
