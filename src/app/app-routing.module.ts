import { loadRemoteModule } from '@angular-architects/native-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { startsWith } from './starts-with';
import { WrapperConfig } from './wrapper/wrapper-config';
import { WrapperComponent } from './wrapper/wrapper.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'gym',
    loadChildren: () =>
      loadRemoteModule('gym-tracker', './Module').then((m) => m.GymModule),
  },
  {
    path: 'mealplanner',
    loadChildren: () =>
      loadRemoteModule('meal-planner', './Module').then((m) => m.MealsModule),
  },
  // {
  //   path: 'exercise',
  //   loadChildren: () =>
  //     loadRemoteModule('exercise-tracker', './Module').then(
  //       (m) => m.ExerciseModule
  //     ),
  // },
  {
    matcher: startsWith('exercise'),
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'exercise-tracker',
        exposedModule: './web-components',
        elementName: 'mfe3-root',
      } as WrapperConfig,
    },
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
