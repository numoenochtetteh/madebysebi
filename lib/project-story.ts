type ProjectStory = {
  lead: string;
  overview: string;
  challenge: string;
  approach: string;
  result: string;
};

// Short, project-specific copy for the case study layout. Concepts describe the work shown,
// without implying a launch or a measured business result.
export const projectStories: Record<string, ProjectStory> = {
  pengtresses: {
    lead: "A website and booking flow for a North London hair business.",
    overview: "Forever Peng Hair brings its services, availability and appointments into one place. Clients can choose a service, answer consultation questions and pay a deposit.",
    challenge: "The owner needed control over available dates while clients needed a clear way to book without a long exchange of messages.",
    approach: "We built a guided booking flow with released time slots, a £20 Stripe deposit, confirmation emails and an owner dashboard.",
    result: "The website connects the customer journey with the day-to-day booking work behind it.",
  },
  "power-electrode-ltd": {
    lead: "A company website for a Ghanaian welding electrode manufacturer.",
    overview: "Power Electrode Ltd needed a clear place to present its welding products and manufacturing work to buyers.",
    challenge: "Visitors needed to understand the product range, how the electrodes are made and how to request a quote.",
    approach: "We organised the product and manufacturing pages around those questions, with direct enquiry routes throughout the site.",
    result: "Buyers can explore the products, learn about the company and reach its team from one website.",
  },
  "total-logistics": {
    lead: "A freight website for shipping enquiries in and out of Ghana.",
    overview: "Total Logistics presents sea, air and road freight services to customers moving goods through Ghana and West Africa.",
    challenge: "The range of shipping services needed to be easy to scan, with a clear route to the right contact point.",
    approach: "We grouped the services into readable sections and kept enquiry details close to the information customers need.",
    result: "The site makes the company's freight offer easier to understand and enquire about.",
  },
  "numo-sebi": {
    lead: "A jewellery storefront concept with an editorial feel and a clear shopping path.",
    overview: "NUMO & SEBI pairs campaign imagery with collection browsing, product details and checkout screens.",
    challenge: "The product imagery needed room to breathe without making the buying steps hard to find.",
    approach: "We used restrained typography and large images, then carried that visual direction through the collection and product pages.",
    result: "The concept shows how a customer could move from the collection to a product and checkout.",
  },
  "kent-architects": {
    lead: "A portfolio direction for residential architecture work in the UK.",
    overview: "Kent Architects needed a calm website that gives its residential projects the main stage.",
    challenge: "Images from different stages of construction had to sit together without a crowded layout.",
    approach: "We kept navigation simple and gave each project photograph enough space to show the materials and structure.",
    result: "The portfolio presents the practice through its work, from construction to finished homes.",
  },
  lucenex: {
    lead: "A company website for data, analytics and AI services.",
    overview: "Lucenex needed to explain its services to business clients and give them a direct way to get in touch.",
    challenge: "Technical work can be difficult to describe quickly. The site needed a clear hierarchy for the offer.",
    approach: "We structured the homepage around the company's service areas and made the contact route easy to find.",
    result: "Visitors can see what Lucenex offers and where to start a conversation.",
  },
  elegante: {
    lead: "A beauty storefront built around campaign imagery and product browsing.",
    overview: "eleganté brings beauty products and accessories together in a visual online store.",
    challenge: "Different product categories needed one coherent presentation and a simple path to item details.",
    approach: "We paired a strong campaign hero with category sections, a product grid and individual product pages.",
    result: "The storefront gives shoppers a clear route from the campaign to the products.",
  },
  tourbuddy: {
    lead: "A travel website for discovering regions and tours across Ghana.",
    overview: "TourBuddy helps visitors explore destinations and compare local experiences by place, activity and price.",
    challenge: "A broad tour catalogue needed to stay easy to browse on both desktop and mobile.",
    approach: "We combined region cards with a tours view that includes filters, a map and scannable trip details.",
    result: "Visitors can move from destination ideas to tour options in one place.",
  },
  femmora: {
    lead: "A storefront preview for a fashion collection.",
    overview: "FEMMORA presents clothing by category, previews upcoming pieces and gives each item a focused product page.",
    challenge: "The collection needed a simple way for shoppers to find pieces and see them in detail.",
    approach: "We used product photography, a clean category grid and uncluttered item pages to keep the clothes in focus.",
    result: "The preview shows the route from browsing a collection to choosing a product.",
  },
  "gas-safety-plumbing": {
    lead: "A website for gas, heating and plumbing services in the UK.",
    overview: "Gas Safety & Plumbing Engineering Ltd presents its services, emergency help and completed work on one site.",
    challenge: "People looking for help needed to spot the right service and the contact action quickly.",
    approach: "We gave the main service areas clear entry points and kept the call action visible throughout.",
    result: "Visitors can move from the homepage to a service or recent project, then contact the team.",
  },
};
