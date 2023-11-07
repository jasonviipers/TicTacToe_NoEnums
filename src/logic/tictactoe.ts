enum GameError {
  NONE,
  NotValidIndex,
  NotValidGameState,
  IndexAlreadyFilled,
}

export enum WinnerType {
  Player,
  Draw,
  None,
}

enum Player {
  Cross,
  Circle,
}

export enum GameStateKind {
  NotStarted,
  Progress,
  Finished,
}

interface GameNotStarted {
  type: GameStateKind.NotStarted;
}

interface GameInProgress {
  type: GameStateKind.Progress;
  activePlayer: Player;
}

interface GameFinished {
  type: GameStateKind.Finished;
  winner?: Player;
}

type GameState = GameNotStarted | GameInProgress | GameFinished;

const winningCombination = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

export class TicTacToe {
  private gameState: GameState = { type: GameStateKind.NotStarted };
  private field: (Player | null)[] = Array(9);

  getState(): GameState {
    return this.gameState;
  }

  getField() {
    return this.field;
  }

  /**
   * Это функция, которая возращается текущий GameStateKind.
   */
  start() {
    this.gameState = {
      type: GameStateKind.Progress,
      activePlayer: Player.Cross,
    };
    this.field.fill(null);
  }

  /**
   * Это функция, которая возращается текущий GameStateKind.
   * @param {number} index - индекс массива для его отражения на игровом поле Field.
   */
  action(index: number): GameError {
    if (this.gameState.type != GameStateKind.Progress) {
      return GameError.NotValidGameState;
    }
    if (index > 8 || index < 0) {
      return GameError.NotValidIndex;
    }

    if (this.field[index] != null) {
      return GameError.IndexAlreadyFilled;
    }

    this.field[index] = this.gameState.activePlayer;
    const winner = this.getWinner();

    switch (winner) {
      case WinnerType.Player: {
        this.gameState = {
          type: GameStateKind.Finished,
          winner: this.gameState.activePlayer,
        };
        break;
      }

      case WinnerType.Draw: {
        this.gameState = { type: GameStateKind.Finished, winner: 'NONE' };
        break;
      }

      case WinnerType.None: {
        this.gameState = {
          type: GameStateKind.Progress,
          activePlayer:
            this.gameState.activePlayer == Player.Cross
              ? Player.Circle
              : Player.Cross,
        };
        break;
      }
    }
    return GameError.NONE;
  }

  getWinner(): WinnerType {
    for (let index = 0; index < winningCombination.length; index++) {
      const [a, b, c] = winningCombination[index];
      if (
        this.field[a] &&
        this.field[a] === this.field[b] &&
        this.field[a] === this.field[c]
      ) {
        return WinnerType.Player;
      }
    }

    if (this.field.every((item) => item != null)) {
      return WinnerType.Draw;
    }
    return WinnerType.None;
  }
}
