import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orderproduct } from './entities/orderproduct.entity';;
@Injectable()
export class OrderproductsService {
  constructor (
    @InjectRepository(Orderproduct)
    private readonly OrderProductRepo: Repository<Orderproduct>,
  ) {}
  public async createProduct(data: { order: any, menu: any, count: number}) {
    console.log(data)
    const new_trans = this.OrderProductRepo.create({
      order: data['order'],
      menu: data['menu'],
      count: data['count']
    })
    
    await this.OrderProductRepo.save(new_trans)

    
  }

}
