const express = require('express');
const router = express.Router();

let cards = require('../mock-data/cards.json');


router.get('/', function(req, res, next) {
  const { campaignId } = req.query;

  res.setHeader('Content-Type', 'application/json');
  if (campaignId) {
    const filteredCards = cards.filter(card => card['campaignId'] === campaignId);
    res.send(filteredCards);
  } else {
    res.send(cards);
  }
});


const updateCard = (cardId, cardTitle, newStatus) => {
  cards = cards.map((card)=>{
    if (card['id'] === cardId && card['cardTitle'] === cardTitle) {
      card['currentWorkflow'] = newStatus;
      return card;
    }
    return card;
  })
};

router.post('/:cardId',function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  const { cardTitle, newStatus} = req.body;
  const { cardId } = req.params;

  updateCard(cardId, cardTitle, newStatus);

  res.send(cards);
});

module.exports = router;
