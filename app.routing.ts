import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  // authenticated route
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      // { path: '', component: HomeComponent, pathMatch: 'full', data: {title: 'Dashboard'} },
      // { path: '', redirectTo: '/dashboard/classic', pathMatch: 'full' },
      /*{
        path: 'starter',
        loadChildren: './modules/starter/starter.module#StarterModule'
      },*/
      {
        path: '',
        redirectTo: '/overview',
        pathMatch: 'full'
      },
      {
        path: 'campaigns/setup',
        loadChildren: () => import('./modules/setup-campaign/setup-campaign.module').then(m => m.SetupCampaignModule)
      },
      {
        path: 'campaigns',
        loadChildren: () => import('./modules/campaign/campaign.module').then(m => m.CampaignModule)
      },
      {
        path: 'conversions',
        loadChildren: () => import('./modules/conversions/report-conversions.module').then(m => m.ConversionsModule)
      },
      {
        path: 'kpi',
        loadChildren: () => import('./modules/kpi/kpi.module').then(m => m.KpiModule)
      },
      {
        path: 'merchant',
        loadChildren: () => import('./modules/merchant/merchant.module').then(m => m.MerchantModule)
      },
      {
        path: 'overview',
        loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./modules/products/report-products.module').then(m => m.ProductsModule)
      },
      {
        path: 'publishers',
        loadChildren: () => import('./modules/publishers/publishers.module').then(m => m.PublishersModule)
      },
      {
        path: 'staff',
        loadChildren: () => import('./modules/staffs/staffs.module').then(m => m.StaffsModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('./modules/payment/payment.module').then(m => m.PaymentModule),
      },
      {
        path: 'report_sem',
        loadChildren: () => import('./modules/report_sem/report-sem.module').then(m => m.ReportSemModule)
      },
      {
        path: 'report_kpi',
        loadChildren: () => import('./modules/report-kpi/report_kpi.module').then(m => m.ReportKpiModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./modules/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'banner',
        loadChildren: () => import('./modules/banners/banners.module').then(m => m.BannersModule)
      },
      {
        path: 'deal_coupon',
        loadChildren: () => import('./modules/creative/creative.module').then(m => m.CreativeModule)
      },
      {
        path: 'ekyc',
        loadChildren: () => import('./modules/ekyc-manual/ekyc-manual.module').then(m => m.EkycManualModule)
      },
      {
        path: 'contract_management',
        loadChildren: () => import('./modules/contract-management/contract-management.module').then(m => m.ContractManagementModule)
      },
      {
        path: 'geo-location',
        loadChildren: () => import('./modules/geo-location/geo-location.module').then(m => m.GeoLocationModule)
      },
      {
        path: 'create_link',
        loadChildren: () => import('./modules/tools/tools.module').then(m => m.ToolsModule)
      },
      {
        path: 'find_and_found',
        loadChildren: () => import('./modules/find-and-found/find-and-found.module').then(m => m.FindAndFoundModule)
      },
      {
        path: 'brand_bonus',
        loadChildren: () => import('./modules/brand-bonus/brand-bonus.module').then(m => m.BrandBonusModule)
      },
        {
            path: 'techs',
            loadChildren: () => import('./modules/techs/techs.module').then(m => m.TechsModule)
        },
        {
            path: 'campaign-bonus',
            loadChildren: () => import('./modules/campaign-bonus/campaign-bonus.module').then(m => m.CampaignBonusModule)
        },
      {
        path: 'creative_file',
        loadChildren: () => import('./modules/creative-file/creative-file.module').then(m => m.CreativeFileModule)
      }
    ]
  },

  // blank layout routes
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {enableTracing: false /* <-- debugging purposes only */ }) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
