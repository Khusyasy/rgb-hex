function rgbToHex(r, g, b) {
  const _valid = x => typeof x === "number" && x >= 0 && x <= 255;
  if (!_valid(r) || !_valid(g) || !_valid(b)) {
    throw new Error("Invalid input");
  }

  const r_hex = r.toString(16).padStart(2, "0");
  const g_hex = g.toString(16).padStart(2, "0");
  const b_hex = b.toString(16).padStart(2, "0");

  return `#${r_hex}${g_hex}${b_hex}`;
}

function hexToRgb(hex) {
  const _valid = x => typeof x === "string" && (x.length === 7 && x.startsWith("#"));
  if (!_valid(hex)) {
    throw new Error("Invalid input");
  }

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return [r, g, b];
}

module.exports = {
  rgbToHex,
  hexToRgb,
};
