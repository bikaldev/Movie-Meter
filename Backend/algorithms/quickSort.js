class QuickSort {
    
    data;
    dataList;
    sortBy;

    constructor(data) {
        this.data = data;
    }

    partition = (l,h) => {
        // let pivot = Math.floor((l+h)/2);
        let pivot = l;
        let pivotValue = this.data[String(this.dataList[pivot])][this.sortBy];
        // console.log(pivotValue);
        let i = l, j = h;
        while( i < j) {
            do{
                i++;
            } while(this.data[String(this.dataList[i])][this.sortBy] <= pivotValue);
        
            do {
                j--;
            } while(this.data[String(this.dataList[j])][this.sortBy] > pivotValue);
    
            if(i < j) {
                let temp = this.dataList[i];
                this.dataList[i] = this.dataList[j];
                this.dataList[j] = temp;
            }
        }
        let temp = this.dataList[j];
        this.dataList[j] = this.dataList[pivot];
        this.dataList[pivot] = temp;
        return j;
    }
    
    quickSortRecur = (l,h) => {
        if(l < h) {
            let j = this.partition(l,h);
            this.quickSortRecur(l,j);
            this.quickSortRecur(j+1, h);
        }
    }

    sort = (dataList, sortBy) => {
        this.sortBy = sortBy;
        this.dataList = dataList;
        this.dataList.push(-1);
        this.quickSortRecur(0, this.dataList.length-1);
        this.dataList.pop();
        return this.dataList.map((val)  => this.data[String(val)] );
    }
    
}

module.exports = QuickSort;