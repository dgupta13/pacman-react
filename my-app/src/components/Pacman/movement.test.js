import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import {configure} from 'enzyme'
import {attemptLeftMove, attemptRightMove, generateReport, move} from './movement'

configure({adapter: new Adapter()});



describe('Movement Action', function () {
    it('return the pacman move status type and valid payload object', function () {
        let payload = {position: [0, 150], direction: 'NORTH'};
        let response = move();
        expect(response.type).toBe('MOVE_PACMAN');
        expect(JSON.stringify(response.payload)).toBe(JSON.stringify(payload));
    });

    it('generatereport inform about position of pacman', function () {
        let payload = {position: [0, 200], direction: 'NORTH'};
        let response = generateReport();
        expect(JSON.stringify(response.payload)).toBe(JSON.stringify(payload));
    });

    it('attemptRightMove inform about position of pacman', function () {
        let payload = {position: [0, 200], direction: 'EAST'};
        let response = attemptRightMove();
        expect(response.type).toBe('CHANGE_DIRECTION');
        expect(JSON.stringify(response.payload)).toBe(JSON.stringify(payload));
    });

    it('attemptLeftMove inform about position of pacman', function () {
        let payload = {position: [0, 200], direction: 'WEST'};
        let response = attemptLeftMove();
        expect(response.type).toBe('CHANGE_DIRECTION');
        expect(JSON.stringify(response.payload)).toBe(JSON.stringify(payload));
    });
});