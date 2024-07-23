var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var categores__main__page = require('./container__file__json/Categores Main Page.json');
var daily = require('./container__file__json/daily Manpage.json');
var banner__side__event = require('./container__file__json/banner side event .json');
var products = require('./container__file__json/api products.json');
var search = require('./container__file__json/Search.json');
var top__search = require('./container__file__json/Top Search.json');
var small__items__main__page = require("./container__file__json/Shopee Small Items.json");
var flash__sell__main__page = require("./container__file__json/Flash Sale.json");
var top__products__main__page = require("./container__file__json/Top Product.json");
var site__events__main__page = require("./container__file__json/Site Event MainPage.json");
var filter__cart = require('./container__file__json/filter__cart.json');
var banner__small = require('./container__file__json/banner Shopee Small.json');
var info_store_relate = require('./container__file__json/info_store_relate.json');
var app = express();
var port = 3000;
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(morgan('combined'));
app.get('/api__daily/', function (req, res) {
    res.json(daily);
});
app.get('/api__top__search/', function (req, res) {
    res.json(top__search);
});
app.get('/api__search/', function (req, res) {
    res.json(search);
});
app.get('/api__products/', function (req, res) {
    res.json(products);
});
app.get('/api__banner__side__event/', function (req, res) {
    res.json(banner__side__event);
});
app.get('/api__small__main__page/', function (req, res) {
    res.json(small__items__main__page);
});
app.get('/api__categores__main__page/', function (req, res) {
    res.json(categores__main__page);
});
app.get('/flash__sell__main__page/', function (req, res) {
    res.json(flash__sell__main__page);
});
app.get('/top__products__main__page/', function (req, res) {
    res.json(top__products__main__page);
});
app.get('/site__events__main__page/', function (req, res) {
    res.json(site__events__main__page);
});
app.get('/filter__cart/', function (req, res) {
    res.json(filter__cart);
});
app.get('/banner__small/', function (req, res) {
    res.json(banner__small);
});
app.get('/info_store_relate/', function (req, res) {
    res.json(info_store_relate);
});
app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
