import React from "react";

interface SpaceWeatherCardProps {
  title: string;
  data: {
    activityID: string;
    startTime: string;
    sourceLocation?: string;
    note: string;
  }[];
}

const SpaceWeatherCard: React.FC<SpaceWeatherCardProps> = ({ title, data }) => (
  <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
    <h2 className="text-2xl font-bold">{title}</h2>
    {data.length > 0 ? (
      <ul className="list-disc ml-5">
        {data.map((item) => (
          <li key={item.activityID}>
            {item.note} at {item.startTime}{" "}
            {item.sourceLocation && `from ${item.sourceLocation}`}
          </li>
        ))}
      </ul>
    ) : (
      <p>Fetching Data...</p>
    )}
  </div>
);

export default SpaceWeatherCard;
