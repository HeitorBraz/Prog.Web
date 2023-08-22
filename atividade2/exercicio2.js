let A = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  
  console.log("Matriz A:");
  for (let i = 0; i < A.length; i++) {
    console.log(A[i]);
  }
  
  let transposta = A[0].map((_, colIndex) => A.map(row => row[colIndex]));
  
  console.log("Transposta de A:");
  for (let i = 0; i < transposta.length; i++) {
    console.log(transposta[i]);
  }
  