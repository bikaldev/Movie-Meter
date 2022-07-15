const Stack = require('./Stack');

class RadixSort {
    data;

    constructor(data) {
        this.data = data;
    }
    
    radixSortAlgo = (dataL, base, noOfDigit) => {
        let bucket = [];
        for(let i = 0; i< base; i++) {
            bucket.push(new Stack([]));
        }
        let k = 1;
        for(let j = 0 ; j < noOfDigit; j ++) {
            while(!dataL.isEmpty()) {
                
                let val = dataL.pop();
                // console.log(val);
                let rateVal = Number(this.data[String(val)].year);
                let switchVal = Math.floor(rateVal / k) % base;
                (bucket[switchVal]).push(val);
        
            }
            for(let i = 0; i < base; i++) {
                while(!bucket[i].isEmpty()) {
                    dataL.push(bucket[i].pop());
                }
            }
            k = k * base;
        }
        return dataL;
    }

    sort = (dataList, base, noOfDigit) => {
        dataList = new Stack(dataList);
        let result = this.radixSortAlgo(dataList, base, noOfDigit);
        return (result.arr).map((val) => this.data[String(val)]);
    }

}

module.exports = RadixSort;