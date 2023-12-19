export const isDayFn = () => {
  const fullTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  const hour = fullTime.split(" ")[0].split(":")[0];
  const ampm = fullTime.split(" ")[1].toLowerCase();
  const isDay = (ampm === "pm" && hour < 6) || (ampm === "am" && hour > 6);
  return isDay;
};
