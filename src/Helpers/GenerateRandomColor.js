export const GenerateRandomColor = () => {
  const x = Math.floor(Math.random() * 265);
  const y = Math.floor(Math.random() * 265);
  const z = Math.floor(Math.random() * 265);
  const bgColor = `rgb(${x},${y},${z})`;
  return bgColor;
};
