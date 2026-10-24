export const site = {
  name: 'Aadhya Farm Stays',
  tagline: 'Farmhouses & Resorts for Rent in Hyderabad',
  phone: '9885102525',
  phoneIntl: '919885102525',
  phoneDisplay: '+91 98851 02525',
  email: 'aadhyafarmstays@gmail.com',
  areas: ['Moinabad', 'Chevella', 'Thangadpally', 'Shamshabad', 'Sadasivpet'],
  socials: {
    instagram: 'https://www.instagram.com/aadhyafarmstays/',
    facebook: 'https://www.facebook.com/aadhyafarmstays',
    youtube: 'https://www.youtube.com/@AadhyaFarmStays',
    threads: 'https://www.threads.net/@aadhyafarmstays',
  },
};

/** Builds a WhatsApp deep link with the enquiry pre-filled. */
export function wa(message: string): string {
  return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export const inr = (n: number) => '₹' + n.toLocaleString('en-IN');
