const express =  require('express');
const { products } = require('./db');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(products)
});
router.post('/', (req, res) => {
  const newProduct = {
    ...req.body,
    id: `${products.length + 1}`,
  };
  products.push(newProduct);
  res.json(newProduct);
});
router.get('/:id', (req, res) => {
  const product = products.find((record) => record.id == req.params.id);
  if (!product) {
    res.status(404).send('Not found');
  } else {
    res.json(product);
  }
});
router.put('/:id', (req, res) => {
  const productIndex = products.findIndex((record) => record.id == req.params.id)
  if (productIndex === -1) {
    res.status(404).send('Not found');
  } else {
    products[productIndex] = req.body;
    res.json(products[productIndex]);
  }
});
router.patch('/:id', (req, res) => {
  const productIndex = products.findIndex((record) => record.id == req.params.id)
  if (productIndex === -1) {
    res.status(404).send('Not found');
  } else {
    products[productIndex] = { ...products[productIndex], ...req.body };
    res.json(products[productIndex]);
  }
});
router.delete('/:id', (req, res) => {
  const productIndex = products.findIndex((record) => record.id == req.params.id)
  if (productIndex === -1) {
    res.status(404).send('Not found');
  } else {
    products.splice(productIndex, 1);
    res.json(products);
  }
});

module.exports = router;
