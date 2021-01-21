import Deck from '../src/models/deck';

const cards = ['Ace', 2, 3, 4, 5, 6, 8, 9];

describe('A deck', function() {
    let testDeck;

    beforeAll(function () {
        testDeck = new Deck({
            cards
        });
    })

    beforeEach(function () {
        testDeck.config.cards = [...cards];
    });

    it('creates', function() {
        expect(testDeck.config.cards).toBeDefined();
        expect(Array.isArray(testDeck.config.cards)).toBe(true);
    });

    it('shuffles', function() {
        expect(testDeck.shuffle()).toBe(true);
    });

    it('insert a card in a given position', function() {
        const card = 'Joker';
        const pos = 4;

        expect(testDeck.insertAt(card, pos)).toBe(true);
        expect(testDeck.config.cards[pos]).toBe(card);
    });

    it('draws', function() {
        const firstCard = testDeck.config.cards[0];

        expect(testDeck.draw()).toBe(firstCard);
        expect(testDeck.config.cards).not.toContain(firstCard);
    });

    it('gets the card count', function () {
        const deckLength = testDeck.config.cards.length;

        expect(testDeck.getCardsCount()).toBe(deckLength);
    })
});