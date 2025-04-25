declare function getChunkSize(): number;
declare function setChunkSize(size: number): number;
declare function add(a: unknown[], prop: unknown, start: number): unknown[];
declare function chunk(rows: any[], size?: number): any[];
declare function checkCommonValues(a: any[], b: any[]): boolean;
declare function getCommonValues(a: any[], b: any[]): any[];
declare function deleteProps(arr: Record<string, any>[], props: string[]): Record<string, any>[];
declare function flatten(chunks: any[]): any[];

export { 
  getChunkSize,
  setChunkSize,
  add,
  chunk,
  deleteProps,
  checkCommonValues,
  getCommonValues,
  flatten
};
