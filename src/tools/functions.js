export const lighter = (col, amt) => {
  col = col.slice(1);
  const num = parseInt(col, 16);

  let r = (num >> 16) + amt;
  r = r > 255 ? 255 : r < 0 ? 0 : r;
  let b = ((num >> 8) & 0x00ff) + amt;
  b = b > 255 ? 255 : b < 0 ? 0 : b;
  let g = (num & 0x0000ff) + amt;
  g = g > 255 ? 255 : g < 0 ? 0 : g;

  return '#' + (g | (b << 8) | (r << 16)).toString(16);
};

export const calculateScale = (i) => {
  switch (i) {
    case 'S':
      return 1;
    case 'M':
      return 1.2;
    case 'L':
      return 1.45;
    default:
      return 1;
  }
};

export function getRandomNumber() {
  return Math.floor(Math.random() * 14) - 10;
}
