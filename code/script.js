const shipFactory = (length, pos, rotation) => {
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
        pos,
        rotation,
        isSunk,
        hit,
        getHits
    }
}

export { shipFactory }
