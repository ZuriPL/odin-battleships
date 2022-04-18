import { shipFactory, Gameboard } from "../code/script";

const testShip1 = shipFactory(2, 1, 1, 'vertical')

test('check ship length', () => {
    expect(testShip1.length).toBe(2);
});

test('check ship position', () => {
    expect(testShip1.x).toBe(1);
    expect(testShip1.y).toBe(1);
});

test('check ship rotation', () => {
    expect(testShip1.rotation).toBe('vertical');
});

test('test a hit', () => {
    testShip1.hit(0)
    expect(testShip1.getHits()).toEqual([true, false]);
});

test('test sinking the ship', () => {
    expect(testShip1.isSunk()).toBe(false);
    testShip1.hit(1)
    expect(testShip1.isSunk()).toBe(true);
});

const testBoard = Gameboard(9)
testBoard.addShip(
    shipFactory(4, 1, 1, 'horizontal')
)
testBoard.addShip(
    shipFactory(4, 3, 2, 'vertical')
)

test('test checking for a ship when it exists (horizontal)', () => {
    expect(!!testBoard.isShipHit(2, 1)).toBe(true)
});

test('test checking for a ship when it exists (vertical)', () => {
    expect(!!testBoard.isShipHit(3, 6)).toBe(true)
});

test('test checking for a ship when it doesnt exist', () => {
    expect(!!testBoard.isShipHit(2, 2)).toBe(false)
});

testBoard.recieveAttack(1, 1)
testBoard.recieveAttack(2, 2)

test('test attacking an empty cell', () => {
    expect(testBoard.hits['2-2']).toBe(true)
    expect(testBoard.hits['2-3']).toBe(undefined)
});

test('test attacking an occupied cell', () => {
    expect(testBoard.ships[0].getHits()[0]).toBe(true)
    expect(testBoard.ships[0].getHits()[1]).toBe(false)
});
