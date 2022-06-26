const livros = require ("../models/livros.js");


const getAllLivros = (req, res) => {
  livros.find((err, livros) => {
    res.status(200).json(livros);
  })
};

const getLivros =  (req, res) => {
  const id = req.params.id;

  livros.findById(id, (err, livros) => {
   if(err) {
    res.status(400).send({message: `${err.message} - id do livro não foi encontrada`})
   } else {
    res.status(200).send(livros);
     }
  })
}

 
const createLivros =  (req, res) => {
  let livro = new livros(req.body);
  livros.save((err) => {
    if(err) {
      res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`})
    } else {
      res.status(201).send(livro.toJSON())
    }
  })
};

const updateLivros =  (req, res) => {
  const id = req.params.id;

  livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
    if(!err) {
      res.status(200).send({message: 'livro atualizado com sucesso'})
    } else {
      res.status(500).send({ message: err.message})
    }
  })
};

const deleteLivros =  (req, res) => {
 const id = req.params.id;

  livros.findByIdAndDelete(id, (err) => {
    if(!err) {
      res.status(200).send({ message: 'Livro deletado com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};

module.exports = {
    getAllLivros,
    getLivros, 
    createLivros,
    updateLivros,
    deleteLivros
}