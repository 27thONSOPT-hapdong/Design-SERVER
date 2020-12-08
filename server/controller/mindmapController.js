const statusCode = require('../modules/statusCode');
const resposseMessage = require('../modules/responseMessage');
const util = require('../modules/util');
const { mindmap, keyword } = require('../models');
const sequelize = require('sequelize'); 

module.exports = {
  oneMindMap: async (req, res) => {
    try {
      const { mindmapIdx } = req.params;

      if (!mindmapIdx) {
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resposseMessage.NULL_VALUE));
        return;
      }

      const detailMindMap = await mindmap.findAll({
        group: 'keywordId',
        attributes: ['title', 'start_date', 'end_date', 'contents', [sequelize.fn('COUNT', sequelize.col('keywordId')), 'keywordCount']],
        where: {
          id: mindmapIdx
        },
        include: [{
          model: keyword,
          as: 'hasKeyword',
          attributes: [],
          through: { attributes: [] },
        }],
      })
      res.status(statusCode.OK).send(util.success(statusCode.OK, resposseMessage.MINDMAP_ONE_SUCCESS, detailMindMap));
      return;
    } catch (err) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, resposseMessage.INTERNAL_SERVER_ERROR));
    }
  }
}