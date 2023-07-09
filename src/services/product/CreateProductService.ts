import prismaClient from "../../prisma";

interface ProductRequest{    
    name: string;
    code: string;
    delivery_time: string;
    price: string;
    description: string;
    category_id: string;

}

class CreateProductService {
    async execute({ name, code, delivery_time, price, description, category_id }: ProductRequest){

const product = await prismaClient.product.create({
    data:{
        name: name,
        code: code,
        delivery_time: delivery_time,
        price: price, 
        description: description,
        category_id: category_id,
    }
})
        return product
    }
}
export { CreateProductService }