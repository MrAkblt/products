const express =  require('express');
const products = require('./products');
const app = express();

app.use(express.json());
app.use('/products', products);

app.listen(3000, () => {
  console.log('Server is running 3000');
})
