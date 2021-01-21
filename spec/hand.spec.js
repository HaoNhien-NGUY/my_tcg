import Hand from '../src/models/hand';

const cards = [4, 5, 6, 8, 9];
const limit = 10

describe('A hand', function() {
    let testHand;

    beforeAll(function() {
        testHand = new Hand({
            cards,
            limit
        });
    });

    beforeEach(function() {
        testHand.cards = [...cards];
        testHand.limit = limit;
    });

    it('creates with a limit', function() {
        const hand = new Hand({
            cards,
            limit
        });

        expect(hand.cards).toBeDefined();
        expect(Array.isArray(hand.cards)).toBe(true);
        expect(hand.limit).toBeDefined();
        expect(hand.limit).toBe(limit);
    });

    it('creates without a limit', function() {
        const hand = new Hand({
            cards
        });

        expect(hand.cards).toBeDefined();
        expect(Array.isArray(hand.cards)).toBe(true);
        expect(hand.limit).toBeDefined();
        expect(hand.limit).toBe(7);
    });

    it('add card when hand is not full', function() {
        const newCard = 'Joker';

        expect(testHand.addCard(newCard)).toBe(true);
        expect(testHand.cards[testHand.cards.length - 1]).toBe(newCard);
    });

    it('add card when hand is full', function() {
        const newCard = 'Joker';
        const baseCards = [...testHand.cards];
        
        testHand.limit = testHand.cards.length;
        
        expect(testHand.addCard(newCard)).toBe(false);
        expect(testHand.cards).toEqual(baseCards);
    });

    it('remove card', function() {
        const pos = 3;
        const cardToBeRemoved = testHand.cards[pos];
        const newCards = [...testHand.cards]
        newCards.splice(pos, 1);

        expect(testHand.removeCard(pos)).toBe(cardToBeRemoved);
        expect(testHand.cards).toEqual(newCards);
    });

    it('get all cards', function() {
        expect(testHand.getAllCards()).toEqual(testHand.cards);
    })

    it('get cards count', function() {
        expect(testHand.getCardsCount()).toBe(testHand.cards.length);
    })
});