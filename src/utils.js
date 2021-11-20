const getRandomItem = (items) =>
  items.length ? items[Math.floor(Math.random() * items.length)] : "";

module.exports = { getRandomItem };
