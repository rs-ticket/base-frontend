import LocalImages from "./images"

interface AdminNavigation {
  name: string;
  path: string;
  icon: any;
}

interface BottomNavigation {
  name: string;
  path: string;
}

interface SocialIcons {
  name: string;
  icon: string,
  url: string
}


export const adminNavigation: AdminNavigation[] = [
  {
    name: 'Dashboard',
    path: '/',
    icon: ''
  },
  {
    name: 'About',
    path: '/about',
    icon: ''
  },
  {
    name: 'Tickets',
    path: '/tickets',
    icon: ''
  },
  {
    name: 'Services',
    path: '/services',
    icon: ''
  }
]


export const BottomNavigation: BottomNavigation[] = [
  {
    name: "About Us",
    path: "/about_us"
  },
  {
    name: "Privacy Policy",
    path: "/privacy-and-policy"
  },
  {
    name: "Contact Us",
    path: "/contact"
  },
  {
    name: "Terms & Conditions",
    path: "/terms-and-conditions"
  },
  {
    name: "Astrologers",
    path: "/astrologers"
  }
]

export const PrimaryColors = {
  50: '#fdf8e2',
  100: '#fbedb7',
  200: '#f8e287',
  300: '#f5d657',
  400: '#f3cd33',
  500: '#f1c40f',
  600: '#efbe0d',
  700: '#edb60b',
  800: '#ebaf08',
  900: '#e7a204',
  1100: '#ffffff',
  1200: '#fff3da',
  1400: '#ffe1a7',
  1700: '#ffd98e',
  1800: '#ffffff',
}

export const SecondaryColors = {
  50 : '#ffede1',
    100 : '#ffd3b4',
    200 : '#ffb583',
    300 : '#ff9751',
    400 : '#ff812b',
    500 : '#ff6b06',
    600 : '#ff6305',
    700 : '#ff5804',
    800 : '#ff4e03',
    900 : '#ff3c02',
    1100 : '#ffffff',
    1200 : '#fff4f2',
    1400 : '#ffcabf',
    1700 : '#ffb5a6',
    1800: '#ffffff'
}


export const primary = PrimaryColors[600];
export const secondary = PrimaryColors[500];
export const button_bg = SecondaryColors[400];
export const button_text = SecondaryColors[1200];

export const beforeCallConfirmation = true;
export const showBalancePopup = true;

export const SocialIcons: SocialIcons[] = [
  {
    name: 'Linked In',
    icon: LocalImages.LINKEDIN,
    url: 'https://www.linkedin.com'
  },
  {
    name: 'Instagram',
    icon: LocalImages.INSTAGRAM,
    url: 'https://www.instagram.com/'
  },
  {
    name: 'Facebook',
    icon: LocalImages.FACEBOOK,
    url: 'https://www.facebook.com/'
  },
  {
    name: 'Twitter',
    icon: LocalImages.TWITTER,
    url: 'https://twitter.com/'
  },
  {
    name: 'Youtube',
    icon: LocalImages.YOUTUBE,
    url: 'https://www.youtube.com/'
  }
]
