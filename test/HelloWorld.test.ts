import { expect } from 'chai';
import * as sinon from 'sinon'

import { HelloWorld } from '../src/HelloWorld';

describe('Hello World test suite', () => {
    let hwInstance: HelloWorld;

    beforeEach(() => {
        hwInstance = new HelloWorld();
    });

    it('Can say Hello World', () => {
        const result = hwInstance.helloWorld();
        expect(result).eq('Hello World', 'should equal hello world');
    });

    it('should return value', async () => {
        const result = await hwInstance.asyncFunc();
        expect(result).eq('value', 'should return value');
    });

    it('should return result of notCovered', () => {
        const notCoveredStub = sinon.stub(hwInstance, 'notCovered').returns('123');
        const result = hwInstance.spiedOn();
        expect(result).eq('123', 'should return result of notCovered');
        expect(notCoveredStub.called).eq(true, 'should call notCovered');
        expect(notCoveredStub.callCount).eq(1, 'should call notConverted once');
        expect(notCoveredStub.calledWithExactly('test2')).eq(true, 'should call notCoverted with value test2');
    });
});