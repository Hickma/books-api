const {Router} = require("express")


const {getBooks, deleteBook} = require("../controllers/booksController")

const router = Router();
router.route("/books").get(getBooks)
router.route("/books/:title",deleteBook)


module.exports =router