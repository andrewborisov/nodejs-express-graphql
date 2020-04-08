const getItems = () => {
  return [{
    id: 0,
    name: 'Item1',
    images: ['img1.jpg','img2.jpg'],
    tags: 'item-tag',
    amount: 12,
    price: '30$'
  }, {
    id: 1,
    name: 'Item2',
    images: ['img1.jpg','img2.jpg'],
    tags: 'item-tag',
    amount: 5,
    price: '20$'
  }];
};

module.exports = {
  items: getItems
};
