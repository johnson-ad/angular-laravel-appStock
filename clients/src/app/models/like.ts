
export class Like {
    //Premiere methode
    // title: string;
    // description: string;
    // createDate: Date;
    // like: number;
    // imageUrl: string;

    // constructor(title: string, description: string, createDate: Date, like: number, imageUrl: string) {
    //     this.title = title;
    //     this.description = description;
    //     this.createDate = createDate;
    //     this.like = like;
    //     this.imageUrl = imageUrl;
    // }

    //Deuxieme methode
    // constructor(
    //     public title: string,
    //     public description: string,
    //     public createDate: Date,
    //     public like: number,
    //     public imageUrl: string,
    //     public location?: string) {

    // }

    //Troisieme methode
    title!: string;
    description!: string;
    createDate!: Date;
    like!: number;
    imageUrl!: string;
    location?: string;
}
