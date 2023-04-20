export default class Deck {
  cards = [];

  initCards() {
    for (let i = 1; i <= 13; i++) {
      for (let j = 0; j < 4; j++) {
        this.cards.push(i);
      }
    }
  }
  dealCards() {
    let randNum = Math.floor(Math.random() * this.cards.length);
    let card = this.cards.splice(randNum, 1);
    return card[0];
  }
}
