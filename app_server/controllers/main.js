const index = (req, res) => {
    res.render('index', {title : "Trevlr Getaways"});
};

module.exports = {
    index
}