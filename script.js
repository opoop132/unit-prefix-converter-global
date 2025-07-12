function convert() {
  const value = parseFloat(document.getElementById("valueInput").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const result = document.getElementById("result");

  if (isNaN(value)) {
    result.innerText = "❌ Please enter a valid number.";
    return;
  }

  const units = {
    B: 1,
    KB: 1024,
    MB: 1024 ** 2,
    GB: 1024 ** 3,
    TB: 1024 ** 4,
  };

  const bytes = value * units[fromUnit];
  const converted = bytes / units[toUnit];

  result.innerText = `Result: ${converted} ${toUnit}`;
}
