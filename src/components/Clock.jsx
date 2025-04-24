import { useState, useEffect } from "react";

const timeZones = [
  { city: "New York", zone: "America/New_York" },
  { city: "London", zone: "Europe/London" },
  { city: "Delhi", zone: "Asia/Kolkata" },
  { city: "Tokyo", zone: "Asia/Tokyo" },
];

export default function LiveClock() {
  const [time, setTime] = useState({});

  useEffect(() => {
    const updateTime = () => {
      const newTime = {};
      timeZones.forEach(({ zone }) => {
        newTime[zone] = new Intl.DateTimeFormat("en-US", {
          timeZone: zone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date());
      });
      setTime(newTime);
    };

    updateTime(); // Update immediately
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 min-h-screen pt-20 text-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Live Time in Different Zones</h2>
      <div className="grid grid-cols-2 gap-4">
        {timeZones.map(({ city, zone }) => (
          <div key={zone} className="bg-gray-700 p-3 rounded-lg text-center">
            <h3 className="font-semibold">{city}</h3>
            <p className="text-lg">{time[zone] || "Loading..."}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
