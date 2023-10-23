const favorite_videos_games = require('./3_arrays');

test('should contain Halo', () => {
    expect(favorite_videos_games).toContain('halo');
    expect(favorite_videos_games).not.toContain('the sims');
});
