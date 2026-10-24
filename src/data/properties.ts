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
    name: 'Pine Creek Farm Stay (Aadhya PCFS)',
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
    tagline: 'Our flagship estate: landscaped gardens, a lit pool and room for twenty-two.',
    description:
      'Pine Creek is the most generous property in the Aadhya collection. A 3BHK villa sits at the centre of mature, carefully lit gardens: stone walkways, a gazebo, a Buddha garden and a swimming pool that comes into its own after dark. There is space here to spread out, which is why it is the one families and larger groups keep coming back to for reunions, birthdays and corporate weekends.',
    highlights: [
      'Private swimming pool with poolside loungers',
      'Mature landscaped gardens, lit throughout',
      'Gazebo and open-air seating for gatherings',
      'Indoor lounge and bar counter',
    ],
    amenities: [
      'Private swimming pool',
      '3 air-conditioned bedrooms',
      'Full kitchen',
      'Campfire area',
      'Party speaker & music system',
      'Projector setup',
      'Landscaped garden & gazebo',
      'Ample parking',
    ],
    photoCount: 17,
    featured: true,
  },
  {
    // Location identified from the map link the client sent (Sahaja Lake Front Gardens,
    // Kothlapur). CONFIRM with the client that this pin belongs to the ₹17k/₹20k property
    // before launch, as they sent it without a caption.
    slug: 'sahaja-lake-front-gardens-kothlapur',
    name: 'Sahaja Lake Front Gardens',
    shortName: 'Sahaja Lake Front',
    location: 'Kothlapur, near Sadasivpet',
    locationConfirmed: false,
    bhk: 3,
    maxGuests: 22,
    priceWeekday: 17000,
    priceWeekend: 20000,
    checkIn: '2:00 PM',
    checkOut: '11:00 AM next day',
    mapUrl: 'https://maps.app.goo.gl/EJJ6Z4nhxQ8E2LLc9',
    tagline: 'A bright 3BHK villa with a full-length pool and a wide open lawn.',
    description:
      'A clean, modern 3BHK villa set behind a long lawn and flowering borders, out towards Kothlapur. The full-length swimming pool runs along one side of the property, and a covered open-air kitchen means you can cook and eat outside all evening. Straightforward, spacious and well kept, and the easy choice for a family weekend or a group of friends who want the run of a place.',
    highlights: [
      'Full-length private swimming pool',
      'Large open lawn for games and events',
      'Covered outdoor kitchen with gas stove',
      'Three bedrooms sleeping up to 22',
    ],
    amenities: [
      'Private swimming pool',
      '3 bedrooms',
      'Indoor kitchen & dining',
      'Covered outdoor kitchen',
      'Campfire area',
      'Large lawn',
      'Landscaped garden pathways',
      'Ample parking',
    ],
    photoCount: 12,
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
