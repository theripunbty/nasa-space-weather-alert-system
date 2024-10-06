"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SpaceWeatherCard from "../components/SpaceWeatherCard";
import SpaceWeatherChart from "../components/SpaceWeatherChart";
import {
  fallbackCmeData,
  fallbackFlareData,
  fallbackStormData,
} from "./data/fallbackData";
import { SpaceWeatherData } from "./types/types";

export default function Home() {
  const [cmeData, setCmeData] = useState<SpaceWeatherData[]>([]);
  const [flareData, setFlareData] = useState<SpaceWeatherData[]>([]);
  const [stormData, setStormData] = useState<SpaceWeatherData[]>([]);

  useEffect(() => {
    const fetchSpaceWeatherData = async () => {
      try {
        // Fetch CME data
        const cmeResponse = await axios.get(
          `https://api.nasa.gov/DONKI/CME?startDate=2024-01-01&endDate=2024-10-01&api_key=adPX4QoL1Q4sR8RulNLbaYYFiVO8itTHDB9V2eUf`
        );
        setCmeData(cmeResponse.data.slice(0, 20)); // Limit to 20 responses

        // Fetch Solar Flare data
        const flareResponse = await axios.get(
          `https://api.nasa.gov/DONKI/FLR?startDate=2024-01-01&endDate=2024-10-01&api_key=adPX4QoL1Q4sR8RulNLbaYYFiVO8itTHDB9V2eUf`
        );
        setFlareData(flareResponse.data.slice(0, 20)); // Limit to 20 responses

        // Fetch Geomagnetic Storm data
        const stormResponse = await axios.get(
          `https://api.nasa.gov/DONKI/GST?startDate=2024-01-01&endDate=2024-10-01&api_key=adPX4QoL1Q4sR8RulNLbaYYFiVO8itTHDB9V2eUf`
        );
        setStormData(stormResponse.data.slice(0, 20)); // Limit to 20 responses
      } catch (error) {
        console.error("Error fetching data, using fallback:", error);
        setCmeData(fallbackCmeData.slice(0, 20)); // Limit to 20 responses
        setFlareData(fallbackFlareData.slice(0, 20)); // Limit to 20 responses
        setStormData(fallbackStormData.slice(0, 20)); // Limit to 20 responses
      }
    };

    fetchSpaceWeatherData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl flex font-bold text-center text-white mb-6">
        SPACE WEATHER MONITORING WEB APPLICATION
      </h1>
      <SpaceWeatherCard title="Coronal Mass Ejections" data={cmeData} />
      <SpaceWeatherCard title="Solar Flares" data={flareData} />
      <SpaceWeatherCard title="Geomagnetic Storms" data={stormData} />

      {/* Adding Space Weather Charts */}
      <SpaceWeatherChart data={cmeData} title="CME" />
      <SpaceWeatherChart data={flareData} title="Solar Flare" />
      <SpaceWeatherChart data={stormData} title="Geomagnetic Storm" />
    </div>
  );
}
