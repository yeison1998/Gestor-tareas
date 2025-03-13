import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./components/auth/auth.routes').then(a => a.authRoutes)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./components/dashboard/dashboard.routes').then(a => a.dashboardRoute)
    },
    {
        path: 'workManagement',
        loadChildren: () => import('./components/work-management/workManagement.routes').then(a => a.workManagementRoutes)
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
    // {
    // path: '',
    // loadComponent: () => import('./app.component')
    // children: [
    // {
    // path: '**',
    // redirectTo: 'dashboard'
    // }
    // ]
    // }
];
