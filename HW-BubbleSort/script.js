function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1 - j; j++) {
         if (arr[j] > arr[j+1]){
             const tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
            }
        }

    }
    console.log(arr);

}
const arr = [9,2,4,1,5,2,9,1,2,0];
bubbleSort(arr);