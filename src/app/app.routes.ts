import { Routes } from '@angular/router';
import { AboutComponent } from './port/about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificatesComponent } from './certificates/certificates.component';

export const routes: Routes = [
    {path: "", component: AboutComponent},
    {path:'about',component: AboutComponent},
    {path:'projects',component: ProjectsComponent},
    {path:'certificates', component: CertificatesComponent},
];
