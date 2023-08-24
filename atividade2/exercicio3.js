let A = [
    [1, 3],
    [2, 5]
  ];
  let B = [
    [2, 2],
    [0, 1]
  ];
  
  if (A[0].length !== B.length) {
    console.log("Não é possível calcular");
  } else {
    let C = new Array(A.length);
    for (let i = 0; i < C.length; i++) {
      C[i] = new Array(B[0].length);
      for (let j = 0; j < C[i].length; j++) {
        C[i][j] = 0;
        for (let k = 0; k < A[0].length; k++) {
          C[i][j] += A[i][k] * B[k][j];
        }
      }
    }
  
    console.log("Matriz A:");
    for (let i = 0; i < A.length; i++) {
      console.log(A[i]);
    }

    console.log("\nMatriz B:");
    for (let i = 0; i < B.length; i++) {
      console.log(B[i]);
    }

    console.log("\nMatriz C:");
    for (let i = 0; i < C.length; i++) {
      console.log(C[i]);
    }

  }
  