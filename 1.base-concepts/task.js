"use strict";

  let arr = [
    solveEquation = function(a,b,c) {
      let d = (a, b, c) = Math.pow(b, 2) - 4 * a * c;
      let x1, x2;
       if (a==0) {
         return "Ошибка"
        };
      if (d > 0) {
      x1 = (-b - Math.sqrt(d))/ (2 * a);
      x2 = (-b + Math.sqrt(d))/ (2 * a);
      return  (x1, x2);
      } else if (d === 0) {
      x1 === -b/ (2 * a);
      return (x1);  
      } else if (d < 0) {
      return ("корней нет") 
      }
   return solveEquation (2, 4, 3);
    }
   


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
