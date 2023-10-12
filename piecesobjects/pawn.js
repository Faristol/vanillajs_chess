export { Pawn };
import { PieceFather } from "./piecefather.js";
import {
  isVerticalDescendent,
  isVerticalAscendent,
  isHorizontalLeftToRight,
  isHorizontalRightToLeft,
  isDiagonalDescendent,
  isDiagonalAscendent
} from "../validation.js";
class Pawn extends PieceFather {
  constructor(color, coordinates) {
    super(color, coordinates, "pawn");
    this.notationName = "";
  }
  valid(start, end, hasPieces) {
    if (!hasPieces) {
      let startLetter = start.split("")[0];
      let startNumber = parseInt(start.split("")[1]);
      let endLetter = end.split("")[0];
      let endNumber = parseInt(end.split("")[1]);
      if (this.color === "black") {
        /*black -> start-end*/
        /*white -> end-start*/
        /*si es de color negre i esta en la 7 fila pot fer un moviment de 2*/
        let numDifference = startNumber - endNumber;
        if (startNumber === 7) {
          if ([1, 2].includes(numDifference)) {
            /*vegem si es vertical descendent*/
            return isVerticalDescendent(start, end);
          } else {
            return false;
          }
        } else {
          if (numDifference === 1) {
            return isVerticalDescendent(start, end);
          } else {
            return false;
          }
        }
      } else {
        /*es blanca*/
        let numDifference = endNumber - startNumber;
        if (startNumber === 2) {
            if ([1, 2].includes(numDifference)) {
                /*vegem si es vertical ascendent*/
                return isVerticalAscendent(start, end);
              } else {
                return false;
              }


        } else {
          /*pot merejar sols 1*/
          if (numDifference === 1) {
            return isVerticalAscendent(start, end);
          } else {
            return false;
          }
        }
      }
    } else {
      /*si te peces en mig*/
      return false;
    }
  }
}
