import Player from "./Player";
import { PIECE } from "./types";

class Bot extends Player {
  constructor(name: string, avatarUrl: string) {
    super(name, avatarUrl);
  }

  move(board: PIECE[]) {
    for (let i = 0; i < 9; i++) {
      if (board[i] == 0) {
        return 2;
      } else {
        return 5;
      }
    }
    return 0;

    // const randomInd = Math.floor(Math.random()*board.length);
    // return randomInd;

    
  }
}

export default Bot;
