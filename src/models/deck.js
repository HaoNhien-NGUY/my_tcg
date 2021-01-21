
export default class Deck {
    constructor (config) {
        this.cards = config.cards;
    }

    shuffle () {
        const unshuffledCards = [...this.cards];

        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }

        return unshuffledCards.toString() !== this.cards.toString();
    }
    
    insertAt (card, pos = this.cards.length) {
        this.cards.splice(pos, 0, card);

        return true;
    }

    draw () {
        return this.cards.shift();
    }

    getCardsCount () {
        return this.cards.length;
    }
}