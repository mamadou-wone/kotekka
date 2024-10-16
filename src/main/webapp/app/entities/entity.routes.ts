import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'kotekkaApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'beneficiary',
    data: { pageTitle: 'kotekkaApp.beneficiary.home.title' },
    loadChildren: () => import('./beneficiary/beneficiary.routes'),
  },
  {
    path: 'cache-info',
    data: { pageTitle: 'kotekkaApp.cacheInfo.home.title' },
    loadChildren: () => import('./cache-info/cache-info.routes'),
  },
  {
    path: 'card',
    data: { pageTitle: 'kotekkaApp.card.home.title' },
    loadChildren: () => import('./card/card.routes'),
  },
  {
    path: 'cin',
    data: { pageTitle: 'kotekkaApp.cin.home.title' },
    loadChildren: () => import('./cin/cin.routes'),
  },
  {
    path: 'device',
    data: { pageTitle: 'kotekkaApp.device.home.title' },
    loadChildren: () => import('./device/device.routes'),
  },
  {
    path: 'failed-attempt',
    data: { pageTitle: 'kotekkaApp.failedAttempt.home.title' },
    loadChildren: () => import('./failed-attempt/failed-attempt.routes'),
  },
  {
    path: 'failed-attempt-history',
    data: { pageTitle: 'kotekkaApp.failedAttemptHistory.home.title' },
    loadChildren: () => import('./failed-attempt-history/failed-attempt-history.routes'),
  },
  {
    path: 'feature-flag',
    data: { pageTitle: 'kotekkaApp.featureFlag.home.title' },
    loadChildren: () => import('./feature-flag/feature-flag.routes'),
  },
  {
    path: 'image',
    data: { pageTitle: 'kotekkaApp.image.home.title' },
    loadChildren: () => import('./image/image.routes'),
  },
  {
    path: 'incoming-call',
    data: { pageTitle: 'kotekkaApp.incomingCall.home.title' },
    loadChildren: () => import('./incoming-call/incoming-call.routes'),
  },
  {
    path: 'money-request',
    data: { pageTitle: 'kotekkaApp.moneyRequest.home.title' },
    loadChildren: () => import('./money-request/money-request.routes'),
  },
  {
    path: 'notification',
    data: { pageTitle: 'kotekkaApp.notification.home.title' },
    loadChildren: () => import('./notification/notification.routes'),
  },
  {
    path: 'one-time-password',
    data: { pageTitle: 'kotekkaApp.oneTimePassword.home.title' },
    loadChildren: () => import('./one-time-password/one-time-password.routes'),
  },
  {
    path: 'organisation',
    data: { pageTitle: 'kotekkaApp.organisation.home.title' },
    loadChildren: () => import('./organisation/organisation.routes'),
  },
  {
    path: 'partner-call',
    data: { pageTitle: 'kotekkaApp.partnerCall.home.title' },
    loadChildren: () => import('./partner-call/partner-call.routes'),
  },
  {
    path: 'recipient',
    data: { pageTitle: 'kotekkaApp.recipient.home.title' },
    loadChildren: () => import('./recipient/recipient.routes'),
  },
  {
    path: 'referal-info',
    data: { pageTitle: 'kotekkaApp.referalInfo.home.title' },
    loadChildren: () => import('./referal-info/referal-info.routes'),
  },
  {
    path: 'service-client',
    data: { pageTitle: 'kotekkaApp.serviceClient.home.title' },
    loadChildren: () => import('./service-client/service-client.routes'),
  },
  {
    path: 'transaction',
    data: { pageTitle: 'kotekkaApp.transaction.home.title' },
    loadChildren: () => import('./transaction/transaction.routes'),
  },
  {
    path: 'user-access',
    data: { pageTitle: 'kotekkaApp.userAccess.home.title' },
    loadChildren: () => import('./user-access/user-access.routes'),
  },
  {
    path: 'user-affiliation',
    data: { pageTitle: 'kotekkaApp.userAffiliation.home.title' },
    loadChildren: () => import('./user-affiliation/user-affiliation.routes'),
  },
  {
    path: 'user-preference',
    data: { pageTitle: 'kotekkaApp.userPreference.home.title' },
    loadChildren: () => import('./user-preference/user-preference.routes'),
  },
  {
    path: 'wallet',
    data: { pageTitle: 'kotekkaApp.wallet.home.title' },
    loadChildren: () => import('./wallet/wallet.routes'),
  },
  {
    path: 'wallet-holder',
    data: { pageTitle: 'kotekkaApp.walletHolder.home.title' },
    loadChildren: () => import('./wallet-holder/wallet-holder.routes'),
  },
  {
    path: 'product',
    data: { pageTitle: 'kotekkaApp.product.home.title' },
    loadChildren: () => import('./product/product.routes'),
  },
  {
    path: 'category',
    data: { pageTitle: 'kotekkaApp.category.home.title' },
    loadChildren: () => import('./category/category.routes'),
  },
  {
    path: 'collection',
    data: { pageTitle: 'kotekkaApp.collection.home.title' },
    loadChildren: () => import('./collection/collection.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
