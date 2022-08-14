import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, observable } from 'rxjs';
import { Like } from '../models/like';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    constructor(private http: HttpClient) { }

    httpOptions = {
        header: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    listPost() {
        return this.http.get("http://127.0.0.1:8000/api/post");
    }

    // addPost() {
    //     return this.http.get("http://127.0.0.1:8000/api/addPost");
    // }

    // editPost() {
    //     return this.http.get("http://127.0.0.1:8000/api/updatePost/{id}");
    // }

    // deletePost() {
    //     return this.http.get("http://127.0.0.1:8000/api/deletePost/{id}");
    // }


    faceSnaps: Like[] = [
        {
            title: 'Johnson & Johnson',
            description: 'Johnson & Johnson is a global leadere beauty brand in the U.S.',
            createDate: new Date(),
            like: 40,
            imageUrl: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
            location: 'New York',
            // post: 'Hello post'
        },
        {
            title: 'The Body Shop',
            description: 'Johnson beauty brand in the U.S.he U.S.',
            createDate: new Date(),
            like: 23,
            imageUrl: 'https://images.unsplash.com/photo-1654538985746-b4ee3c142193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            location: 'Paris',
            // post: 'Hello post'
        },
        {
            title: 'Louis Vuitton',
            description: 'Johnson beauty brand in the U.S.',
            createDate: new Date(),
            like: 0,
            imageUrl: 'https://images.unsplash.com/photo-1655500062895-f9558c44309a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            // location: 'Paris',
            // post: 'Hello post'
        }
    ];
}