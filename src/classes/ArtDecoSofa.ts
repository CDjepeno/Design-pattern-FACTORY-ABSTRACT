import { IChair } from '../interface/IChair';
export class ArtDecoSofa implements IChair {

  hasLegs() {
    return "Le sofa de type art et deco à des pieds solides"
  }

  sitOn() {
    return "Le sofa de type art et deco est pas mal à l'assise"
  }
}