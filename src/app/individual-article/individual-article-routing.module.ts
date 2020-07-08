import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndividualArticlePage } from './individual-article.page';

const routes: Routes = [
  {
    path: '',
    component: IndividualArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualArticlePageRoutingModule {}
