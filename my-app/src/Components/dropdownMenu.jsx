import react from "react";

export function CryptoDropdown() {
  const [items] = react.useState([
    {
      label: "Anything",
      value: "Something",
    },
  ]);
  return (
    <select>
      {items.map((item) => (
        <option>
          key={item.value}
          value={item.value}
        </option>
      ))}
    </select>
  );
}
