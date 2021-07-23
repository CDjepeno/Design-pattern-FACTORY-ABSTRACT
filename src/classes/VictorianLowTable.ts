import { IChair } from '../interface/IChair';
export class VictorianLowTable implements IChair {

  hasLegs() {
    return "La table basse de type modern à des pieds solides"
  }

  sitOn() {
    return "La table basse de type modern est pratique pour le café"
  }
}