const Pathname = {

    //-------------auth url-------------
    SignUp: "/signup",
    Login: '/login',
    AdminLogin: 'admin/login',
    verifyOtp: '/verify',
    //-------------admin url-------------
    Dashboard: '/admin/dashboard',
    settings: '/admin/settings',
    Categories: '/admin/categories',
    Privacy: '/admin/privacy-policy',
    Terms: '/admin/terms-conditions',
    AstrologersList: '/admin/astrologers',
    InactiveAstrologer: '/admin/astrologers/inactive',
    BlockedAstrologer: '/admin/astrologers/blocked',
    AstrologerDetail: '/admin/astrologers/detail/:id',
    AddAstrologer: '/admin/astrologer/add',
    ManageBlogs: '/admin/articles',
    Testimonials: '/admin/testimonials',
    Banner: 'admin/banners',
    Packages: 'admin/packages',
    Notification: 'admin/notification',
    //-------------user url-------------
    UserTerms: 'terms-and-conditions',
    UserPrivacy: 'privacy-and-policy',
    Home: '/home',
    UserProfile: '/user/profile',
    EditProfile: '/user/edit',
    Astrologers: '/astrologers',
    AstrologerDetails: '/astrologers/astrologer-detail/:id',
    ContactUs: '/contact',
    AboutUs: '/about_us',
    Disclaimer: '/disclaimer',
    RefundPolicy: '/refund-policy',
    Horoscope: '/horoscope/:id',
    News: '/articles',
    News_detail: '/article/details/:id/:slug',
    
    wallet: '/user/wallet',
    transactions: '/user/transactions',
    userCallFeedback: 'user/feedback/:user_id/:call_uid',
    userCallHistory: '/user/call_history',
    //-------------astrologer url-------------
    astro_dashboard: '/astrologer/dashboard',
    astro_calls: '/astrologer/calls',
    astro_payments: '/astrologer/payments',
    astro_profile: '/astrologer/profile',
    astro_edit_profile: '/astrologer/profile/edit',
    connect: '/astrologer/:id/connect',
    astro_feedback: '/astrologer/feedback',
    astroCallHistory: '/astrologer/call/history',
    admin_customers: '/admin/customers'
    // outCall: '/astrologer/'
   
};
export default Pathname;
