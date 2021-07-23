import { IChair } from './IChair';
import { ISofa } from './ISofa';
import { ILowTable } from './ILowTable';
export interface IFurnitureFactory {

  createChaire(): IChair;
  createCoffeeTable(): ILowTable;
  createSofa(): ISofa;
}