import React from 'react'
import Master from './layers/Master'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GetStarted from './pages/GetStarted';
import Installation from './pages/Installation';
import NotFound from './pages/NotFound';
import Wrapper from './pages/Wrapper';
import Grow from './pages/Flex/Grow';
import Basis from './pages/Flex/Basis';
import Direction from './pages/Flex/Direction';
import Wrap from './pages/Flex/Wrap';
import Flex from './pages/Flex/Flex';
import Shrink from './pages/Flex/Shrink';
import Order from './pages/Flex/Order';
import TemplateColumns from './pages/Grid/TemplateColumns';
import ColumnStartEnd from './pages/Grid/ColumnStartEnd';
import TemplateRows from './pages/Grid/TemplateRows';
import RowStartEnd from './pages/Grid/RowStartEnd';
import AutoFlow from './pages/Grid/AutoFlow';
import AutoColumns from './pages/Grid/AutoColumns';
import AutoRows from './pages/Grid/AutoRows';
import Gap from './pages/utils/Gap';
import JustifyContent from './pages/utils/JustifyContent';
import JustifyItems from './pages/utils/JustifyItems';
import JustifySelf from './pages/utils/JustifySelf';
import AlignContent from './pages/utils/AlignContent';
import AlignItems from './pages/utils/AlignItems';
import AlignSelf from './pages/utils/AlignSelf';
import PlaceContent from './pages/utils/PlaceContent';
import PlaceItems from './pages/utils/PlaceItems';
import PlaceSelf from './pages/utils/PlaceSelf';
import About from './pages/About';

const router = createBrowserRouter([
  
  {
    path:'about',
    element: <About />
  },

{
  element: <Master />,
  errorElement: <NotFound />,
  children : [
    {
      path: "/",
      element: <GetStarted />,
    },
    {
      path: "/installation",
      element: <Installation />,
    },
    {
      path: "/wrapper",
      element: <Wrapper />,
    },
    {
      path: "/flex-basis",
      element: <Basis />
    },
    {
      path: "/flex-direction",
      element: <Direction />
    },
    {
      path: "/flex-wrap",
      element: <Wrap />
    },
    {
      path: "/flex",
      element: <Flex />
    },
    {
      path: "/flex-grow",
      element: <Grow />
    },
    {
      path: "/flex-shrink",
      element: <Shrink />
    },
    {
      path: "/order",
      element: <Order />
    },
    {
      path: "/grid-template-columns",
      element: <TemplateColumns />
    },
    {
      path: "/grid-column-start-end",
      element: <ColumnStartEnd />
    },
    {
      path: "/grid-template-rows",
      element: <TemplateRows />
    },
    {
      path: "/grid-row-start-end",
      element: <RowStartEnd />
    },
    {
      path: "/grid-auto-flow",
      element: <AutoFlow />
    },
    {
      path: "/grid-auto-columns",
      element: <AutoColumns />
    },
    {
      path: "/grid-auto-rows",
      element: <AutoRows />
    },
    {
      path: "/grid-auto-rows",
      element: <AutoRows />
    },
    {
      path: "/gap",
      element: <Gap />
    },
    {
      path: "/justify-content",
      element: <JustifyContent />
    },
    {
      path: "/justify-items",
      element: <JustifyItems />
    },
    {
      path: "/justify-self",
      element: <JustifySelf />
    },
    {
      path: "/align-content",
      element: <AlignContent />
    },
    {
      path: "/align-items",
      element: <AlignItems />
    },
    {
      path: "/align-self",
      element: <AlignSelf />
    },
    {
      path: "/place-content",
      element: <PlaceContent />
    },
    {
      path: "/place-items",
      element: <PlaceItems />
    },
    {
      path: "/place-self",
      element: <PlaceSelf />
    },
  ],
  
},
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App