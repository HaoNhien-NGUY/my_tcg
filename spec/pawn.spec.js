import Pawn from '../src/models/pawn';

const CONFIG = {
    life: 100,
    strength : 17,
    def: 30
};

describe('A pawn', function () {
   let testPawn;
   
    beforeAll(function() {
        testPawn = new Pawn(CONFIG);
    });

    beforeEach(function() {
        testPawn.life = CONFIG.life;
        testPawn.strength = CONFIG.strength;
        testPawn.def = CONFIG.def;
    });

    it('get the life', function() {
        expect(testPawn.getLife()).toBe(CONFIG.life);
    });

    it('get the strength', function() {
        expect(testPawn.getStrength()).toBe(CONFIG.strength);
    });

    it('get the def', function() {
        expect(testPawn.getDef()).toBe(CONFIG.def);
    });

    it('attacks', function() {
        const mockPawn = {
            receiveAttack: () => true
        };

        spyOn(mockPawn, 'receiveAttack');
        expect(testPawn.attack(mockPawn)).toBe(true);
        expect(mockPawn.receiveAttack).toHaveBeenCalled();
    });

    it('receives an attack', function() {
        const strength = 10;
        const mockPawn = {
            receiveAttack: () => true,
            getStrength: () => strength
        };

        spyOn(mockPawn, 'receiveAttack');
        expect(testPawn.receiveAttack(mockPawn)).toBe(true);
        expect(testPawn.life).toBe(CONFIG.life - strength);
        expect(mockPawn.receiveAttack).toHaveBeenCalled();
    });

    it('receives a strikeBack', function() {
        const def = 30;
        const mockPawn = { def };

        expect(testPawn.receiveAttack(mockPawn, true)).toBe(true);
        expect(testPawn.getLife()).toBe(CONFIG.life - def);
    });

});
