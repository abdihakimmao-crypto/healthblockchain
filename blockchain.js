const Block = require('./block');

class Blockchain {

    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock({ data }) {
        const newBlock = Block.mineBlock({
            lastBlock: this.chain[this.chain.length-1],
            data
            
        });

        this.chain.push(newBlock);
    }
    addSmartContract({data}) {
        console.log("hellooo");
        const parsedata = data.split(',');  

        if ((parsedata[0] !== "SC1") && (parsedata[0] !== "SC2") && (parsedata[0] !== "SC3")) {
            
            console.log("the type");
            return false;

        }
        
        var letters = /^[A-Za-z ]+$/;

        for(let i=0; i<parsedata[1].length; i++){
            if(parsedata[1][i].match(letters) == false && parsedata[1][i] != ' ' ){
                console.log("ERROR Name: ", parsedata[1]);
            return false;
            }
        }
      
        if (parsedata[0] !== "SC1") {
            
            if (parsedata[2].match(/^\d\d[/]\d\d[/]\d\d\d\d $/)) {
                console.log("dob is wrong");
                return false;
            }
            if(parsedata[3].match(/^\d{12}$/)){
                console.log("id is wrong");
                return false;
            }
        }
        else{
            if (parsedata[2].match(/^[A-Za-z]+$/)) {
                console.log("location is wrong");
                return false;
            }
            if(parsedata[3].match(/^\d{5}$/)){
                console.log("id is wrong");
                return false;
            }
        }
        
        this.addBlock({data});

        console.log("This works!");
        
    }   
    
}

module.exports = Blockchain;

