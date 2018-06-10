import { expect } from 'chai';
import * as sinon from 'sinon'

import { FullCoverage } from '../src/FullCoverage';

describe('FullCoverage tests', () => {
    let fcInstance: FullCoverage;
    beforeEach(() => {
        fcInstance = new FullCoverage();
    });

    describe('add', () => {
        it('should add two numbers', () => {
            const result = fcInstance.add(1, 2);
            expect(result).eq(3, 'should return 3 for 1 and 2');
        });
    });

    describe('subtract', () => {
        it('should subtact two numbers', () => {
            const result = fcInstance.subtract(10, 3);
            expect(result).eq(7, 'should return 7 for 10 and 3');
        })
    });

    describe('multiply', () => {
        it('should multiply two numbers', () => {
            const result = fcInstance.multiply(4, 5);
            expect(result).eq(20, 'should return 20 for 4 and 5');
        })
    })
});