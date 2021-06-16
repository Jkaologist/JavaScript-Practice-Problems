/**
Given two sparse vectors, compute their dot product.

Implement class SparseVector:

sparseVector(nums) Initializes the object with the vector nums

dotProduct(vec) Compute the dot product between the 
instance of SparseVector and vec

A sparse vector is a vector that has mostly zero values, 
you should store the sparse vector efficiently and 
compute the dot product between two SparseVector.

Follow up: What if only one of the vectors is sparse? */

// O(N) TC with O(1) SC
class SparseVector {
  constructor(nums) {
    this.nums = nums 
  }

  dotProduct(vec) {
    let result = 0
    for (let i = 0; i < vec.length; i++) {
      result += this.nums[i] * vec[i]
    }
    return result
  }
}

module.exports = SparseVector