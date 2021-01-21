
export default class Deck {
    constructor (config) {
        this.config = config;
    }

    shuffle () {
        const unshuffledCards = [...this.config.cards];

        for (let i = this.config.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.config.cards[i], this.config.cards[j]] = [this.config.cards[j], this.config.cards[i]];
        }

        return unshuffledCards.toString() !== this.config.cards.toString();
    }
    
    insertAt (card, pos = this.config.cards.length) {
        this.config.cards.splice(pos, 0, card);

        return true;
    }

    draw () {
        return this.config.cards.shift();
    }

    getCardsCount () {
        return this.config.cards.length;
    }
}