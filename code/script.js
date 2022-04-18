const shipFactory = (length, x, y, rotation) => {
    const isSunk = () => {
        if (hits.includes(false)) return false
        return true
    }
    const hit = (x) => {
        hits[x] = true
    }
    const getHits = () => {
        return hits
    }

    let hits = []
    for (let i = 0; i < length; i++) hits.push(false)

    return {
        length,
        x,
        y,
        rotation,
        isSunk,
        hit,
        getHits
    }
}

const Gameboard = (size) => {
    let ships = []
    let hits = {}

    const addShip = (ship) => {
        ships.push(ship)
    }

    const isShipHit = (x, y) => {
        // takes coordinates and checks whether a ship has been hit on this board
        let result = false
        for (const ship of ships) {
            if (ship.rotation == 'horizontal') {
                if (y == ship.y) {
                    if (x <= ship.x <= x + ship.length) result = ship
                }
            } else {
                if (x == ship.x) {
                    if (y <= ship.y <= y + ship.length) result = ship
                }
            }
        }
        return result
    }

    const recieveAttack = (x, y) => {
        if (!!isShipHit(x, y) == false) {
            hits[`${x}-${y}`] = true
        } else {
            let ship = isShipHit(x, y)
            ship.hit(ship.rotation == 'horizontal' ? (x - ship.x) : (y - ship.y))
        }
    }

    return {
        recieveAttack,
        addShip,
        isShipHit,
        ships,
        hits
    }
}

export { shipFactory, Gameboard }
