const express = require("express");
const router = express.Router();

const getShowcase = require("./getShowcase");
const getMangaInfo = require("./getMangaInfo");
const getMangaImage = require("./getMangaImage");

router.get("/getshowcase", getShowcase.getShowcase);
router.get("/getmangainfo/:mangaid", getMangaInfo.getMangaInfo);
router.get("/getcover/:coverid", getMangaInfo.getCover);
router.get("/getmangaimage/:coverid", getMangaImage.getMangaImage);

module.exports = router;
