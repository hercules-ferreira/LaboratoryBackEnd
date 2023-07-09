import { CreateOrderService } from "../../services/order/CreateOrderService";
import { Request, Response } from "express";


class CreateOrderController{
    async handle(req: Request, res: Response){
        const {number_sus, name} = req.body;

        const createOrderService = new CreateOrderService();
        const order = await createOrderService.execute({
            number_sus, name
        });

        return res.json(order)
        
    }

}

export { CreateOrderController }

