class User{
    id: string;
    img?: string;
    name: string;
    placeCount: number;

    constructor(){
        this.id = '';
        this.name = '';
        this.placeCount = 0;
    }
}

export default User;