import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'allNews',
        pathMatch: 'full',
    },
    {
        path: 'allNews',
        loadChildren: () => import('./all-news/all-news.module').then((m) => m.AllNewsPageModule),
    },
    {
        path: 'individualArticle',
        loadChildren: () => import('./individual-article/individual-article.module').then((m) => m.IndividualArticlePageModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
