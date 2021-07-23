import { IChair } from '../interface/IChair';
export class VictorianSofa implements IChair {

  hasLegs() {
    return "Le sofa de type modern à des pieds solides"
  }

  sitOn() {
    return "Le sofa de type modern est pas mal à l'assise"
  }
}