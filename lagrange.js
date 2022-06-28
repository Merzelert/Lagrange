"use strict"; //Erik Ivan Retana Lopez -Programa para calcular la lagrange-
(function() {

	window.addEventListener("load", init);
	function init() {
	   let  computeButton = id("calculalag");
	   computeButton.addEventListener("click",intlag);
	}

	function intlag() {
	   let  inputcx = id("coordx").value;   
	   let  inputcy = id("coordy").value;
	   let  x = id("xint").value;
	   let  answer = id("laganswer");

	   let   cx = inputcx.split(" ");
	   let   cy = inputcy.split(" ");

	   let  result = lagrange(cx, cy, x);
	   answer.innerHTML = result;
	}

	function lagrange(cx, cy, x) {
	  let  suma=0; 
	  let  prod;

	  for (let  j=0; j < cx.length ; j++)
	  {
		prod = 1;  
		for (let  i=0; i < cx.length ; i++)
		   if (i!=j)
			  prod *= (x - cx[i])/(cx[j]-cx[i]);
		suma += prod * cy[j]; 
	  }
	  return suma;
	}  

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  } 

})();