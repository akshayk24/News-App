import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndividualArticlePageRoutingModule } from './individual-article-routing.module';

import { IndividualArticlePage } from './individual-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndividualArticlePageRoutingModule
  ],
  declarations: [IndividualArticlePage]
})
export class IndividualArticlePageModule {}
