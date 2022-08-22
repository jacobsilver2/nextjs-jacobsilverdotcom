interface Show {
  date: string;
  band: string;
  venue: string;
  city: string;
  state: string;
  country: string;
  ticketLink?: string;
}

export const shows: Show[] = [
  {
    date: "9/3/2022",
    band: "Lee Fields",
    venue: "Rail & Hops Brewers Festival",
    city: "Chattanooga",
    state: "TN",
    country: "USA",
    ticketLink:
      "https://www.eventbrite.com/e/rail-hops-brewers-festival-tickets-160292066887",
  },
  {
    date: "10/15/2022",
    band: "Lee Fields",
    venue: "Space Ballroom",
    city: "Hamden",
    state: "CT",
    country: "USA",
    ticketLink: "https://www.eventbrite.com/e/lee-fields-tickets-400892308687",
  },
  {
    date: "10/25/2022",
    band: "Jim Keller",
    venue: "Rockwood Music Hall",
    city: "Brooklyn",
    state: "NY",
    country: "USA",
    ticketLink: "https://rockwoodmusichall.com/events/?bydate=2022-10-01",
  },
  {
    date: "10/27/2022",
    band: "Jim Keller",
    venue: "The Colony",
    city: "Woodstock",
    state: "NY",
    country: "USA",
    ticketLink: "https://www.colonywoodstock.com/upcoming_events",
  },
  {
    date: "10/28/2022",
    band: "Lee Fields",
    venue: "The Showbox",
    city: "Seattle",
    state: "WA",
    country: "USA",
    ticketLink:
      "https://www.axs.com/events/444673/lee-fields-tickets?skin=showboxpresents",
  },
  {
    date: "10/29/2022",
    band: "Lee Fields",
    venue: "Aladdin Theatre",
    city: "Portland",
    state: "OR",
    country: "USA",
    ticketLink:
      "https://www.etix.com/ticket/p/7340183/lee-fields-presents-the-sentimental-fool-tour-portland-aladdin-theater",
  },
  {
    date: "10/30/2022",
    band: "Lee Fields",
    venue: "Commodore Ballroom",
    city: "Vancouver",
    state: "BC",
    country: "CANADA",
    ticketLink: "https://www.ticketmaster.ca/event/11005D0CCB2A422A",
  },
  {
    date: "11/1/2022",
    band: "Lee Fields",
    venue: "The Glass House",
    city: "Pomona",
    state: "CA",
    country: "USA",
    ticketLink: "https://www.eventbrite.com/e/lee-fields-tickets-400790825147",
  },
];
