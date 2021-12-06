import { LanternFish } from './lantern-fish';

describe('challenge 6-2', () => {
  describe('lantern fish', () => {

    beforeEach(() => {
      LanternFish.swarm = [];
    });

    describe('example', () => {

      test('pass 256 days', () => {
        LanternFish.setInitialSwarm();
        LanternFish.passDays(256);
        expect(LanternFish.size).toBe(26984457539);
      });
    });

    describe('challenge', () => {

      test('pass 256 days', () => {
        LanternFish.setInitialSwarm('input');
        LanternFish.passDays(256);
        expect(LanternFish.size).toBe(1639643057051);
      });
    });
  });
});
