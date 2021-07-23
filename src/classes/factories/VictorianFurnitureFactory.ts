import { VictorianChair } from './../VictorianChair';
import { IFurnitureFactory } from '../../interface/IFurnitureFactory';
import { VictorianLowTable } from '../VictorianLowTable';
import { VictorianSofa } from '../VictorianSofa';
export class VictorianFurnitureFactory implements IFurnitureFactory {

  createChaire() {
    return new VictorianChair()
  }

  createCoffeeTable() {
    return new VictorianLowTable()
  }

  createSofa() {
    return new VictorianSofa()
  }
}