export default class Player{
    wins = 0
    losses = 0
    games = 1
    currentGame = ''

    constructor(name, cards){
        this.name = name
        this.cards = cards
    }
}