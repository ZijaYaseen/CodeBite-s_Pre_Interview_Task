import { 
  FiMail,
  FiMapPin,
  FiGitBranch,
  FiLock,
  FiTrendingUp,
  FiLayout,
  FiFlag,
  FiCompass
} from 'react-icons/fi'
import { FaPiggyBank } from 'react-icons/fa'

export const Nav = [
    {name: "Explore", link : "/"},
    {name: "Solutions", link : "/"},
    {name: "About", link : "/"},
    {name: "Blog", link : "/"},
    {name : "Login" , link : "/"}
];

type StoryCard = {
  id: number;
  title: string;
  subtitle: string;
  imgSrc: string;
  imgAuthor: string;
};

export const StoryCards: StoryCard[] = [
  {
    id: 1, 
    title: 'Flower Decorations', 
    subtitle: 'by Melvina Spring', 
    imgSrc: '/Story1.svg',
    imgAuthor : "/StoriesAuthor1.svg"
  },
  { id: 2, 
    title: 'Heart Confetti', 
    subtitle: 'by Love Artist', 
    imgSrc: '/Story2.svg',
    imgAuthor : "/StoriesAuthor2.svg"
  },
  { id: 3, 
    title: 'Splash', 
    subtitle: 'by Rwanda Mellfor', 
    imgSrc: '/Story3.svg' ,
    imgAuthor : "/StoriesAuthor3.svg"
  },
  { id: 4, title: 'Colorful Face', 
    subtitle: 'by Melvina Spring', 
    imgSrc: '/Story4.svg' ,
    imgAuthor : "/StoriesAuthor4.svg"
  },
  { id: 5, 
    title: 'Nature View', 
    subtitle: 'by John Doe', 
    imgSrc: '/Story1.svg' ,
    imgAuthor : "/StoriesAuthor1.svg"
  },
  { id: 6, 
    title: 'Mountain Peak', 
    subtitle: 'by Jane Roe', 
    imgSrc: '/Story2.svg',
    imgAuthor : "/StoriesAuthor2.svg"
   },
  { id: 7, 
    title: 'City Lights', 
    subtitle: 'by Urban Snap', 
    imgSrc: '/Story3.svg' ,
    imgAuthor : "/StoriesAuthor3.svg"
  },
  { id: 8, 
    title: 'Abstract Art', 
    subtitle: 'by Artist', 
    imgSrc: '/Story4.svg' ,
    imgAuthor : "/StoriesAuthor4.svg"
  },
];

export const StoryOtherCard = [
  {
    title: 'Placerat feugiat senectus',
    text: 'Ultricies pharetra arcu turpis dui massa interdum lorem. Viverra nunc quisque congue tincidunt potenti. Tellus, enim vel habitasse commodo ultrices aenean ultricies.',
    author: 'Jane Doe',
    role: 'Senior Designer',
    image: '/StoriesAuthor4.svg',
  },
  {
    title: 'Suspendisse potenti nulla',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt eros vel dapibus suscipit. Vivamus ac magna sit amet mi eleifend pulvinar.',
    author: 'John Smith',
    role: 'Product Manager',
    image: '/StoriesAuthor3.svg',
  },
  {
    title: 'Malesuada sagittis orci',
    text: 'Phasellus vitae mauris sit amet purus placerat fermentum. Etiam vitae magna a purus tincidunt vestibulum eget quis urna.',
    author: 'Emily Clark',
    role: 'UX Researcher',
    image: '/StoriesAuthor2.svg',
  },
  {
    title: 'Integer non orci sed',
    text: 'Curabitur nec velit at libero consequat convallis. Cras at dolor nec orci tincidunt ultricies ac non turpis.',
    author: 'Michael Lee',
    role: 'Frontend Developer',
    image: '/StoriesAuthor1.svg',
  },
];

// ---------------------------------FAVOURITE TOOLS ------------------------------------

// 1) Data array: har item mein icon component, title, aur description
export const Features = [
  {
    icon: FiMail,
    title: 'Sapien amet est',
    text: 'Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor et.'
  },
  {
    icon: FiMapPin,
    title: 'Tortor ornare',
    text: 'Nulla etiam mattis amet suspendisse lacus nulla sed urna ultricies.'
  },
  {
    icon: FiGitBranch,
    title: 'Vel lacus',
    text: 'Porttitor quis lectus varius quis dolor morbi massa pellentesque.'
  },
  {
    icon: FiLock,
    title: 'Hendrerit blandit',
    text: 'A aliquam pharetra in nec vitae ultrices commodo placerat eget.'
  },
  {
    icon: FiTrendingUp,
    title: 'Enim risus turpis',
    text: 'Tristique dui vestibulum senectus ac duis etiam adipiscing sapien.'
  },
  {
    icon: FiLayout,
    title: 'Aliquam lorem et',
    text: 'Suspendisse ultrices morbi iaculis sit lorem. Mauris nulla odio est a mi a sed gravida.'
  },
  {
    icon: FaPiggyBank,
    title: 'Sed aliquam lectus',
    text: 'Rhoncus ut montes quis eget vulputate. Id hac consectetur ornare neque.'
  },
  {
    icon: FiFlag,
    title: 'Cursus diam',
    text: 'Feugiat consectetur eu commodo odio venenatis pretium libero. Volutpat ultricies nisl turpis id.'
  },
  {
    icon: FiCompass,
    title: 'Facilisi vel malesuada',
    text: 'Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integer sit.'
  },
]

// --------------------------------------------FAq's ------------------------------------

type FAQ = { question: string; answer: string };

export const Faqs: FAQ[] = [
  {
    question: "Are there any special discounts or promotions available during the event?",
    answer: "Yes! Attendees get a 20% early bird discount if they register at least two weeks before the event.",
  },
  {
    question: "What are the dates and locations for the product launch events?",
    answer: "June 10, 2025 in Karachi and June 17, 2025 in Lahore.",
  },
  {
    question: "Can I bring a guest with me to the product launch event?",
    answer: "Yes, each attendee may bring one guest at no extra cost, but guests must be registered.",
  },
  {
    question: "Are there any age restrictions for attending the product launch event?",
    answer: "All ages are welcome; attendees under 16 must be accompanied by an adult.",
  },
  {
    question: "Will there be food and refreshments provided at the event?",
    answer: "Light snacks and beverages will be served during breaks. Full meals are not included.",
  },
  {
    question: "How can I access the presentation materials after the event?",
    answer: "All presentation slides and recordings are emailed to attendees within 48 hours.",
  },
];

// ------------------------------FOOTER ------------------------------------------------

export const FooterData = [
  {
    heading: 'Categories',
    links: ['User Interface', 'User Experience', 'Digital Media', 'Lifestyle', 'Programming', 'Animation'],
  },
  {
    heading: 'Product',
    links: ['Pricing', 'Overview', 'Browse', 'Accessibility', 'Five', 'Changelog'],
  },
  {
    heading: 'Solutions',
    links: ['Brainstorming', 'Ideation', 'Wireframing', 'Research', 'Design', 'Concept'],
  },
  {
    heading: 'Resources',
    links: ['Help Center', 'Blog', 'Tutorials', 'FAQs', 'Community', 'Events'],
  },
  {
    heading: 'Support',
    links: ['Contact Us', 'Developers', 'Documentation', 'Integrations', 'Reports', 'Webinar'],
  },
  {
    heading: 'Company',
    links: ['About', 'Press', 'Events', 'Careers', 'Customers', 'Partners'],
  },
];