import Player from '../src/models/player';
import Deck from '../src/models/deck';
import Cemetary from '../src/models/cemetary';
import Board from '../src/models/board';
import Hand from '../src/models/hand';

const CONFIG = {
    life: 100,
    strength : 17,
    def: 30,
    type: 'Player'
}

describe('A player', function() {
    let testPlayer;

    beforeAll(function() {
        testPlayer = new Player(CONFIG);
    });

    it('creates', function() {
        expect(testPlayer.deck).toEqual(jasmine.any(Deck));
        expect(testPlayer.cemetary).toEqual(jasmine.any(Cemetary));
        expect(testPlayer.board).toEqual(jasmine.any(Board));
        expect(testPlayer.hand).toEqual(jasmine.any(Hand));
    });

    it('shuffles', function() {
        spyOn(testPlayer.deck, 'shuffle');

        testPlayer.shuffle('deck')
        expect(testPlayer.deck.shuffle).toHaveBeenCalled();
    });

    it('draws', function() {
        spyOn(testPlayer.deck, 'draw');

        testPlayer.draw();
        expect(testPlayer.deck.draw).toHaveBeenCalled();
    });

    it('plays a card', function() {
        const pos = 1;
        spyOn(testPlayer.board, 'addCard');
        spyOn(testPlayer.hand, 'removeCard');

        testPlayer.playCard(pos);
        expect(testPlayer.board.addCard).toHaveBeenCalled();
        expect(testPlayer.hand.removeCard).toHaveBeenCalledWith(pos);
    });

    it('discard a card', function() {
        const pos = 1;
        spyOn(testPlayer.cemetary, 'insertAt');
        spyOn(testPlayer.hand, 'removeCard');

        testPlayer.discard(pos);
        expect(testPlayer.cemetary.insertAt).toHaveBeenCalled();
        expect(testPlayer.hand.removeCard).toHaveBeenCalledWith(pos);
    })
});