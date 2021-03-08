/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ISorter<T> {
    property: Extract<keyof T, string | number | Date>;
    isDescending: boolean;
}

export function genericSort<T>(
  objectA: T,
  objectB: T,
  sorter: ISorter<T>
) : any {
  const result = () => {
    if (objectA[sorter.property] > objectB[sorter.property]) {
        return 1;
    } else if (objectA[sorter.property] < objectB[sorter.property]) {
        return -1;
    } else {
        return 0;
    }
  }
  return sorter.isDescending ? result() * -1 : result();
}