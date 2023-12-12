// pr1

// function Pow(a, n){
//     return a ** n
// }

// let res = Pow(3, 5)
// console.log( res)

// pr2

// function  mean(a, b){
//     let M = (a + b) / 2;
//     let G = (a * b) ** (1/ 2)
//     console.log(M, G)
// }

//  mean(12, 48)

// pr3

// function sign(n) {
//   if (n > 0) {
//     return 1;
//   } else if (n === 0) {
//     return 0;
//   } else if (n < 0) {
//     return -1;
//   }
//   else {
//     return;
//   }
// }
// let res = sign(1234354);
// console.log(res);

// pr4

// function numberOfRoots(A, B, C){
//     let D = B ** 2 - 4 * A * C;
//     if (D > 0){
//         return "ildizlari soni 2 ta"
//     }
//     else if (D < 0){
//         return "ildizi yo'q"
//     }
//     else if (D === 0){
//         return "ildizlari soni 1 ta"
//     }
// }
// let res = numberOfRoots(8, 1, 1)
// console.log(res)

// pr5

// function areaCircle(R) {
//     let S = Math.PI * R ** 2;
//     return S;
// }
// let res = areaCircle(10);
// console.log(res, "sq.unit")

// pr6

// function sumRange(A, B) {
//     if (A > B){
//         return 0;
//     }
//     else if (A < B){
//       let sum = 0;
//       for (let i = A; i <= B; i++){
//         sum += i;
//       }
//       return sum;
//     }
// }
// let res = sumRange(8, 10)
// console.log(res)

// pr7

// function calc(A, B, S) {
//     if (S === '*'){
//         return "kopaytma: " + A * B
//     }
//     else if (S === '+'){
//         return A + B
//     }
//     else if (S ==='/'){
//         return A / B
//     }
//     else if (S ==='-'){
//         return A - B
//     }
//     else {
//         return 0;
//     }
// }
// let res = calc(12, 3, '*')
// console.log(res)

// pr8

// function isEven(K){
//     if(K % 2 === 0){
//         return true;
//     }
//     else if (K % 2 === 1){
//         return false
//     }
//     else {
//         return "butun son kiriting..."
//     }
// }

// let res = isEven(112.78)
// console.log(res)

// pr9

// function sortABC(a, b, c) {
//   if (a >= b) {
//     if (a >= c) {
//       if (c >= b) {
//         console.log(b, c, a);
//       } else {
//         console.log(c, b, a);
//       }
//     } else {
//       console.log(b, a, c);
//     }
//   } else {
//     if (b >= c) {
//       if (a >= c) {
//         console.log(c, a, b);
//       } else {
//         console.log(a, c, b);
//       }
//     } else {
//       console.log(a, b, c);
//     }
//   }
// }
// sortABC(7, 9, 8)

// pr10

// function  isPowerN(K, N) {
//     while ( K > 1 ){
//         K = K / N;
//     }
//     console.log(K)
//     if (Math.floor(K) === K){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let res = isPowerN(27, 27)
// console.log(res)

// pr11

// function isPrime(N) {
//   let c = 0;
//   for (let i = 1; i <= N; i++) {
//     if(N % i === 0){
//         c++;
//     }
//   }
//   if (c === 2){
//     return true;
//   }
//   else {
//     return false
//   }
// }
// let res = isPrime(7);
// console.log(res);

// pr12

// function numberOfPrime(N) {
//   let n = 0;
//   for (let i = 1; i <= N; i++) {
//     let c = 0;
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) {
//         c++;
//       }
//     }
//     if (c === 2) {
//       n++;
//     }
//   }
//   return n;
// }
// let res = numberOfPrime(10);
// console.log(res, "ta tub son bor.");

// pr13

// function digitNth(K, N) {
//   let n = 0;
//   let k = K;
//   while (k != 0) {
//     k = Math.floor(k / 10);
//     n++;
//   }
//   if (n >= N) {
//     N = Math.floor(K / (10 ** (n - N))) % 10;
//     return N;
//   } else {
//     return -1;
//   }
// }
// let res = digitNth(123245, 9);
// console.log(res);

// pr14

// function inverseNumber(N) {
//   let reverse = "";
//   let k;
//   while (N != 0) {
//     k = N % 10;
//     N = Math.floor(N / 10);
//     reverse += k;
//   }
//   return reverse;
// }

// let res = inverseNumber(56814);
// console.log(res);

// // pr15

// function inverseNumber(N) {
//   let reverse = "";
//   let k;
//   let n = N;
//   while (n != 0) {
//     k = n % 10;
//     n = Math.floor(n / 10);
//     reverse += k;
//   }
//   if ( +reverse === N){
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// let res = inverseNumber(1678761);
// console.log(res);

// pr16

// function factorial(N){
//  if(N > 0 && Math.floor(N) === N){
//     mul = 1;
//     for (let i = 1; i <= N; i++){
//         mul *= i;
//     }
//     return mul;
//  }
//  else if (N <= 0){
//     return 1;
//  }
// }
// let res = factorial(-1);
// console.log("Faktoriali:",res);

// pr17

// function getSum3(N){
//     sum = 0;
//     for (let i = 3; i<= N; i +=3){
//         sum += i;
//     }
//     return sum;
// }

// let res = getSum3(6)
// console.log(res)

// pr18

// function sumOddEven(N) {
//    sumodd = 0;
//    sumeven = 0;
//    for(let i = 2; i <= N; i+= 2){
//     sumeven += i;
//    }
//    for(let i = 1; i <= N; i+= 2){
//     sumodd += i;
//    }
//    console.log(sumeven, sumodd)
// }
// sumOddEven(10)

// pr19
// function invertTime(H, M, S){
//     T = 3600 * H + M * 60 + S
//     return T;
// }

// let res =  invertTime(0, 6, 40)
// console.log(res,"sekund")

// pr20

// function Zero(j){
//     if(j < 10){
//         return "0" + j;
//     }
//     else {
//         return j
//     }
// }
// function decTime(H, M, S){
//     S-= 1;
//     if (S === -1){
//         S = 59;
//         M-= 1;
//         if(M === -1){
//             M = 59;
//             H-= 1;
//             if (H === -1){
//                 H = 23;
//             }
//         }
//     }
//     return Zero(H) + ":" + Zero(M) + ":" + Zero(S);
// }
// let res = decTime(22, 0, 0)
// console.log(res)

// // pr21

// function isLeapYear(Y) {
//   if (Y % 4 === 0 && Y > 0 && Math.floor(Y) === Y) {
//     if (Y % 100 === 0) {
//       if (Y % 400 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     return true;
//   } else if (Y % 4 != 0 && Y > 0 && Math.floor(Y) === Y) {
//     return false;
//   } else {
//     return "Notogri qiymat:";
//   }
// }

// let res = isLeapYear(200);
// console.log(res);

// pr22

// function monthDays(M, Y) {
//   if (
//     M === 1 ||
//     M === 3 ||
//     M === 5 ||
//     M === 7 ||
//     M === 8 ||
//     M === 10 ||
//     M === 12
//   ) {
//     return "Bu oy 31 kundan iborat";
//   } else if (M === 4 || M === 6 || M === 9 || M === 11) {
//     return "Bu oy 30 kundan iborat";
//   } else if (M === 2) {
//     if (Y % 4 === 0 && Y > 0 && Math.floor(Y) === Y) {
//       if (Y % 100 === 0) {
//         if (Y % 400 === 0) {
//           return "Bu oy 29 kundan iborat";
//         } else {
//           return "Bu oy 28 kundan iborat";
//         }
//       }
//       return "Bu oy 29 kundan iborat";
//     } else {
//       return "Bu oy 28 kundan iborat";
//     }
//   } else {
//     return "Notogri qiymat...";
//   }
// }
// let res = monthDays(3, 2021);
// console.log(res);

// pr23

// Zero = (j) => (j < 10 ? "0" + j : j);

// function prevDate(D, M, Y) {
//   D -= 1;
//   if (D === 0) {
//     M -= 1;
//     if(M === 0){
//         M === 12;
//         Y -= 1;
//     }
//     else if(M === 1 || M === 3 || M === 5 || M === 7 || M === 8 || M === 10 || M === 12) {
//       D = 31;
//     } else if (M === 4 || M === 6 || M === 9 || M === 11) {
//       D = 29;
//     } else if (M === 2) {
//       if (Y % 4 === 0 && Y > 0 && Math.floor(Y) === Y) {
//         if (Y % 100 === 0) {
//           if (Y % 400 === 0) {
//             D = 29;
//           } else {
//             D = 28;
//           }
//         }
//        else{
//         D = 29;
//        }
//       } else {
//         D = 28;
//       }
//     }
//   }
//   return Zero(D) + "." + Zero(M) + "." + Zero(Y);
// }

// let res = prevDate(1, 2, 1);
// console.log(res);

pr24

Zero = (j) => (j < 10 ? "0" + j : j);

function nextDate(D, M, Y) {
  D++;
  if (D === 31) {
    if (M === 4 || M === 6 || M === 9 || M === 11) {
      M += 1;
      D = 1;
    } else {
      M = M;
    }
  } else if (D === 32) {
    if (M === 1 || M === 3 || M === 5 || M === 7 || M === 8 || M === 10) {
      M += 1;
      D = 1;
    } else if (M === 12) {
      Y += 1;
      M = 1;
      D = 1;
    }
  }
  if (D === 29) {
    if (M === 2 && Y % 4 === 0) {
      if (Y % 100 === 0) {
        if (Y % 400 === 0) {
          D = D;
        }
        else{
            M += 1;
            D = 1;
        }
      } else {
        D = D;
      }
    } else {
        M += 1;
        D = 1;
    }
  }
  if (D === 30 && M === 2) {
    if (Y % 4 === 0 && Y > 0 && Math.floor(Y) === Y) {
      if (Y % 100 === 0) {
        if (Y % 400 === 0) {
          M += 1;
          D = 1;
        } else {
          D = D;
        }
      } else {
        M += 1;
        D = 1;
      }
    } else {
      D = D;
    }
  }
  return Zero(D) + "." + Zero(M) + "." + Zero(Y);
}

let res = nextDate(31, 3, 2400);
console.log(res);

// pr25

// function getDividersNumberAndSum(N) {
//   let c = 0;
//   let sum = 0;
//   for (let i = 1; i <= N; i++) {
//     if (N % i === 0) {
//       sum += i;
//       c++;
//       console.log(sum)
//     }
//   }
//   console.log(c, sum);
// }
// getDividersNumberAndSum(12);
