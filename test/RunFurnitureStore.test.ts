import { VictorianChair } from './../src/classes/VictorianChair';
import { ModernFurnitureFactory } from '../src/classes/factories/ModernFurnitureFactory';
import { VictorianLowTable } from '../src/classes/VictorianLowTable';
import { ModernChair } from '../src/classes/ModernChair';
import { ModernLowTable } from '../src/classes/ModernLowTable';
import { ModernSofa } from '../src/classes/ModernSofa';
import { VictorianSofa } from '../src/classes/VictorianSofa';
import { ArtDecoChair } from '../src/classes/ArtDecoChair';
import { ArtDecoLowTable } from '../src/classes/ArtDecoLowTable';
import { ArtDecoSofa } from '../src/classes/ArtDecoSofa';
import { RunFurniture } from '../src/RunFurnitureStore';
describe('VictorianChair classe', () => {
  it("Should VictorianChair create", () => {
    const victorian = new VictorianChair()

    expect(victorian).toBeDefined()
  })
  it("Should VictorianChair hasLegs method return 'La chaise de type victorien à des pieds solides'", () => {
    const victorian = new VictorianChair()
    const result = victorian.hasLegs()

    expect(result).toBe("La chaise de type victorien à des pieds solides")
  })
  it("Should VictorianChair sitOn method return 'La chaise de type victorien est confortable à l'assise'", () => {
    const victorian = new VictorianChair()
    const result = victorian.sitOn()

    expect(result).toBe("La chaise de type victorien est confortable à l'assise")
  })
  
})

describe('ModernChair classe', () => {
  it("Should ModernChair create", () => {
    const modern = new ModernChair()

    expect(modern).toBeDefined()
  })
  it("Should ModernChair hasLegs method return 'La chaise de type modern à des pieds solides'", () => {
    const modern = new ModernChair()
    const result = modern.hasLegs()

    expect(result).toBe("La chaise de type modern à des pieds solides")
  })
  it("Should ModernChair sitOn method return 'La chaise de type modern est pas mal à l'assise'", () => {
    const modern = new ModernChair()
    const result = modern.sitOn()

    expect(result).toBe("La chaise de type modern est pas mal à l'assise")
  })
})

describe('ArtDecoChair classe', () => {
  it("Should ArtDecoChair create", () => {
    const modern = new ArtDecoChair()

    expect(modern).toBeDefined()
  })
  it("Should ArtDecoChair hasLegs method return 'La chaise de type art et deco à des pieds solides'", () => {
    const modern = new ArtDecoChair()
    const result = modern.hasLegs()

    expect(result).toBe("La chaise de type art et deco à des pieds solides")
  })
  it("Should ArtDecoChair sitOn method return 'La chaise de type art et deco est pas mal à l'assise'", () => {
    const modern = new ArtDecoChair()
    const result = modern.sitOn()

    expect(result).toBe("La chaise de type art et deco est pas mal à l'assise")
  })
})

describe('ArtDecoLowTable classe', () => {
  it("Should ArtDecoChair create", () => {
    const modern = new ArtDecoLowTable()

    expect(modern).toBeDefined()
  })
  it("Should ArtDecoLowTable hasLegs method return 'La table basse de type art et deco à des pieds solides'", () => {
    const modern = new ArtDecoLowTable()
    const result = modern.hasLegs()

    expect(result).toBe("La table basse de type art et deco à des pieds solides")
  })
  it("Should ArtDecoLowTable sitOn method return 'La chaise de type art et deco est pas mal à l'assise'", () => {
    const modern = new ArtDecoLowTable()
    const result = modern.sitOn()

    expect(result).toBe("La table basse de type art et deco est pratique pour le café")
  })
})

describe('ModernSofa classe', () => {
  it("Should ModernSofa create", () => {
    const modern = new ModernSofa()

    expect(modern).toBeDefined()
  })
  it("Should ModernSofa hasLegs method return 'Le sofa de type modern à des pieds solides'", () => {
    const modern = new ModernSofa()
    const result = modern.hasLegs()

    expect(result).toBe("Le sofa de type modern à des pieds solides")
  })
  it("Should ModernSofa sitOn method return 'Le sofa de type modern est pas mal à l'assise'", () => {
    const modern = new ModernSofa()
    const result = modern.sitOn()

    expect(result).toBe("Le sofa de type modern est pas mal à l'assise")
  })
})

describe('VictorianSofa classe', () => {
  it("Should VictorianLowTable create", () => {
    const victorian = new VictorianSofa()

    expect(victorian).toBeDefined()
  })
  it("Should VictorianSofa hasLegs method return 'Le sofa de type modern à des pieds solides'", () => {
    const victorian = new VictorianSofa()
    const result = victorian.hasLegs()

    expect(result).toBe("Le sofa de type modern à des pieds solides")
  })
  it("Should VictorianSofa sitOn method return 'Le sofa de type modern est pas mal à l'assise'", () => {
    const victorian = new VictorianSofa()
    const result = victorian.sitOn()

    expect(result).toBe("Le sofa de type modern est pas mal à l'assise")
  })
  
})

describe('ArtDecosofa classe', () => {
  it("Should ArtDecoSofa create", () => {
    const modern = new ArtDecoSofa()

    expect(modern).toBeDefined()
  })
  it("Should ArtDecoSofa hasLegs method return 'Le sofa de type art et deco à des pieds solides'", () => {
    const modern = new ArtDecoSofa()
    const result = modern.hasLegs()

    expect(result).toBe("Le sofa de type art et deco à des pieds solides")
  })
  it("Should ArtDecoSofa sitOn method return 'Le sofa de type art et deco est pas mal à l'assise'", () => {
    const modern = new ArtDecoSofa()
    const result = modern.sitOn()

    expect(result).toBe("Le sofa de type art et deco est pas mal à l'assise")
  })
})


describe('Run FurnitureStore', () => {
  it("Should RunFurniture create", () => {
    const run = new RunFurniture()

    expect(run).toBeDefined()
  })
  it("Should main1 method return 'Le sofa de type art et deco à des pieds solides'", () => {
    const modern = new RunFurniture()
    const result = modern.main()

    expect(result).toBe("Le sofa de type art et deco à des pieds solides")
  })
  it("Should main1 method return 'Le sofa de type art et deco à des pieds solides'", () => {
    const modern = new RunFurniture()
    const result = modern.main1()

    expect(result).toBe("La table basse de type art et deco à des pieds solides")
  })
})

