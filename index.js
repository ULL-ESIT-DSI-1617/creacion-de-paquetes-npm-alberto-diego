"use strict";

/**
 * Clase Shape de la que heredarán las demás figuras que se creen.
 */
class Shape {
/**
 * Constructor de la clase Shape, en la que se guarda el objeto de dimensiones
 * @param {Object} input objeto de dimensiones
 */
 constructor (options) {
     this.options = options;
   }
}
Shape.shapes = Shape.shapes || {};

/**
 * Retornamos la clase Shape
 */
module.exports = Shape;

