import { IChair } from '../interface/IChair';
export class ArtDecoChair implements IChair {

  hasLegs() {
    return "La chaise de type art et deco à des pieds solides"
  }

  sitOn() {
    return "La chaise de type art et deco est pas mal à l'assise"
  }
}