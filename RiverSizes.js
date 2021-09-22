//River Sizes

let matrix = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
  ]

  function riverSizes (matrix) {
    let sizes = [];
    let visited = matrix.map(row => row.map(value => false))
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (visited[i][j]) continue;
            calculateRiverSize(matrix, visited, sizes, i, j)
        }
    }
    return sizes;
}      

function calculateRiverSize (matrix, visited, sizes, i, j) {
    let currentRiverSize = 0;
    let nodesToExplore = [[i, j]]
    while (nodesToExplore.length) {
			let current = nodesToExplore.pop();
			i = current[0];
			j = current[1];
        if (visited[i][j]) continue;
        visited[i][j] = true;
        if (matrix[i][j] === 0) continue;
        currentRiverSize++;
        let neighbors = getUnvisitedNeighbors(matrix, visited, i, j) 
        for (const neighbor of neighbors) {
            nodesToExplore.push(neighbor)
        }
    }
    if (currentRiverSize > 0) sizes.push(currentRiverSize)
  }

  function getUnvisitedNeighbors(matrix, visited, i, j) {
      let neighbors = [];
      if (i > 0 && !visited[i - 1][j]) neighbors.push([i - 1, j])
      if (i < matrix.length - 1 && !visited[i + 1][j]) neighbors.push([i + 1, j])
      if (j > 0 && !visited[i][j - 1]) neighbors.push([i, j - 1])
      if (j < matrix[0].length - 1 && !visited[i][j + 1]) neighbors.push([i, j + 1])
      return neighbors;
  }