import prismaClient from "../../prisma";

interface OrderRequest {
    number_sus: string;
    name: string;
}

class CreateOrderService {
    async execute({ number_sus, name }: OrderRequest) {
        const order = await prismaClient.order.create({
            data: {
                number_sus: number_sus,
                name: name
            }
        })

        return order

    }
}


export { CreateOrderService }

