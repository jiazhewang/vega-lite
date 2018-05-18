/* tslint:disable:quotemark */
import {assert} from 'chai';

import {getOffset} from '../../../src/compile/mark/valueref';
import {MarkDef} from '../../../src/mark';


describe('compile/mark/valueref', () => {
  describe("getOffset", function () {
    const markDef: MarkDef = {
      "type": "point",
      "x2Offset": 100
    };
    it('should correctly get the offset value for the given channel', function () {
      assert.equal(getOffset('x2', markDef), 100);
    });
    it('should return undefined when the offset value for the given channel is not defined', function () {
      assert.equal(getOffset('x', markDef), undefined);
    });
  });
});