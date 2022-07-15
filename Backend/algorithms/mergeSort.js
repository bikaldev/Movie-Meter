class MergeSort {
    
    data;

    constructor(data) {
        this.data = data;
    }

    merge = (low, high) => {
        let i = 0,j = 0;
        let result = [];
        while(i < low.length || j < high.length) { 
            let lowData = this.data[String(low[i])];
            let highData =  this.data[String(high[j])];
    
            if(lowData === undefined) {
                for(let k = j; k<high.length; k++) {
                    result.push(high[k]);
                }
                return result;
            }
            if(highData === undefined) {
                for(let k = i; k<low.length; k++) {
                    result.push(low[k]);
                }
                return result;
            }
            lowData = lowData.title;
            highData = highData.title;
            if(lowData === undefined) {
                result.push(high[j]);
                j++;
                continue;
            }
            if(highData === undefined) {
                result.push(low[i]);
                i++;
                continue;
            }
            if(lowData < highData) {
                result.push(low[i]);
                i++;
        
            } else if(lowData > highData) {
                result.push(high[j]);
                j++;
            } else {
                result.push(low[i]);
                result.push(high[j]);
                i++, j++;
            }
        }
        return result;
        
    }
    
    mergeSortRecur = function (l,h, dataL) {
        if(l < h) {
            let mid = Math.floor((l + h)/2);
            let left = this.mergeSortRecur(l,mid, dataL);
            let right = this.mergeSortRecur(mid+1,h, dataL);
            let result = this.merge(left, right);
            return result;
        } else {
            return [dataL[l]];
        }
    }
    
    
    sort = (dataL) => {
       let resultId = this.mergeSortRecur(0, dataL.length-1, dataL);
       return resultId.map((value) => this.data[String(value)]);
    }
    
}



module.exports = MergeSort;

