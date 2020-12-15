import * as CryptoJs from "crypto-js";

class Block{
    public index: number;
    public hash: string;
    public previousHash:string;
    public data:string;
    public timestamp: number;
    
    static calculateBlockHash =(

        index: number,
        previousHash: string,
        timestamp: number,
        data:string
    ): string => 
    CryptoJs.SHA256(index + previousHash+timestamp +data).toString();
        
    static validateStructure =(aBlock :Block) : boolean =>{
        typeof aBlock.index === "number" &&
        typeof aBlock.hash === "string" &&
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";

    }
    constructor(
        index: number,
        hash: string,
        previousHash:string,
        data:string,
        timestamp: number
    ){
        this.index = index; 
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genBlock:Block = new Block(0,"220","","first",12345);
let blockchain:[Block] = [genBlock];

const getBlockChain =():Block[] => blockchain;
const getLatestBlock =():Block => blockchain[blockchain.length -1];
const getNewTimeStamp =():number => Math.round(new Date().getTime()/1000);
const createNewBlock =(data : string): Block => {
    const previosBlock: Block = getLatestBlock();
    const newIndex: number = previosBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex,
        previosBlock.hash,
        newTimestamp,
        data
      );
    const newBlock :Block = new Block(newIndex, newHash, previosBlock.hash, data, newTimestamp);
    return newBlock;
};
const getHashforBlck ={aBlock:Block}:string => Block.calculateBlockHash(aBlock.index, )


const isBlockValid =(candidateBlock :Block, previousBlock:Block): boolean =>{
    if(Block.validateStructure(candidateBlock)){
        return false;
    }else if(previousBlock.index +1 === candidateBlock.index){
        return false;
    }else if(previousBlock.hash !== candidateBlock.previousHash){
        return false;
    }else if(getHashforBlck(candidateBlock !== candidateBlock.hash){
        return false;
    }else{
        return true;
    }
};


const addBlock = (candidateBlock: Block): void => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
      blockchain.push(candidateBlock);
    }	  
export {};