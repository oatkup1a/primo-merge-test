import { merge } from './merge';

describe('merge', () => {
  test('merges three sorted arrays correctly', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [9, 7, 4];

    const result = merge(collection_1, collection_2, collection_3);
    const expected_result = [1, 2, 3, 4, 4, 5, 6, 7, 9];

    expect(result).toEqual(expected_result);
  });

  test('merges sorted arrays with an empty array correctly', () => {
    const collection_1: number[] = [1, 5, 9];
    const collection_2: number[] = [2, 4, 6];
    const collection_3: number[] = [];

    const result = merge(collection_1, collection_2, collection_3);
    const expected_result = [1, 2, 4, 5, 6, 9];

    expect(result).toEqual(expected_result);
  });

  test('merges all empty arrays correctly', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];

    const result = merge(collection_1, collection_2, collection_3);
    const expected_result: number[] = [];

    expect(result).toEqual(expected_result);
  });

  test('merges arrays with different lengths correctly', () => {
    const collection_1: number[] = [1, 3, 8];
    const collection_2: number[] = [2, 5];
    const collection_3: number[] = [9, 7, 4, 3, 2, 1];

    const result = merge(collection_1, collection_2, collection_3);
    const expected_result = [1, 1, 2, 2, 3, 3, 4, 5, 7, 8, 9];

    expect(result).toEqual(expected_result);
  });
  
});
