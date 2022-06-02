import {RouteInfo} from './sidebar.metadata';
import {environment} from '../../../environments/environment';

const hq_base_url = environment.hq_base_url;

export const ROUTES: RouteInfo[] = [
  {
    path: '/overview',
    title: 'Dashboard',
    icon: 'mdi mdi-bulletin-board',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/overview/d2c',
    title: 'Dashboard D2C',
    icon: 'mdi mdi-developer-board',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Manage',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/kpi',
    title: 'KPI monitor',
    icon: 'mdi mdi-certificate',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/kpi',
        title: 'Campaign KPI monitor',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/kpi/rule',
        title: 'KPI rule setting',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  },
  {
    path: '/report_kpi',
    title: 'Report KPI',
    icon: 'mdi mdi-scale-balance',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/report_kpi/employee',
        title: 'KPI Employee',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/report_kpi/manager',
        title: 'KPI Manager',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/report_kpi/company',
        title: 'KPI Company',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'User',
    icon: 'mdi mdi-account',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/user/role',
        title: 'Roles',
        icon: 'mdi mdi-key-variant',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/staff',
        title: 'Staffs',
        icon: 'mdi mdi-account-multiple-plus',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'Publishers',
    icon: 'mdi mdi-account-network',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/publishers/info',
        title: 'Info',
        icon: 'mdi mdi-hexagon-multiple',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/publishers/add_follower',
        title: 'Add Follower',
        icon: 'mdi mdi-hexagon-multiple',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/publishers/custom_list',
        title: 'Custom List',
        icon: 'mdi mdi-hexagon-multiple',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: hq_base_url + '/publisher_inbox',
        title: 'Publisher Inbox',
        icon: 'mdi mdi-hexagon-multiple',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: '',
        title: 'Profile',
        icon: 'mdi mdi-hexagon-multiple',
        class: 'has-arrow',
        extralink: false,
        submenu: [
          {
            path: hq_base_url + '/affiliate_history',
            title: 'Affiliate History',
            icon: 'mdi mdi-adjust mdi-arrow-top-right',
            class: '',
            extralink: false,
            external_link: true,
            submenu: []
          }, {
            path: hq_base_url + '/ads_network',
            title: 'Ads Network',
            icon: 'mdi mdi-adjust mdi-arrow-top-right',
            class: '',
            extralink: false,
            external_link: true,
            submenu: []
          }, {
            path: hq_base_url + '/publisher_awards',
            title: 'Publisher Award',
            icon: 'mdi mdi-adjust mdi-arrow-top-right',
            class: '',
            extralink: false,
            external_link: true,
            submenu: []
          }
        ]
      },
      {
        path: '',
        title: 'SEM Tools',
        icon: 'mdi mdi-hexagon-multiple',
        class: 'has-arrow',
        extralink: false,
        submenu: [
          {
            path: hq_base_url + '/add_google_adw',
            title: 'Add Google AW',
            icon: 'mdi mdi-adjust mdi-arrow-top-right',
            class: '',
            extralink: false,
            external_link: true,
            submenu: []
          }, {
            path: hq_base_url + '/add_publisher_sem',
            title: 'Publisher SEM',
            icon: 'mdi mdi-adjust mdi-arrow-top-right',
            class: '',
            extralink: false,
            external_link: true,
            submenu: []
          }
        ]
      },
      {
        path: '',
        title: 'Loyalty',
        icon: 'mdi mdi mdi-hexagon-multiple',
        class: 'has-arrow',
        extralink: false,
        submenu: [
          {
            path: hq_base_url + '/gifts',
            title: 'Gifts',
            icon: 'mdi mdi-adjust mdi-arrow-top-right',
            class: '',
            extralink: false,
            external_link: true,
            submenu: []
          }, {
            path: hq_base_url + '/gifts/orders',
            title: 'Gift Orders',
            icon: 'mdi mdi-adjust mdi-arrow-top-right',
            class: '',
            extralink: false,
            external_link: true,
            submenu: []
          }, {
            path: hq_base_url + '/wallets/transactions',
            title: 'Wallet Transactions',
            icon: 'mdi mdi-adjust mdi-arrow-top-right',
            class: '',
            extralink: false,
            external_link: true,
            submenu: []
          }, {
            path: hq_base_url + '/wallets',
            title: 'Wallets',
            icon: 'mdi mdi-adjust mdi-arrow-top-right',
            class: '',
            extralink: false,
            external_link: true,
            submenu: []
          }
        ]
      },
      {
        path: '',
        title: 'Bonus',
        icon: 'mdi mdi mdi-hexagon-multiple',
        class: 'has-arrow',
        extralink: false,
        submenu: [
          {
            path: hq_base_url + '/bonus/upload_bonus',
            title: 'Upload',
            icon: 'mdi mdi-adjust mdi-arrow-top-right',
            class: '',
            extralink: false,
            external_link: true,
            submenu: []
          }, {
            path: hq_base_url + '/bonus/bonus_policy',
            title: 'Policy',
            icon: 'mdi mdi-adjust mdi-arrow-top-right',
            class: '',
            extralink: false,
            external_link: true,
            submenu: []
          }
        ]
      },
      {
        path: '/publishers/joining_request',
        title: 'Joining Request',
        icon: 'mdi mdi-hexagon-multiple',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/publishers/suspend_request',
        title: 'Suspend Request',
        icon: 'mdi mdi-hexagon-multiple',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/publishers/agency',
        title: 'Agency',
        icon: 'mdi mdi-hexagon-multiple',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Advertisers',
    icon: 'mdi mdi-bullhorn',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/campaigns/setup',
        title: 'Setup Campaigns',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        external_link: false,
        submenu: []
      },
      {
        path: '/deal_coupon',
        title: 'Deal & Coupon',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: hq_base_url + '/campaign/config',
        title: 'Config Campaigns',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: hq_base_url + '/campaign/comments',
        title: 'Comments',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: hq_base_url + '/campaign/deep_link',
        title: 'Deeplink',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: '/campaigns/ranking_stats',
        title: 'Ranking Stats',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/campaigns/monitors',
        title: 'Campaign Monitors',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/campaigns/merchant_normalize',
        title: 'Setup Normalize',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/campaigns/setup/product_categories',
        title: 'Product Categories',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/contract_management',
        title: 'Contract',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path:  '/creative_file',
        title: 'Creative File',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'Reports',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Advertiser',
    icon: 'mdi mdi-bullhorn',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/campaigns',
        title: 'Campaign performance',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/campaigns/daily',
        title: 'Daily - Monthly',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/products',
        title: 'Top Products',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: hq_base_url + '/top_category',
        title: 'Top Products category',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: 'campaigns/campaign_lifecycle',
        title: 'Campaign Lifecycle',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Publisher',
    icon: 'mdi mdi-account',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/publishers',
        title: 'Top Publishers',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/publishers/daily',
        title: 'Daily - Monthly',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/publishers/new_active',
        title: 'New Publishers',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: hq_base_url + '/report/publisher_profile',
        title: 'Profile',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: hq_base_url + '/publisher_referral',
        title: 'Referral',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      }
    ]
  },
  {
    path: '/revenue/conversions',
    title: 'Conversions',
    icon: 'mdi mdi-cart',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/conversions',
        title: 'Log',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/conversions/export',
        title: 'Postback conversion',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '/find_and_found',
    title: 'Find and Found',
    icon: 'fas fa-search',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/brand_bonus',
    title: 'Brand bonus',
    icon: 'far fa-copyright',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Report Sem',
    icon: 'mdi mdi-security',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/report_sem',
        title: 'Report',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        external_link: false,
        submenu: []
      },
      {
        path: '/report_sem/chart',
        title: 'Overview',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/report_sem/setup',
        title: 'Setup',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: 'geo-location',
        title: 'Location',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: '/report_sem/jp-sem',
        title: 'Report Sem JP',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        external_link: false,
        submenu: []
      },
    ]
  },
    {
        path: '/campaign-bonus',
        title: 'Campaign bonus',
        icon: 'icon-layers',
        class: '',
        extralink: false,
        submenu: []
    },
  {
    path: '/ekyc',
    title: 'EKYC',
    icon: 'mdi mdi-shield',
    class: '',
    extralink: false,
    external_link: false,
    submenu: []
  },
  {
    path: '',
    title: 'Tools',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Marketing',
    icon: 'mdi mdi-image-filter-vintage',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/notification',
        title: 'Notification',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: '/banner',
        title: 'Popup banner',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: '/banner/ads',
        title: 'ADS Banner',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Accountant',
    icon: 'mdi mdi-image-filter-vintage',
    class: 'has-arrow',
    extralink: false,
    submenu: [
       {
        path: '/publishers/info/export_data_koc',
        title: 'Export data KOC',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: hq_base_url + '/tools/cross_check/conversion/locking',
        title: 'Locking Conversion',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: hq_base_url + '/reason_reject',
        title: 'Rejection Reason',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: '/payment/close_data',
        title: 'Close data & Invoice',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/payment',
        title: 'Bill & Payment',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/payment/add-lost',
        title: 'Add lost',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/payment/debt',
        title: 'Advance Payment',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/payment/gen-click',
        title: 'Gen Click',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/conversions/export',
        title: 'Postback conversion',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: 'tech',
    title: 'Tech',
    icon: 'mdi mdi-image-filter-vintage',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: hq_base_url + '/files',
        title: 'Browse Files',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: hq_base_url + '/query_database',
        title: 'Query Database',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: hq_base_url + '/edit_datafeed',
        title: 'Edit Datafeed',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: hq_base_url + '/preview_datafeed',
        title: 'Preview Datafeed',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      },
      {
        path: '/techs/affiliations',
        title: 'Create/Reject affiliation',
        icon: 'mdi mdi-bluetooth-audio',
        class: '',
        extralink: false,
        external_link: false,
        submenu: []
      }
      // , {
      //   path: hq_base_url + '/export/payment',
      //   title: 'Payment Checking',
      //   icon: 'mdi mdi-adjust',
      //   class: '',
      //   extralink: false,
      //   external_link: true,
      //   submenu: []
      // }
    ]
  },
  {
    path: '',
    title: 'SP',
    icon: 'mdi mdi-image-filter-vintage',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path:  '/create_link',
        title: 'Create Link KOL',
        icon: 'mdi mdi-adjust mdi-arrow-top-right',
        class: '',
        extralink: false,
        external_link: true,
        submenu: []
      }
    ]
  }
];
