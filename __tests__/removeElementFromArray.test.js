import removeElement from '../src/twoPointers/removeElementFromArray';

describe('test function removeElement', () => {
  test('should remove all instances of val from array', () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const result = removeElement(nums, val);
    
    expect(result).toBe(2);
    expect(nums.slice(0, result)).toEqual([2, 2]);
  });

  test('should return 0 when all elements are removed', () => {
    const nums = [1, 1, 1];
    const val = 1;
    const result = removeElement(nums, val);
    
    expect(result).toBe(0);
  });

  test('should return array length when no elements match', () => {
    const nums = [1, 2, 3, 4, 5];
    const val = 6;
    const result = removeElement(nums, val);
    
    expect(result).toBe(5);
    expect(nums.slice(0, result)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle empty array', () => {
    const nums = [];
    const val = 1;
    const result = removeElement(nums, val);
    
    expect(result).toBe(0);
  });

  test('should handle single element array with match', () => {
    const nums = [1];
    const val = 1;
    const result = removeElement(nums, val);
    
    expect(result).toBe(0);
  });

  test('should handle single element array without match', () => {
    const nums = [1];
    const val = 2;
    const result = removeElement(nums, val);
    
    expect(result).toBe(1);
    expect(nums.slice(0, result)).toEqual([1]);
  });

  test('should remove elements from beginning of array', () => {
    const nums = [1, 1, 2, 3, 4];
    const val = 1;
    const result = removeElement(nums, val);
    
    expect(result).toBe(3);
    expect(nums.slice(0, result)).toEqual([2, 3, 4]);
  });

  test('should remove elements from end of array', () => {
    const nums = [1, 2, 3, 4, 4, 4];
    const val = 4;
    const result = removeElement(nums, val);
    
    expect(result).toBe(3);
    expect(nums.slice(0, result)).toEqual([1, 2, 3]);
  });

  test('should remove elements scattered throughout array', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const result = removeElement(nums, val);
    
    expect(result).toBe(5);
    expect(nums.slice(0, result)).toEqual([0, 1, 3, 0, 4]);
  });
});
