const statusCode = require('../modules/statusCode');
const resposseMessage = require('../modules/responseMessage');
const util = require('../modules/util');
const { mindmap, keyword } = require('../models');
const sequelize = require('sequelize'); 

module.exports = {
  oneMindMap: async (req, res) => {
    try {
      const { mindmapIdx } = req.params;

      const detailMindMap = await mindmap.findAll({
        attributes: ['title', 'start_date', 'end_date', 'contents'],
        where: {
          id: mindmapIdx
        },
        include: [{
          model: keyword,
          as: 'hasKeyword',
          attributes: [[sequelize.fn('COUNT', 'keywordId'), 'keywordCount']],
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