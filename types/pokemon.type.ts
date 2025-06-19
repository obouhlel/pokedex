export interface Pokemon {
  pokedex_id: number;
  generation: number;
  category: string;
  name: {
    fr: string;
    en: string;
    jp: string;
  };
  sprites: {
    regular: string;
    shiny: string;
    gmax: string | null;
  };
  types: {
    name: string;
    image: string;
  }[];
  talents: {
    name: string;
    tc: boolean;
  }[];
  stats: {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
  };
  resistances: {
    name: string;
    multiplier: number;
  }[];
  evolution: {
    pre: null | {
      pokedex_id: number;
      name: string;
      condition: string;
    };
    next: {
      pokedex_id: number;
      name: string;
      condition: string;
    }[] | null;
    mega: null | any; // Define specific type if needed
  };
  height: string;
  weight: string;
  egg_groups: string[];
  sexe: {
    male: number;
    female: number;
  };
  catch_rate: number;
  level_100: number;
  formes: null | any; // Define specific type if needed
}
