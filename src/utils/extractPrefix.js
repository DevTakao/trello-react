const extractPrefix = (name) => {
  if (!name.trim()) return "??";
  const converted = name.match(/\b[a-zA-Z]/g).join("");
  if (converted.length === 1) {
    return (name[0] + name[1]).toUpperCase();
  } else {
    return (converted[0] + converted[converted.length - 1]).toUpperCase();
  }
};

export default extractPrefix;
