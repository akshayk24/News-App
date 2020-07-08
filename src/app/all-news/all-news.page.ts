import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from '../core/api-handler.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-all-news',
    templateUrl: './all-news.page.html',
    styleUrls: ['./all-news.page.scss'],
})
export class AllNewsPage implements OnInit {
    public newsArray: any;
    public categoriesArray = ['General', 'Technology', 'Sports', 'Science', 'Health', 'Business', 'Entertainment'];
    private page = 1;
    private categoryToLoad: string;
    public showNoContent = false;
    public newsItemToSendObj = {
        title: null,
        description: null,
        author: null,
        publishedAt: null,
        urlToImage: null,
    };
    constructor(private _apiService: ApiHandlerService, private _router: Router) {}

    ngOnInit() {
        this._apiService.getNews(`category=general&pageSize=5&page=${this.page}`).subscribe((data) => {
            console.log(data);
            this.newsArray = data;
        });
        this.categoryToLoad = 'general';
    }
    onCategoryChange(c) {
        console.log('clickerd', c.detail.value);
        switch (c.detail.value) {
            case 'General':
                this.changeHandler(c.detail.value);
                this.categoryToLoad = c.detail.value;
                break;
            case 'Technology':
                this.changeHandler(c.detail.value);
                this.categoryToLoad = c.detail.value;
                break;
            case 'Sports':
                this.changeHandler(c.detail.value);
                this.categoryToLoad = c.detail.value;
                break;
            case 'Science':
                this.changeHandler(c.detail.value);
                this.categoryToLoad = c.detail.value;
                break;
            case 'Health':
                this.changeHandler(c.detail.value);
                this.categoryToLoad = c.detail.value;
                break;
            case 'Business':
                this.changeHandler(c.detail.value);
                this.categoryToLoad = c.detail.value;
                break;
            case 'Entertainment':
                this.changeHandler(c.detail.value);
                this.categoryToLoad = c.detail.value;
                break;
        }
    }
    changeHandler(category) {
        this.page++;
        console.log('change handler', this.page);
        this._apiService.getNews(`category=${category}&pageSize=5&page=${this.page}`).subscribe((data) => {
            if (data['status'] === 'ok') {
                this.newsArray = data;
                console.log(data);
            } else {
                console.log('error');
            }
        });
    }
    fetchMoreNews(event) {
        this.page++;
        console.log('fetch more', this.page);
        this._apiService.getNews(`category=${this.categoryToLoad}&pageSize=5&page=${this.page}`).subscribe((data) => {
            if (data['status'] === 'ok') {
                console.log(data);
                for (const news of data['articles']) {
                    this.newsArray.articles.push(news);
                }
                event.target.complete();
                console.log(this.newsArray);
            } else {
                console.log('error');
            }
        });
    }
    onSingleNewsItem(newsItemToSend) {
        this.newsItemToSendObj.title = newsItemToSend.title;
        this.newsItemToSendObj.description = newsItemToSend.description;
        this.newsItemToSendObj.author = newsItemToSend.author;
        this.newsItemToSendObj.publishedAt = newsItemToSend.publishedAt;
        this.newsItemToSendObj.urlToImage = newsItemToSend.urlToImage;
        this._apiService.shareNewsItem = this.newsItemToSendObj;
        this._router.navigate(['individualArticle']);
    }
}
