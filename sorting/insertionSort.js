function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
      let numberToInsert = nums[i] // the numberToInsert number we're looking to insert
      let j; // the inner counter
  
      // loop from the right to the left
      for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
        // move numbers to the right until we find where to insert
        nums[j + 1] = nums[j]
      }
  
      // do the insertion
      nums[j + 1] = numberToInsert
    }
    return nums
  }
  

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
const result = insertionSort(nums)
console.log(result)