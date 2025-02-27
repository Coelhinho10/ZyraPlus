export default function abbreviate(number) {
    if (typeof number !== "number" || isNaN(number)) {
        return new Error("[ZyraPlus] - The parameter <number> must be a valid number!");
    }

    const abbreviations = [
        { value: 1e33, symbol: "Dc" }, // Decillion
        { value: 1e30, symbol: "Nn" }, // Nonillion
        { value: 1e27, symbol: "Oc" }, // Octillion
        { value: 1e24, symbol: "Sp" }, // Septillion
        { value: 1e21, symbol: "Sx" }, // Sextillion
        { value: 1e18, symbol: "Qi" }, // Quintillion
        { value: 1e15, symbol: "Qa" }, // Quadrillion
        { value: 1e12, symbol: "T" },  // Trillion
        { value: 1e9, symbol: "B" },   // Billion
        { value: 1e6, symbol: "M" },   // Million
        { value: 1e3, symbol: "k" }    // Thousand
    ];

    // Verifica a maior unidade aplicável
    for (const { value, symbol } of abbreviations) {
        if (Math.abs(number) >= value) {
            return (Math.floor(number / value * 10) / 10) + symbol;
        }
    }

    return number.toString();
}
