import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
{path:"about", component:AboutComponent},
{path:"contact", component:ContactComponent},
{path:"portfolio", component:PortfolioComponent},
{path:"", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
