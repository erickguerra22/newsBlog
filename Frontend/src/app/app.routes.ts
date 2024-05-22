import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { NewPageComponent } from './new-page/new-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'news/:id', component: NewPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
