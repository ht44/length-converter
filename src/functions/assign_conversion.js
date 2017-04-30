import {mToY, mToF, mToMi, mToK, mToI, mToC} from './conversions/meters';
import {yToM, yToF, yToMi, yToK, yToI, yToC} from './conversions/yards';
import {iToC, iToF, iToY, iToMi, iToM, iToK} from './conversions/inches';
import {fToM, fToY, fToI, fToMi, fToK, fToC} from './conversions/feet';
import {cToI, cToF, cToY, cToMi, cToM, cToK} from './conversions/centimeters';
import {kToF, kToY, kToMi, kToM, kToI, kToC} from './conversions/kilometers';
import {miToF, miToY, miToK, miToM, miToI, miToC} from './conversions/miles';

function assignConversion(unitA, unitB) {
  switch(unitA + ' ' + unitB) {
// FEET // ------------------------------------------ /////////////////////////
    case 'feet yards':
      return fToY;
    case 'feet meters':
      return fToM;
    case 'feet inches':
      return fToI;
    case 'feet miles':
      return fToMi;
    case 'feet kilometers':
      return fToK;
    case 'feet centimeters':
      return fToC;
// YARDS // ----------------------------------------- /////////////////////////
    case 'yards feet':
      return yToF;
    case 'yards meters':
      return yToM;
    case 'yards miles':
      return yToMi;
    case 'yards kilometers':
      return yToK;
    case 'yards inches':
      return yToI;
    case 'yards centimeters':
      return yToC;
// MILES // ----------------------------------------- /////////////////////////
    case 'miles feet':
      return miToF;
    case 'miles yards':
      return miToY;
    case 'miles kilometers':
      return miToK;
    case 'miles meters':
      return miToM;
    case 'miles inches':
      return miToI;
    case 'miles centimeters':
      return miToC;
// KILOMETERS // ------------------------------------ /////////////////////////
    case 'kilometers feet':
      return kToF;
    case 'kilometers yards':
      return kToY;
    case 'kilometers miles':
      return kToMi;
    case 'kilometers meters':
      return kToM;
    case 'kilometers inches':
      return kToI;
    case 'kilometers centimeters':
      return kToC;
// METERS // ---------------------------------------- /////////////////////////
    case 'meters yards':
      return mToY;
    case 'meters feet':
      return mToF;
    case 'meters miles':
      return mToMi;
    case 'meters kilometers':
      return mToK;
    case 'meters inches':
      return mToI;
    case 'meters centimeters':
      return mToC;
// INCHES // ---------------------------------------- /////////////////////////
    case 'inches feet':
      return iToF;
    case 'inches centimeters':
      return iToC;
    case 'inches meters':
      return iToM;
    case 'inches kilometers':
      return iToK;
    case 'inches miles':
      return iToMi;
    case 'inches yards':
      return iToY;
// CENTIMETERS // ----------------------------------- /////////////////////////
    case 'centimeters inches':
      return cToI;
    case 'centimeters feet':
      return cToF;
    case 'centimeters yards':
      return cToY;
    case 'centimeters miles':
      return cToMi;
    case 'centimeters meters':
      return cToM;
    case 'centimeters kilometers':
      return cToK;
// DEFAULT // --------------------------------------- /////////////////////////
    default:
    return function (value) {
      return value;
    }
  }
}

export default assignConversion;
