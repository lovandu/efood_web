// Layout
import {HeaderOnly} from '~/components/Layout'
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Order from '~/pages/Order';
import ProductDetail from '~/pages/ProductDetail';
// Public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/order', component: Order , layout:HeaderOnly},
  // { path: '/productDetail', component: ProductDetail, layout: null },
  { path: '/productDetail', component: ProductDetail, layout: HeaderOnly }
  // { path: '/productDetail', component: ProductDetail },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
