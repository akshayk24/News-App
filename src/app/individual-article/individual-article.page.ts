import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from '../core/api-handler.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-individual-article',
    templateUrl: './individual-article.page.html',
    styleUrls: ['./individual-article.page.scss'],
})
export class IndividualArticlePage implements OnInit {
    public sharedNewsItem: any;
    constructor(private _apiService: ApiHandlerService, private _router: Router) {}

    ngOnInit() {
        this.sharedNewsItem = this._apiService.shareNewsItem;
        console.log('from service', this.sharedNewsItem);
    }
    onBack() {
        this._router.navigate(['allNews']);
    }
}
