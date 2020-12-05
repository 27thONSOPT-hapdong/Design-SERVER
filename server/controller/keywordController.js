const statusCode = require("../modules/statusCode");
const resposseMessage = require("../modules/responseMessage");
const util = require("../modules/util");
const { keyword, mindmap_keyword } = require("../models");
const sequelize = require("sequelize");

module.exports = {
  keywordAdd: async (req, res) => {
    try {
      const mindmapIdx = req.params.mindmapIdx;
      const randomKeyword = "Memory";

      const addKeyword = await keyword.create({
        word: randomKeyword,
      });

      const mindmap_keywordAdd = await mindmap_keyword.create({
        keywordId: addKeyword.dataValues.id,
        mindmapId: mindmapIdx,
      });
      
      res.status(statusCode.OK).send(util.success(statusCode.OK, resposseMessage.KEYWORD_ADD_SUCCESS, {
        word: randomKeyword
      }));
      return;

    } catch (err) {
      return res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            resposseMessage.INTERNAL_SERVER_ERROR
          )
        );
    }
  },
};
