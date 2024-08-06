import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './portafolio/pages/home-page/home-page.component';
import { LayoutPageComponent } from './portafolio/pages/layout-page/layout-page.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            {
                path: 'home',
                component: HomePageComponent
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64] 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export { routes };
