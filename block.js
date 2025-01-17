const { GENESIS_BLOCK } = require('./genesis.js');
const cryptoHash = require('./crypto-hash');

class Block {
    constructor({timestamp, lastHash, hash, data, dsign}) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.dsign = dsign;
    }

    static genesis() {
        return new this(GENESIS_BLOCK);
    }
    
    static mineBlock({lastBlock, data}) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const dsign = lastBlock.dsign
        return new this({
            timestamp,
            lastHash,
            data,
            dsign,
            hash: cryptoHash(timestamp, lastHash, data)
        });
    }
}

module.exports = Block;

