const COLORS_MAP: Record<string, string> = {
  blue: "#1E90FF",
  purple: "#8A4AF3",
  cyan: "#00CED1",
  green: "#32CD32",
  magenta: "#FF69B4",
  pink: "#FF85C0",
  red: "#FF4040",
  orange: "#FF8C00",
  yellow: "#FFD700",
  volcano: "#FF4500",
  geekblue: "#4169E1",
  lime: "#BFFF00",
  gold: "#FFA500",

  "blue-inverse": "#104E8B",
  "purple-inverse": "#4B0082",
  "cyan-inverse": "#008B8B",
  "green-inverse": "#228B22",
  "magenta-inverse": "#C71585",
  "pink-inverse": "#C71585",
  "red-inverse": "#8B0000",
  "orange-inverse": "#CD6600",
  "yellow-inverse": "#CD950C",
  "volcano-inverse": "#CD3700",
  "geekblue-inverse": "#27408B",
  "lime-inverse": "#698B22",
  "gold-inverse": "#CD8500",
};

const colorCache = new Map<string, string>();

export const getUniqueColor = (key: string, isValue: boolean = false) => {
  if (!colorCache.has(key)) {
    const COLORS = isValue
      ? Object.values(COLORS_MAP)
      : Object.keys(COLORS_MAP);
    const color = COLORS[colorCache.size % COLORS.length];
    colorCache.set(key, color);
  }

  return colorCache.get(key);
};

export const getRandomColor = (isValue: boolean = false) => {
  const COLORS = isValue ? Object.values(COLORS_MAP) : Object.keys(COLORS_MAP);

  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

export const getColor = (index: number = 0, isValue: boolean = false) => {
  const COLORS = isValue ? Object.values(COLORS_MAP) : Object.keys(COLORS_MAP);

  return COLORS[index % COLORS.length];
};
