import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from 'src/member/entities/member.entity';
import { Menu } from 'src/menu/entities/menu.entity';
import { Orderproduct } from 'src/orderproducts/entities/orderproduct.entity';
import { OrderproductsService } from 'src/orderproducts/orderproducts.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Status } from './util/status.enum';

@Injectable()
export class OrderService extends OrderproductsService{
  constructor(
    @InjectRepository(Order)
    private readonly OrderRepo: Repository<Order>,

    @InjectRepository(Orderproduct)
    private readonly OrderproductRepo: Repository<Orderproduct>,

    @InjectRepository(Menu)
    private readonly MenuRepo: Repository<Menu>,

    @InjectRepository(Member)
    private readonly MemberRepo: Repository<Member>,

  ) {
    super(OrderproductRepo);
  }
  async create(createOrderDto: CreateOrderDto) {

    const user = await this.MemberRepo.findOneBy({ user_id: createOrderDto['member'] });
    const new_order = this.OrderRepo.create({
      'adress': createOrderDto['address'],
      'comment': createOrderDto['comment'],
      'total_price': createOrderDto['total_price'],
      'member': user
    })
    const order_data = await this.OrderRepo.save(new_order)

    await Promise.all
    (createOrderDto['orders'].map( async (e) => {
        const menu = await this.MenuRepo.findOneBy({ id: e['product_id'] })

        await this.createProduct({ 
          order: order_data,
          menu: menu,
          count: e['count']
        })
      })
    )
    return order_data;
  }

  async findAll(query: { take: number, page: number, status: Status}) {
    const take= query.take || 10
    const page=query.page || 1;
    const skip= (page-1) * take ;
    const [result, total] = await this.OrderRepo.findAndCount({
      relations: {
        products: {
          menu: true
        },
        member: true
      },
      where: {
        status: query['status']
      },
      order: {
        id: "DESC"
      },
      take,
      skip
    })
    return {
      data: result,
      count: total
    }
  }


  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.OrderRepo.findOneBy({ id });

    if (!order) {
      throw new NotFoundException(`There isn't any category with id: ${id}`);
    }

    this.OrderRepo.merge(order, updateOrderDto);

    return this.OrderRepo.save(order);
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
