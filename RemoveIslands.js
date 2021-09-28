// removeIslands
function removeIslands(matrix) {
  let visited = matrix.map(row => row.map(value => false))
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (!visited[i][j]) {
              traverseMatrix(i, j, matrix, visited)
          }
      }
  }
return matrix;
}

function traverseMatrix(i, j, matrix, visited) {
  let islandsCoordinates = [];
  //let currentNode = [i, j];
  let nodesToExplore = [[i, j]];
  while (nodesToExplore.length) {
      let currentNode = nodesToExplore.pop();
      i = currentNode[0];
      j = currentNode[1];
      if (visited[i][j]) continue;
      visited[i][j] = true;
      if (matrix[i][j] === 0) continue;
      islandsCoordinates.push([i, j])
      console.log(islandsCoordinates)
      let unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited)
      for (const neighbor of unvisitedNeighbors) {
          nodesToExplore.push(neighbor)
      }
  }
  //console.log(islandsCoordinates)
  let isBorder = false;
  if (islandsCoordinates.length) {
      for (const node of islandsCoordinates) {
          
          if (node[0] === 0 || node[0] === matrix.length - 1) isBorder = true;
          if (node[1] === 0 || node[1] === matrix[0].length - 1) isBorder = true;
      // }
      // if (islandsCoordinates.length && !islandsCoordinates.includes(0) && !islandsCoordinates.includes(matrix.length - 1) && !islandsCoordinates.includes(matrix[0].length - 1)) {
          
      }
  }
  if (!isBorder) turnBlackToWhite(islandsCoordinates, matrix)
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  let unvisitedNeighbors = [];
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
  if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j]);
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1]);
  return unvisitedNeighbors;
}

function turnBlackToWhite(islandsCoordinates, matrix) {
  //console.log(islandsCoordinates)
  for (const node of islandsCoordinates) {
      let i = node[0];
      let j = node[1];
      matrix[i][j] = 0;
  }
  return matrix;
}