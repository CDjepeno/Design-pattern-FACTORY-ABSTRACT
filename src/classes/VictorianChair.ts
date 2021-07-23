import { IChair } from './../interface/IChair';
export class VictorianChair implements IChair {

  hasLegs() {
    return "La chaise de type victorien à des pieds solides"
  }

  sitOn() {
    return "La chaise de type victorien est confortable à l'assise"
  }
}