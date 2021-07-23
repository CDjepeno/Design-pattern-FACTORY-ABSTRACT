import { IChair } from '../interface/IChair';
export class ModernChair implements IChair {

  hasLegs() {
    return "La chaise de type modern à des pieds solides"
  }

  sitOn() {
    return "La chaise de type modern est pas mal à l'assise"
  }
}