import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: 'home', component: HomeComponent }, { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) }, { path: 'gallery', loadChildren: () => import('./features/gallery/gallery.module').then(m => m.GalleryModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
