const renderIndex = (req, res) => {
  res.render("index", { title: "BizNews - News Portal" });
};

const renderContact = (req, res) => {
  res.render("contact", { title: "BizNews - News Portal || Contact" });
};

const renderCategory = (req, res) => {
  res.render("category", { title: "BizNews - News Portal || Category" });
};

const renderSingle = (req, res) => {
  res.render("single", { title: "BizNews - News Portal || Single" });
};

module.exports = { renderIndex, renderContact, renderCategory, renderSingle };
