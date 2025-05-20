export const navItems = [
  { name: "About Us", link: "/" },
  { name: "Solutions", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

export const joinLeading = [
  {name : "SmartFinder", Logo : "/Joining-Leading-01.svg"},
  {name : "Zoomerr", Logo : "/Joining-Leading-02.svg"},
  {name : "SHELLS", Logo : "/Joining-Leading-03.svg"},
  {name : "WAVES", Logo : "/Joining-Leading-04.svg"},
  {name : "ArtVenue", Logo : "/Joining-Leading-05.svg"},
]

//  blogs ,

export interface Post {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Wild Horse Event',
    category: 'Design Thinking',
    imageUrl: '/blog1.svg',
    link: '/events/1',
  },
  {
    id: '2',
    title: 'Music & Colors',
    category: 'Festival',
    imageUrl: '/blog2.svg',
    link: '/events/2',
  },
  {
    id: '3',
    title: "Happy Father's Day",
    category: 'Bootcamp',
    imageUrl: '/blog3.svg',
    link: '/events/3',
  },
];