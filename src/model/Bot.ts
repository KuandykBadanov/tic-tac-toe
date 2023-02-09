import Player from "./Player";
import { PIECE } from "./types";

class Bot extends Player {
  constructor(name: string, avatarUrl: string) {
    super(name, avatarUrl);
  }

  move(board: PIECE[]) {
    const randomIndex = Math.floor(Math.random()*board.length);
    return randomIndex;
  }
}

export default Bot;
