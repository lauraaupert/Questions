// heap sort

function heapify(array, length, i) {
    let largest = i;
    let left = i * 2 + 1;
    let right = left + 1;

    if (left < length && array[left] > array[largest]) {
        largest = left;
    }
    if (right < length && array[right] > array[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        heapify(array, length, largest)
    }
}

function heapSort(array) {
    let length = array.length;
    let i = Math.floor(length / 2 - 1);
    let k = length - 1;

    while (i >= 0) {
        heapify(array, length, i);
        i--;
    }
    while (k >= 0) {
        [array[0], array[k]] = [array[k], array[0]];
        heapify(array, k, 0);
        k--;
    }
    return array;
}