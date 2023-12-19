const express = require('express');
const app = express();
const port = 3002;
const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/test';
const { articleModel } = require('./models');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/articles', async (req, res) => {
    try {
      const articles = await articleModel.find();
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).send(error);
    }
  });

app.post('/articles', async (req, res) => {
  try {
    const name = req.body?.name;
    const description = req.body?.description;
    const price = req.body?.price;
    const stock = req.body?.stock;
    const category = req.body?.category;

    if (!name || !description || !price || !stock || !category) {
      return res.status(400).json({ message: 'Bad request, name or age not found' });
    }
    const article = new articleModel({
      name,
      description,
      price,
      stock,
      category
    });

    const save = await article.save();
    return res.status(201).json({ article: save });
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/articles/:id', async (req, res) => {
    try {
      const article = await articleModel.findById(req.params.id);
      if (!article) {
        return res.status(404).send('Artículo no encontrado');
      }
      res.status(200).json(article);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  app.put('/articles/:id', async (req, res) => {
    try {
      const article = await articleModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!article) {
        return res.status(404).send('Artículo no encontrado');
      }
      res.status(200).json(article);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  app.delete('/articles/:id', async (req, res) => {
    try {
      const article = await articleModel.findByIdAndDelete(req.params.id);
      if (!article) {
        return res.status(404).send('Artículo no encontrado');
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error);
    }
  });
  

mongoose.connect(uri)
  .then(() => {
    console.log('Conneccion exitosa!');
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Connection fallida', error);
  });
