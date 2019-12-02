const Blockchain = require('./blockchain');
const Block = require('./block');

const blockchain = new Blockchain();

const newData1 = 'Terry Williams, 05/05/1995, 15412368740'; 
const newData2 = 'Candice Yu, 01/23/1965, 19426789510'; 
const newData3 = 'Jerry Parker, 03/29/1999, 12648951230';

const newSCdata1 = 'SC1,Tim Juniour,02/23/1990,12456987156';
const newSCdata2 = 'SC2,Jessica Hollins,Halifax,14597';
const newSCdata3 = 'SC3,Harry West,Toronto,16516';

const newSCformat1 = 'SC1,name,dob,id'
//blockchain.addSmartContract(newSCformat1); // after this, blockchain has a block containeing this smart contract SC1

const newSCformat2 = 'SC2,name,location,id'
//blockchain.addSmartContract(newSCformat2); // after this, blockchain has a block containeing this smart contract SC2 & SC1

//const newfindSC1 = 'SC1,Tim Juniour,02/23/1990,12456987156';

blockchain.addBlock({data: newData1});
blockchain.addBlock({data: newData2});
blockchain.addBlock({data: newData3});

blockchain.addSmartContract({data: newSCdata1});
blockchain.addSmartContract({data: newSCdata2});
blockchain.addSmartContract({data: newSCdata3});

//const getPatient = 'SC3|John|';
//blockchain.get_patient({data: getPatient});

console.log(blockchain);