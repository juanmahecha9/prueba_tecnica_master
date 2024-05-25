/**
 * Escribe una función que tome un número entero como entrada y devuelva un array con
todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el
número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9].
 */

function capturaDeNumerosImparesEnRango(n) {
  if (typeof n != "number")
    return {
      message: "Error",
      description: "n no puede ser un numero difrente a un entero",
    };
  if (!Number.isInteger(n))
    return {
      message: "Error",
      description: "n no puede ser un numero difrente a un entero",
    };
  if (n < 0)
    return {
      message: "Error",
      description: "n no puede ser menor a 0",
    };

  let listaRetornada = Array.from({ length: n + 1 }, (_, i) => i).filter(
    (n) => {
      if (n % 2 != 0) return n;
    }
  );
  return listaRetornada;
}

module.exports = capturaDeNumerosImparesEnRango;
