module.exports = function(req, res) {
    console.log(req.body);

    const products = {
        "success":true,
        "products":
        [
        "Tshirts", "Pants", "Shirts", "Shorts", "Jackets"
    ]};

    res.status(200).send(products);
    
}