const request = require('supertest');
const app = require('../../src/app');

describe('GET /api/hex-to-rgb (integration)', () => {
  test('returns expected RGB for 6-digit input', async () => {
    const res = await request(app)
      .get('/api/hex-to-rgb')
      .query({ hex: '#FFAABB' });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ hex: '#FFAABB', rgb: [255, 170, 187] });
  });

  test('accepts 3-digit shorthand', async () => {
    const res = await request(app)
      .get('/api/hex-to-rgb')
      .query({ hex: 'FAB' });
    expect(res.status).toBe(200);
    expect(res.body.hex).toBe('#FFAABB');
    expect(res.body.rgb).toEqual([255, 170, 187]);
  });

  test('400 on invalid input', async () => {
    const res = await request(app)
      .get('/api/hex-to-rgb')
      .query({ hex: 'XYZ' });
    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/invalid/i);
  });

  test('400 on missing input', async () => {
    const res = await request(app).get('/api/hex-to-rgb');
    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/missing/i);
  });
});
