import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => { return import('./home/home').then((m) => m.Home) }
    },
    {
        path: 'work',
        loadComponent: () => { return import('./workhistory/workhistory').then((m) => m.Workhistory) }
    },
    {
        path: 'personal',
        loadComponent: () => { return import('./personal/personal').then((m) => m.Personal) }
    }
];
