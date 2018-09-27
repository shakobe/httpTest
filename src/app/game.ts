// game.ts

export interface Teams {
  name?: string;
  status?: string;
}

export interface Game {
  id: number;
  week: number;
  endedTime: number;
  teams: Teams[];
}


