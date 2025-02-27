export default function unabbreviate(number) {
  if (!number) {
    return new Error("[ZyraPlus] - The parameter <number> must be defined!");
  }

  if (typeof number !== "string") {
    return new Error("[ZyraPlus] - The parameter <number> must be a string!");
  }

  const symbols = {
    k: 1e3,
    M: 1e6,
    B: 1e9,
    T: 1e12,
    Qa: 1e15,
    Qi: 1e18,
    Sx: 1e21,
    Sp: 1e24,
    Oc: 1e27,
    Nn: 1e30,
    Dc: 1e33,
  };

  const match = number.match(/^([\d.]+)([a-zA-Z]*)$/);
  if (!match) {
    return new Error("[ZyraPlus] - Invalid format for <number>!");
  }

  const value = parseFloat(match[1]);
  const suffix = match[2];

  return suffix in symbols ? value * symbols[suffix] : value;
}
