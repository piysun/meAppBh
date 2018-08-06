var express = require('express');
var router = express.Router();
const Item = require('../shopinglist/shopinglist')

router.get('/testing_get_route', function (req, res, next) {

    Item.find(function (err, items) {
        if (err) {
            res.json(err)
        }
        else {
            res.json(items)
        }
    });
});

router.post('/insert_data', (req, res, next) => {
    let newShopingItem = new Item({
        iteamName: req.body.iteamName,
        iteamQuantity: req.body.iteamQuantity,
        IteamBought: req.body.IteamBought
    });
    newShopingItem.save((err, item) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ mgs: ' Item Save' });
        }
    });
});

router.put('update_data', (req, res, next) => {

});

router.delete('delete_data', (req, res, next) => {

});
module.exports = router;
