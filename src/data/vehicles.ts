export type Vehicle = {
  id: string;
  name: string;
  seats: string;
  dayRent?: number;
  perKm?: number;
  abovePerKm?: number;
  aboveLimit?: number; // km threshold
  hourRent?: { price: number; hours: number; km: number };
  bus?: boolean;
  image?: string;
};

export const vehicles: Vehicle[] = [
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    seats: "7+1 & 6+1",
    dayRent: 3000,
    perKm: 17,
    abovePerKm: 23,
    aboveLimit: 300,
    hourRent: { price: 2500, hours: 8, km: 80 },
    image: "/media/innova-crysta.avif",
  },
  {
    id: "innova-hycross",
    name: "Innova Hycross",
    seats: "7+1",
    dayRent: 3500,
    perKm: 18,
    abovePerKm: 25,
    aboveLimit: 300,
    hourRent: { price: 3000, hours: 8, km: 80 },
    image: "/media/hycross.jpg",
  },
  {
    id: "ertiga",
    name: "Ertiga",
    seats: "7+1",
    dayRent: 2500,
    perKm: 15,
    abovePerKm: 20,
    aboveLimit: 300,
    hourRent: { price: 2000, hours: 8, km: 80 },
    image: "/media/ertiga.png",
  },
  {
    id: "sedan",
    name: "Sedan Vehicle",
    seats: "4",
    dayRent: 1800,
    perKm: 14,
    abovePerKm: 16,
    aboveLimit: 300,
    hourRent: { price: 1500, hours: 8, km: 80 },
    image: "/media/sedan.avif",
  },
  {
    id: "tempo-12-14",
    name: "Tempo Traveller",
    seats: "12+1 & 14+1",
    dayRent: 3000,
    perKm: 17,
    abovePerKm: 23,
    aboveLimit: 300,
    image: "/media/tempo-12.jpg",
  },
  {
    id: "tempo-18",
    name: "Tempo Traveller",
    seats: "18+1",
    dayRent: 4000,
    perKm: 22,
    abovePerKm: 30,
    aboveLimit: 300,
    image: "/media/tempo-18.jpg",
  },
  {
    id: "urbania-12-14",
    name: "Urbania",
    seats: "12+1 & 14+1",
    dayRent: 6500,
    perKm: 26,
    abovePerKm: 37,
    aboveLimit: 350,
    image: "/media/urbania.avif",
  },
  {
    id: "urbania-16",
    name: "Urbania",
    seats: "16+1",
    dayRent: 8000,
    perKm: 27,
    abovePerKm: 37,
    aboveLimit: 350,
    image: "/media/urbania.avif",
  },
  {
    id: "van-nonac",
    name: "Van Non A/C",
    seats: "22+1",
    dayRent: 5000,
    perKm: 27,
    abovePerKm: 40,
    aboveLimit: 250,
    image: "/media/van-nonac.jpg",
  },
  {
    id: "bus",
    name: "Bus (Fuel Full to Full)",
    seats: "40+",
    dayRent: 20000,
    bus: true,
    image: "/media/bus.jpg",
  },
];
