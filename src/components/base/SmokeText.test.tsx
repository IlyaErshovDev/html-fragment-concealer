import * as React from "react";
import SmokeText from './SmokeText'
import * as renderer from 'react-test-renderer';

describe('Testing <SmokeText/>', () => {
    it('SmokeText have rendered correctly', () => {
        const smoketext = renderer.create(<SmokeText/>).toJSON();
        expect(smoketext).toMatchSnapshot();
    })
});