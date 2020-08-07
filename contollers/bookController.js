const db = require("../models");
const axios = require("axios");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    const {  } = req;
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=' + req.query.q)
      .then(({ data: { items } }) => {
        console.log(items);
        res.json(items);
      })
      .catch((err) => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
