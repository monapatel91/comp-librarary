import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DemoForm } from '../../demo-components/DemoForm';
import { DemoFormUncontrolled } from '../../demo-components/DemoFormUncontrolled';
import { DemoCssGrid } from '../../demo-components/DemoCssGrid';
import { DemoCssGridTemplate } from '../../demo-components/DemoCssGridTemplate';
import { UserTable } from '../../demo-components/UserTable';
import { DemoDynamicForm } from '../../demo-components/DemoDynamicForm';
import { ProductButtons } from '../../demo-components/ProductWrapper';
import { Sandbox } from '../../demo-components/Sandbox';
import { DemoBreadcrumbs } from '../../demo-components/DemoBreadcrumbs';

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/demo-form" element={DemoForm} />
      <Route path="/demo-form-uncontrolled" element={DemoFormUncontrolled} />
      <Route path="/demo-dynamic-form" element={DemoDynamicForm} />
      <Route path="/css-grid" element={DemoCssGrid} />
      <Route path="/css-grid-template" element={DemoCssGridTemplate} />
      <Route path="/user-table" element={UserTable} />
      <Route path="/product-buttons" element={ProductButtons} />
      <Route path="/sandbox" element={Sandbox} />
      <Route path="/breadcrumbs" element={DemoBreadcrumbs} />
    </Routes>
  );
};
