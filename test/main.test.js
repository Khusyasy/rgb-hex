const chai = require('chai');
const expect = chai.expect;

const { rgbToHex, hexToRgb } = require('../src/main');

describe('RGB helper functions', () => {
  describe('rgbToHex', () => {
    it('should convert RGB to HEX', () => {
      expect(rgbToHex(255, 255, 255), 'white').to.equal('#ffffff');
      expect(rgbToHex(255, 0, 0), 'red').to.equal('#ff0000');
      expect(rgbToHex(0, 255, 0), 'green').to.equal('#00ff00');
      expect(rgbToHex(0, 0, 255), 'blue').to.equal('#0000ff');
      expect(rgbToHex(0, 0, 0), 'black').to.equal('#000000');
    });

    it('should throw an error if the input is not valid', () => {
      expect(() => rgbToHex('#000000'), 'invalid parameter').to.throw(Error, 'Invalid input');
      expect(() => rgbToHex(-152, 0, 0), 'invalid range').to.throw(Error, 'Invalid input');
      expect(() => rgbToHex(0, 257, 0), 'invalid range').to.throw(Error, 'Invalid input');
    });
  });
});

describe('HEX helper functions', () => {
  describe('hexToRgb', () => {
    it('should convert HEX to RGB', () => {
      expect(hexToRgb('#ffffff'), 'white').to.deep.equal([255, 255, 255]);
      expect(hexToRgb('#ff0000'), 'red').to.deep.equal([255, 0, 0]);
      expect(hexToRgb('#00ff00'), 'green').to.deep.equal([0, 255, 0]);
      expect(hexToRgb('#0000ff'), 'blue').to.deep.equal([0, 0, 255]);
      expect(hexToRgb('#000000'), 'black').to.deep.equal([0, 0, 0]);
    });

    it('should throw an error if the input is not valid', () => {
      expect(() => hexToRgb(0, 0, 0), 'invalid parameter').to.throw(Error, 'Invalid input');
      expect(() => hexToRgb('00000'), 'invalid value').to.throw(Error, 'Invalid input');
      expect(() => hexToRgb('#00000000'), 'invalid value').to.throw(Error, 'Invalid input');
    });
  });
});
