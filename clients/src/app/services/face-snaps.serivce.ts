import { Injectable } from '@angular/core';
import { Like } from '../models/like';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

    faceSnaps: Like[] = [
        {
            title: 'Johnson & Johnson',
            description: 'Johnson & Johnson is a global leadere beauty brand in the U.S.',
            createDate: new Date(),
            like: 40,
            imageUrl: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
            location: 'New York'
        },
        {
            title: 'The Body Shop',
            description: 'Johnson beauty brand in the U.S.he U.S.',
            createDate: new Date(),
            like: 23,
            imageUrl: 'https://images.unsplash.com/photo-1654538985746-b4ee3c142193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            location: 'Paris'
        },
        {
            title: 'Louis Vuitton',
            description: 'Johnson beauty brand in the U.S.',
            createDate: new Date(),
            like: 0,
            imageUrl: 'https://images.unsplash.com/photo-1655500062895-f9558c44309a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'

        }
    ];
}