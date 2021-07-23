import { IFurnitureFactory } from '../../interface/IFurnitureFactory';
import { ModernChair } from '../ModernChair';
import { ModernLowTable } from '../ModernLowTable';
import { ModernSofa } from '../ModernSofa';
export class ArtDecoFurnitureFactory implements IFurnitureFactory {

  createChaire() {
    return new ModernChair()
  }

  createCoffeeTable() {
    return new ModernLowTable()
  }

  createSofa() {
    return new ModernSofa()
  }
}