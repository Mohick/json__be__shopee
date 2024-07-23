const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const categores__main__page = require('./container__file__json/Categores Main Page.json')
const daily = require('./container__file__json/daily Manpage.json');
const banner__side__event = require('./container__file__json/banner side event .json');
const products = require('./container__file__json/api products.json');
const search = require('./container__file__json/Search.json');
const top__search = require('./container__file__json/Top Search.json');
const small__items__main__page = require("./container__file__json/Shopee Small Items.json")
const flash__sell__main__page = require("./container__file__json/Flash Sale.json")
const top__products__main__page = require("./container__file__json/Top Product.json")
const site__events__main__page = require("./container__file__json/Site Event MainPage.json")
const filter__cart = require('./container__file__json/filter__cart.json')
const banner__small = require('./container__file__json/banner Shopee Small.json')
const info_store_relate = require('./container__file__json/info_store_relate.json')
const app = express();
const port = 3000;
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(morgan('combined'));

app.get('/api__daily/', (req, res) => {
  res.json(daily);
});

app.get('/api__top__search/', (req, res) => {
  res.json(top__search);
});

app.get('/api__search/', (req, res) => {
  res.json(search);
});

app.get('/api__products/', (req, res) => {
  res.json(products);
});

app.get('/api__banner__side__event/', (req, res) => {
  res.json(banner__side__event);
});
app.get('/api__small__main__page/', (req, res) => {
  res.json(small__items__main__page);
});
app.get('/api__categores__main__page/', function (req, res) {
  res.json(categores__main__page);
})
app.get('/flash__sell__main__page/', function (req, res) {
  res.json(flash__sell__main__page);
})

app.get('/top__products__main__page/', function (req, res) {
  res.json(top__products__main__page);
})

app.get('/site__events__main__page/', function (req, res) {
  res.json(site__events__main__page);
})

app.get('/filter__cart/', function (req, res) {
  res.json(filter__cart);
})

app.get('/banner__small/', function (req, res) {
  res.json(banner__small);
})

app.get('/info_store_relate/', function (req, res) {
  res.json(info_store_relate);
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
