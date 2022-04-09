import { shipFactory } from "../code/script";

const testShip1 = shipFactory(2, 'A1', 'right')

test('check ship length', () => {
    expect(testShip1.length).toBe(2);
});

test('check ship position', () => {
    expect(testShip1.pos).toBe('A1');
});

test('check ship rotation', () => {
    expect(testShip1.rotation).toBe('right');
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