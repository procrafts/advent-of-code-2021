import { LanternFish } from './lantern-fish';

describe('challenge 6-1', () => {

  describe('lantern fish', () => {

    beforeEach(() => {
      LanternFish.swarm = [];
    });

    describe('example', () => {

      test('pass a day', () => {
        LanternFish.setInitialSwarm();
        LanternFish.passDays(1);
        expect(LanternFish.swarm).toStrictEqual(LanternFish.createSwarm('2,3,2,0,1'));
      });

      test('pass two days', () => {
        LanternFish.setInitialSwarm();
        LanternFish.passDays(2);
        expect(LanternFish.swarm).toStrictEqual(LanternFish.createSwarm('1,2,1,6,0,8'));
      });

      test('pass eight days', () => {
        LanternFish.setInitialSwarm();
        LanternFish.passDays(8);
        expect(LanternFish.swarm).toStrictEqual([1, 1, 3, 2, 2, 1, 0, 0, 0]);
      });

      test('pass eighteen days', () => {
        LanternFish.setInitialSwarm();
        LanternFish.passDays(18);
        expect(LanternFish.swarm).toStrictEqual(LanternFish.createSwarm('6,0,6,4,5,6,0,1,1,2,6,0,1,1,1,2,2,3,3,4,6,7,8,8,8,8'));
      });

      test('pass 80 days', () => {
        LanternFish.setInitialSwarm();
        LanternFish.passDays(80);
        expect(LanternFish.size).toBe(5934);
      });
    });

    describe('challenge', () => {

      test('pass 80 days', () => {
        LanternFish.setInitialSwarm('input');
        LanternFish.passDays(80);
        expect(LanternFish.size).toBe(362346);
      });
    });
  });
});
