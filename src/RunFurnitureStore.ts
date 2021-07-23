import { ArtDecoSofa } from './classes/ArtDecoSofa';
import { ArtDecoLowTable } from './classes/ArtDecoLowTable';
export class RunFurniture {
  main() {
    const sofa = new ArtDecoSofa()
    return sofa.hasLegs()
  }

  main1() {
    const sofa = new ArtDecoLowTable()
    return sofa.hasLegs()
  }


}