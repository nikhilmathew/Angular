export class Recipe {
    public name: string;
    public desciption: string;
    public imagePath: string;

    constructor(name: string, description: string,imagePath: string){
        this.name= name;
        this.desciption = description;
        this.imagePath = imagePath;
    }
}