const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getMangaInfo = async (req, res, next) => {
  await fetch(`https://api.mangadex.org/manga/${req.params.mangaid}`)
    .then((res) => res.json())
    .then((data) => {
      res.json(data);
    });
};
const getCover = async (req, res, next) => {
  await fetch(`https://api.mangadex.org/cover/${req.params.coverid}`)
    .then((res) => res.json())
    .then((data) => {
      res.json(data);
    });
};

module.exports = { getMangaInfo, getCover };
