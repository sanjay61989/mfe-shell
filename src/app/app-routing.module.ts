import { loadRemoteModule } from '@angular-architects/native-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
  {
    path: 'exercise',
    loadChildren: () =>
      loadRemoteModule('exercise-tracker', './Module').then(
        (m) => m.ExerciseModule
      ),
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
