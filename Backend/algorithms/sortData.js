const data = require('../data/filmData.json');
const MergeSort = require('./mergeSort');
const QuickSort = require('./quickSort');
const RadixSort = require('./radixSort');


const sortData = (sortBy, allData ,genreList, genreLogic, startYear, endYear, startRating, endRating) => {
    let dataList = [];
    if(allData) {

        for(let i = 0; i< Object.keys(data).length-1; i++) {
            dataList.push(i);
        }

    } else {
        genreList = String(genreList).split(',');
        
        for(let i = 0; i< Object.keys(data).length-1;i++) {
            let dataItem = data[String(i)];
            
            if(!dataItem[sortBy]) {
                continue;
            }

            let keepItem = true;
            if(genreList[0] !== 'all') 
            { 
                if(genreLogic === 'and') {
                    for(let genre of genreList) {
                        if((dataItem.genre.toLowerCase()).includes(genre)){
                            keepItem = true;
                        } else {
                            keepItem = false;
                            break;
                        }
                    }   
                } else {
                    for(let genre of genreList) {
                        if(dataItem.genre.toLowerCase().includes(genre)) {
                            keepItem = true;
                            break;
                        } else {
                            keepItem = false;
                        }
                    }
                }
            }
            if(keepItem) {
                if(dataItem.avgRating >= startRating && dataItem.avgRating <= endRating && dataItem.year >= startYear && dataItem.year <= endYear) {
                dataList.push(i);
                }
            }
        }
    }
    let sortingAlgo;
    switch(sortBy) {
        case 'title':
            sortingAlgo = new MergeSort(data);
            return sortingAlgo.sort(dataList);
        case 'year':
            sortingAlgo = new RadixSort(data);
            return sortingAlgo.sort(dataList, 10, 4);
        default:
            sortingAlgo = new QuickSort(data);
            return sortingAlgo.sort(dataList, sortBy);
    }
}

// console.log(sortData('avgRating', false, 'all','or',2020,2021,80,95))


module.exports = sortData;