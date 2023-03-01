export interface Station {
  id: string;
  station_id: number;
  __v: number;
  capacity: number;
  createdAt: string;
  lat: number;
  lon: number;
  name: string;
  num_bikes_available_types: BikeType[];
  is_installed: number;
  is_renting: number;
  is_returning: number;
  last_reported: number;
  numBikesAvailable: number;
  numDocksAvailable: number;
  num_bikes_available: number;
  num_docks_available: number;
  stationCode: string;
}
export interface BikeType {
  mechanical: number;
  ebike: number;
}

export interface Type {
  mechanical: string;
  ebike: string;
}

export interface IStation {
  data: Station[];
}
