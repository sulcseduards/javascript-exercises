/**
 * Minesweeper
 *
 * Add the numbers to a minesweeper board.
 *
 * Minesweeper is a popular game where the user has to find the mines using numeric hints that indicate how many mines are directly adjacent (horizontally, vertically, diagonally) to a square.
 *
 *In this exercise you have to create some code that counts the number of mines adjacent to a square and transforms boards like this (where * indicates a mine):
 *
 *      +-----+
 *      | * * |
 *      |  *  |
 *      |  *  |
 *      |     |
 *      +-----+
 *
 * into this:
 *
 *      +-----+
 *      |1*3*1|
 *      |13*31|
 *      | 2*2 |
 *      | 111 |
 *      +-----+
 */

export const annotate = field => {
    let field2d = field.map(item => [...item]);
    let neighbors = (i, j, lim_i, lim_j) => {
      return [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j - 1],
        [i, j],
        [i, j + 1],
        [i + 1, j - 1],
        [i + 1, j],
        [i + 1, j + 1]
      ].filter(x => x.every(v => v >= 0) && x[0] <= lim_i && x[1] <= lim_j);
    };
    for (let i = 0; i < field2d.length; i++) {
      for (let j = 0; j < field2d[i].length; j++) {
        if (field2d[i][j] === "*") {
          let sur = neighbors(i, j, field2d.length - 1, field2d[i].length - 1);
          sur.forEach(cell => {
            let [x, y] = cell;
            field2d[x][y] === "*" ? "" : field2d[x][y]++;
          });
        }
      }
    }
  
    return field2d.map(row => row.join(""));
  };