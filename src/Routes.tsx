import { createBrowserRouter, RouterProvider } from 'react-router';
import { StartPage } from './pages/StartPage';
import { BasicInfoPage } from './pages/BasicInfoPage.tsx';
import { BusinessInfoPage } from './pages/BusinessInfoPage.tsx';
import { MerchantInfoPage } from './pages/MerchantInfoPage.tsx';
import { AddressPage } from './pages/AddressPage.tsx';
import { CompletePage } from './pages/CompletePage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: StartPage,
  },
  {
    path: '/basic-info',
    Component: BasicInfoPage,
  },
  {
    path: '/merchant-info',
    Component: MerchantInfoPage,
  },
  {
    path: '/address',
    Component: AddressPage,
  },
  {
    path: '/business-info',
    Component: BusinessInfoPage,
  },
  {
    path: '/complete',
    Component: CompletePage,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
