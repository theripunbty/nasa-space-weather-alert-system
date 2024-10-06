// Mock space weather data
export default function handler(req, res) {
  const data = [
    {
      event: "Solar Flare",
      description: "A massive solar flare detected.",
      intensity: 3.5,
      date: "2024-10-06",
    },
    {
      event: "Geomagnetic Storm",
      description: "Strong geomagnetic storm",
      intensity: 5.2,
      date: "2024-10-05",
    },
    {
      event: "Radiation Storm",
      description: "Increased radiation levels detected.",
      intensity: 4.0,
      date: "2024-10-04",
    },
  ];

  res.status(200).json(data);
}
