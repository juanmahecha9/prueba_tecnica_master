const capturaDeNumerosImparesEnRango = require("./task3");

test("captura todos los números impares en el rango de 0 a 9", () => {
  expect(capturaDeNumerosImparesEnRango(9)).toEqual([1, 3, 5, 7, 9]);
});

test("captura todos los números impares en el rango de 0 a 10", () => {
  expect(capturaDeNumerosImparesEnRango(11)).toEqual([1, 3, 5, 7, 9, 11]);
});

test("retorna un error cuando n no es un número", () => {
  expect(capturaDeNumerosImparesEnRango("a")).toEqual({
    message: "Error",
    description: "n no puede ser un numero difrente a un entero",
  });
});

test("retorna un error cuando n no es un entero", () => {
  expect(capturaDeNumerosImparesEnRango(4.5)).toEqual({
    message: "Error",
    description: "n no puede ser un numero difrente a un entero",
  });
});

test("captura todos los números impares en el rango de 0 a -5", () => {
  expect(capturaDeNumerosImparesEnRango(-5)).toEqual({
    message: "Error",
    description: "n no puede ser menor a 0",
  });
});

test("captura todos los números impares en el rango de 0 a 0", () => {
  expect(capturaDeNumerosImparesEnRango(0)).toEqual([]);
});

test("captura todos los números impares en el rango de 0 a 1", () => {
  expect(capturaDeNumerosImparesEnRango(1)).toEqual([1]);
});
