const renderIndex = (req, res) => {
  res.render("layout", {
    title: "BizNews - News Portal",
    body: "index",
  });
};

const renderContact = (req, res) => {
  res.render("layout", {
    title: "BizNews - News Portal || Contact",
    body: "contact",
  });
};

const renderCategory = (req, res) => {
  res.render("layout", {
    title: "BizNews - News Portal || Category",
    body: "category",
  });
};

const renderSingle = (req, res) => {
  res.render("layout", {
    title: "BizNews - News Portal || Single",
    body: "single",
  });
};

module.exports = { renderIndex, renderContact, renderCategory, renderSingle };
