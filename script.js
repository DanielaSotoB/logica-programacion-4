// Función para generar la serie de Fibonacci
function generateFibonacci() {
    // Obtener el valor ingresado por el usuario
    var userInput = document.getElementById("numberInput").value;
    var number = parseInt(userInput);
  
    // Verificar si el valor ingresado es válido
    if (isNaN(number)) {
      alert("Dato inválido. Por favor ingresa un número válido.");
      return;
    }
  
    // Generar la serie de Fibonacci
    var fibonacciSeries = [0, 1];
    for (var i = 2; i < number; i++) {
      fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }
  
    // Mostrar la serie de Fibonacci en el DOM
    var output = document.getElementById("output");
    output.textContent = fibonacciSeries.join(", ");
  }
  