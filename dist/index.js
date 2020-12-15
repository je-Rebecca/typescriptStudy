"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJs = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJs.SHA256(index + previousHash + timestamp + data).toString();
Block.validateStructure = (aBlock) => {
    typeof aBlock.index === "number" &&
        typeof aBlock.hash === "string" &&
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";
};
const genBlock = new Block(0, "220", "", "first", 12345);
let blockchain = [genBlock];
const getBlockChain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previosBlock = getLatestBlock();
    const newIndex = previosBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previosBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previosBlock.hash, data, newTimestamp);
    return newBlock;
};
const getHashforBlck = { aBlock: Block }, string;
Block.calculateBlockHash(aBlock.index);
const isBlockValid = (candidateBlock, previousBlock) => {
    if (Block.validateStructure(candidateBlock)) {
        return false;
    }
    else if (previousBlock.index + 1 === candidateBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    }
    else if (getHashforBlck(candidateBlock !== candidateBlock.hash)) {
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
    export {};
};
//# sourceMappingURL=index.js.map