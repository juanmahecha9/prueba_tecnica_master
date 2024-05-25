/**
 *! Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor
su función.
 * @param {number} parametro_1
 * @param {number} parametro_2
 * @param {number} factor_multiplicador
 * @returns {number} calculo_senosoidal
 */
function calculo_senosoidal(parametro_1, parametro_2, factor_multiplicador) {
  let suma_parametros = parametro_1 + parametro_2;
  let producto = suma_parametros * factor_multiplicador;
  let calculo_senosoidal = Math.sin(producto);
  return calculo_senosoidal;
}

console.log(calculo_senosoidal(1, 2, 3).toFixed(2));
