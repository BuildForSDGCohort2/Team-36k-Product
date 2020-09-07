if (process.env.NODE_ENV === "production") {
  module.exports = {
    MONGODB_URI:
      "mongodb+srv://digipharm:digipharm@cluster0.c1050.mongodb.net/digipharm?retryWrites=true&w=majority",
  };
} else {
  module.exports = {
    MONGODB_URI: "mongodb://localhost:27017/digipharm",
  };
}

// mongoURI: "mongodb://root:root@localhost:27017/shopping_list",
