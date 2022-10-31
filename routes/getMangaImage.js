// const fetch = (...args) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getMangaImage = async (req, res, next) => {
  const request = require("request");

  const options = {
    method: "GET",
    url: "https://uploads.mangadex.org/covers/10227f74-9134-4262-b01d-8966bc149c4d/00e64828-dd90-405e-9ff5-abf4b1cef522.jpg.256.jpg",
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    res.send(body);
  });

  //   let url =
  //     "https://uploads.mangadex.org/covers/10227f74-9134-4262-b01d-8966bc149c4d/00e64828-dd90-405e-9ff5-abf4b1cef522.jpg.256.jpg";

  //   let options = { method: "GET" };

  //   await fetch(url, options)
  //     .then((res) => res.json())
  //     .then((json) => console.log(json))
  //     .catch((err) => console.error("error:" + err));
  //   await fetch(`https://api.mangadex.org/cover/${req.params.coverid}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       res.json(data);
  //     });
};
module.exports = { getMangaImage };
