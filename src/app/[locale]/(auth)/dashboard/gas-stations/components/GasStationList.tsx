import React from 'react';
import { GasStation } from '@/core/types/gasstation-types';

// Reusable table header component
const TableHeader = () => (
  <thead className="bg-background-card">
    <tr>
      <th scope="col" className="px-4 py-2 text-left">Name</th>
      <th scope="col" className="px-4 py-2 text-left">Price</th>
      <th scope="col" className="px-4 py-2 text-left">Location</th>
      <th scope="col" className="px-4 py-2 text-left">Last Updated</th>
    </tr>
  </thead>
);

// Reusable table row component
const TableRow = ({ station, index }) => (
  <tr
    className={`${
      index % 2 === 0 ? 'bg-background-card' : 'bg-background-active'
    } hover:bg-button-primary hover:bg-opacity-10 transition-colors duration-150`}
  >
    <td className="px-4 py-2">{station.name}</td>
    <td className="px-4 py-2">
      {station.fuel?.fuelPrice ? (
        <span className="font-semibold text-custom-orange">
          €{station.fuel.fuelPrice.toFixed(3)}
        </span>
      ) : (
        <span aria-label="Price not available">N/A</span>
      )}
    </td>
    <td className="px-4 py-2">
      {station.location?.address ? (
        `${station.location.address.city}, ${station.location.address.province}`
      ) : (
        <span aria-label="Location not available">N/A</span>
      )}
    </td>
    <td className="px-4 py-2">
      {station.fuel?.lastUpdated ? (
        <time dateTime={station.fuel.lastUpdated}>
          {new Date(station.fuel.lastUpdated).toLocaleString()}
        </time>
      ) : (
        <span aria-label="Last update time not available">N/A</span>
      )}
    </td>
  </tr>
);

// Main component
const GasStationList = ({ stations }: { stations: GasStation[] }) => {
  return (
    <section className="bg-background-main text-text-primary p-6 rounded-lg shadow-lg" aria-labelledby="gas-stations-title">
      <h2 id="gas-stations-title" className="text-2xl font-semibold mb-4">Gas Stations</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto" aria-describedby="gas-stations-title">
          <TableHeader />
          <tbody>
            {stations.map((station, index) => (
              <TableRow key={station.name || index} station={station} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GasStationList;