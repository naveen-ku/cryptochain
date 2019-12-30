// making genesis block 
//to achieve this we are creating the genesis data (dummy data)

const INITIAL_DIFFICULTY = 3;
const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '-----',
    hash: 'hash-one',
    difficulty : INITIAL_DIFFICULTY,
    nonce : 0,
    data: []
};

module.exports = { GENESIS_DATA };