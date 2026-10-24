export interface Property {
  slug: string;
  name: string;
  /** Short label used on cards and in the nav. */
  shortName: string;
  location: string;
  /** TODO: confirm with client before launch. */
  locationConfirmed: boolean;
  bhk: number;
  maxGuests: number;
  priceWeekday: number;
  priceWeekend: number;
  checkIn: string;
  checkOut: string;
  mapUrl?: string;
  tagline: string;
  description: string;
  highlights: string[];
  amenities: string[];
  /** Number of photos in /public/img/<slug>/. Files are 01..N at 800w and 1600w. */
  photoCount: number;
  featured?: boolean;
}

export const properties: Property[] = [
  {
    slug: 'pine-creek-thangadpally',
    name: 'Pine Creek Farm Stay',
    shortName: 'Pine Creek Farm Stay',
    location: 'Thangadpally, Hyderabad',
    locationConfirmed: true,
    bhk: 3,
    maxGuests: 22,
    priceWeekday: 26000,
    priceWeekend: 30000,
    checkIn: '2:00 PM',
    checkOut: '11:00 AM next day',
    mapUrl: 'https://g.co/kgs/88su8dp',
    tagline: 'Our largest property: a full-length pool, wide lawns and room for twenty-two.',
    description:
      'Pine Creek is the most generous property in the Aadhya collection. A two-storey 3BHK villa looks out over a wide green lawn, with a full-length swimming pool running along one side and mature planting and lit stone pathways beyond it. A covered open-air kitchen means you can cook and eat outside all evening. There is simply room to spread out here, which is why it is the one larger groups keep coming back to for reunions, birthdays and corporate weekends.',
    highlights: [
      'Full-length private swimming pool',
      'Wide open lawn for games and events',
      'Covered outdoor kitchen with gas stove',
      'Lit garden pathways and seating areas',
    ],
    amenities: [
      'Private swimming pool',
      '3 bedrooms',
      'Indoor kitchen & dining',
      'Covered outdoor kitchen',
      'Campfire area',
      'Party speaker & music system',
      'Projector setup',
      'Large lawn & mature gardens',
      'Ample parking',
    ],
    photoCount: 17,
    featured: true,
  },
  {
    slug: 'sahaja-lake-front-gardens-kothlapur',
    name: 'Sahaja Lake Front Gardens',
    shortName: 'Sahaja Lake Front',
    location: 'Kothlapur, near Sadasivpet',
    locationConfirmed: true,
    bhk: 3,
    maxGuests: 22,
    priceWeekday: 17000,
    priceWeekend: 20000,
    checkIn: '2:00 PM',
    checkOut: '11:00 AM next day',
    mapUrl: 'https://maps.app.goo.gl/EJJ6Z4nhxQ8E2LLc9',
    tagline: 'A white-and-blue villa with landscaped gardens and a pool lit for the evening.',
    description:
      'The most polished property in the collection. A modern 3BHK villa in white and blue sits among carefully landscaped gardens that are lit throughout after dark: stone walkways, a gazebo, a Buddha garden and a swimming pool with loungers along the edge. Inside there is a full modern kitchen, a dining area and a lounge with its own bar counter. It suits a group that wants somewhere that already looks the part for photographs.',
    highlights: [
      'Swimming pool with poolside loungers',
      'Landscaped gardens, lit throughout',
      'Gazebo and open-air seating for gatherings',
      'Indoor lounge with bar counter',
    ],
    amenities: [
      'Private swimming pool',
      '3 bedrooms',
      'Modern kitchen & dining',
      'Indoor lounge & bar counter',
      'Landscaped garden & gazebo',
      'Carrom & indoor games',
      'Photoshoot-friendly grounds',
      'Ample parking',
    ],
    photoCount: 12,
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
