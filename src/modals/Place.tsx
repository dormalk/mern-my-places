class Place{
    id!: string;
    imageUrl?: string;
    description?: string;
    title?: string;
    address!: string;
    creator!: string;
    location!: {lat: number, lng:number};
}

export default Place;