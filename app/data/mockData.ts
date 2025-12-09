export interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  rating: number;
  image: string;
  portfolio: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Salon {
  id: string;
  name: string;
  image: string;
  rating: number;
  distance: string;
  isOpen: boolean;
  address: string;
  services: Service[];
  stylists: Stylist[];
  products: Product[];
  reviews: Review[];
}

export const salons: Salon[] = [
  {
    id: "1",
    name: "Luxe Barber",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
    rating: 4.8,
    distance: "1.2 km",
    isOpen: true,
    address: "Jl. Ahmad Yani No. 45, Banyuwangi",
    services: [
      { id: "s1", name: "Classic Haircut", price: 50000, duration: "45 min" },
      { id: "s2", name: "Beard Trim", price: 30000, duration: "30 min" },
      { id: "s3", name: "Hair Coloring", price: 150000, duration: "90 min" },
      { id: "s4", name: "Premium Facial", price: 75000, duration: "45 min" },
    ],
    stylists: [
      {
        id: "st1",
        name: "Alex",
        role: "Senior Barber",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
        portfolio: [
          "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop"
        ]
      },
      {
        id: "st2",
        name: "Sarah",
        role: "Color Specialist",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
        portfolio: [
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2026&auto=format&fit=crop"
        ]
      },
      {
        id: "st3",
        name: "Mike",
        role: "Junior Barber",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        portfolio: [
          "https://images.unsplash.com/photo-1503951914296-9a07f8021f9e?q=80&w=2070&auto=format&fit=crop"
        ]
      }
    ],
    products: [
      {
        id: "p1",
        name: "Gatsby Pomade",
        price: 45000,
        image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2080&auto=format&fit=crop"
      },
      {
        id: "p2",
        name: "L'Oreal Shampoo",
        price: 85000,
        image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2070&auto=format&fit=crop"
      }
    ],
    reviews: [
      { id: "r1", user: "John Doe", rating: 5, comment: "Best haircut in town!", date: "2 days ago" },
      { id: "r2", user: "Jane Smith", rating: 4, comment: "Great service, but a bit pricey.", date: "1 week ago" }
    ]
  },
  {
    id: "2",
    name: "Gentleman's Cut",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
    rating: 4.5,
    distance: "2.5 km",
    isOpen: true,
    address: "Jl. Basuki Rahmat No. 12, Banyuwangi",
    services: [],
    stylists: [],
    products: [],
    reviews: []
  },
  {
    id: "3",
    name: "Urban Style Salon",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop",
    rating: 4.2,
    distance: "3.8 km",
    isOpen: false,
    address: "Jl. Gajah Mada No. 88, Banyuwangi",
    services: [],
    stylists: [],
    products: [],
    reviews: []
  }
];

export const promos = [
  {
    id: 1,
    title: "Disc 20% Gatsby Products",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2080&auto=format&fit=crop",
    color: "from-blue-600 to-blue-900"
  },
  {
    id: 2,
    title: "Free Hair Wash",
    image: "https://images.unsplash.com/photo-1512690459411-b9245aed6191?q=80&w=2072&auto=format&fit=crop",
    color: "from-purple-600 to-purple-900"
  }
];

export const categories = [
  "Gentlemen",
  "Ladies",
  "Coloring",
  "Treatment",
  "Spa",
  "Facial"
];
