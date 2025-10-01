function hexToRgb(hex) {
  if (!hex) {
    throw new Error('Missing hex parameter');
  }

  const cleaned = String(hex).trim().replace(/^#/, '');

  if (![3, 6].includes(cleaned.length)) {
    throw new Error('Invalid hex length (use 3 or 6 hex digits)');
  }
  if (!/^[0-9a-fA-F]+$/.test(cleaned)) {
    throw new Error('Invalid hex characters(0-9, a-f)');
  }

  const full = cleaned.length === 3
    ? cleaned.split('').map(ch => ch + ch).join('')
    : cleaned;

  const num = parseInt(full, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;

  return {
    hex: '#' + full.toUpperCase(),
    rgb: [r, g, b]
  };
}

module.exports = hexToRgb;
