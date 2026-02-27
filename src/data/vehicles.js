import { GENERATED_VEHICLE_VARIANTS } from "./vehicles.generated.js";

export const VEHICLE_QUALITY_ORDER = ["hd", "pixel"];

const BASE_VEHICLE_CATALOG = [
  {
    id: "PORSHE",
    name: "PORSHE",
    variants: {
      hd: "/Assets/Vehicles/Player/HD/Vehicles_porshe_HD_base_v01.png",
      pixel: "/Assets/Vehicles/Player/Pixel/Vehicles_porshe_pixel_base_v01.png",
    },
    sound: "/Assets/Sounds/Garage/Car/Sound_effect_car_porsche_sample_v01.mp3",
    shop: { credits: 0 },
    colors: ["#ffffff", "#f2d037", "#4ca8ff", "#ff5353", "#62d681"],
  },
  {
    id: "BMW",
    name: "BMW",
    variants: {
      hd: "/Assets/Vehicles/Player/HD/Vehicles_bmw_HD_base_v01.png",
      pixel: "/Assets/Vehicles/Player/Pixel/Vehicles_bmw_pixel_base_v01.png",
    },
    sound: "/Assets/Sounds/Garage/Car/Sound_effect_car_bmw_sample_v01.mp3",
    shop: { credits: 2500 },
    colors: ["#ffffff", "#f2d037", "#4ca8ff", "#ff5353", "#62d681"],
  },
  {
    id: "GALLARDO",
    name: "GALLARDO",
    variants: {
      hd: "/Assets/Vehicles/Player/HD/Vehicles_gallardo_HD_base_v01.png",
      pixel: "/Assets/Vehicles/Player/Pixel/Vehicles_gallardo_pixel_base_v01.png",
    },
    sound: "/Assets/Sounds/Garage/Car/Sound_effect_car_gallardo_sample_v01.mp3",
    shop: { credits: 3200 },
    colors: ["#ffffff", "#f2d037", "#4ca8ff", "#ff5353", "#62d681"],
  },
  {
    id: "RX7",
    name: "RX7",
    variants: {
      hd: "/Assets/Vehicles/Player/HD/Vehicles_rx7_HD_base_v01.png",
      pixel: "/Assets/Vehicles/Player/Pixel/Vehicles_rx7_pixel_base_v01.png",
    },
    sound: "",
    shop: { credits: 4200 },
    colors: ["#ffffff", "#f2d037", "#4ca8ff", "#ff5353", "#62d681"],
  },
  {
    id: "CHIRON",
    name: "CHIRON",
    variants: {
      hd: "/Assets/Vehicles/Player/HD/Vehicles_chiron_HD_base_v01.png",
      pixel: "/Assets/Vehicles/Player/Pixel/Vehicles_chiron_pixel_base_v01.png",
    },
    sound: "",
    shop: { credits: 7000 },
    colors: ["#ffffff", "#f2d037", "#4ca8ff", "#ff5353", "#62d681"],
  },
  {
    id: "CAMARO",
    name: "CAMARO",
    variants: {
      hd: "/Assets/Vehicles/Player/HD/Vehicles_camaro_pixel_base_v01.png",
      pixel: "/Assets/Vehicles/Player/Pixel/Vehicles_camaro_pixel_base_v01.png",
    },
    sound: "",
    shop: { credits: 5500 },
    colors: ["#ffffff", "#f2d037", "#4ca8ff", "#ff5353", "#62d681"],
  },
];

export const VEHICLE_CATALOG = BASE_VEHICLE_CATALOG.map((vehicle) => ({
  ...vehicle,
  variants: {
    ...vehicle.variants,
    ...(GENERATED_VEHICLE_VARIANTS[vehicle.id] || {}),
  },
}));

export function getVehicleById(vehicleId) {
  return VEHICLE_CATALOG.find((vehicle) => vehicle.id === vehicleId) || VEHICLE_CATALOG[0];
}

export function getVehicleVariant(vehicleId, quality = "hd") {
  const vehicle = getVehicleById(vehicleId);
  if (vehicle.variants[quality]) return vehicle.variants[quality];
  return vehicle.variants.hd;
}

export function listVehiclesForQuality(quality = "hd") {
  return VEHICLE_CATALOG.map((vehicle) => [
    `${vehicle.name} ${quality.toUpperCase()}`,
    getVehicleVariant(vehicle.id, quality),
  ]);
}
