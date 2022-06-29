// it can bee interface or class which is used to map 
//the data retrive from backend technology
export interface Product {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:Rating;


}
interface Rating{
    rate:number;
    count:number;
}


/*export class product{
    constructor(public id:number,public title:string,public price:number,public description:string...............){}
}*/
