import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:' ',
        redirectTo:'about',
        pathMatch:'full'
    },
    {
        path:'about',
        loadComponent: ()=>import('./port/about/about.component').then(m => m.AboutComponent)
    },
    {
        path:'projects',
        loadComponent: ()=>import('./projects/projects.component').then(m => m.ProjectsComponent)
    },
    {
        path:'certificates',
        loadComponent: ()=>import('./certificates/certificates.component').then(m => m.CertificatesComponent)
    },
];
