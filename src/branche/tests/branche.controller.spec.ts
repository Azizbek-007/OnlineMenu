import { Test, TestingModule } from '@nestjs/testing';
import { BrancheController } from '../branche.controller';
import { BrancheService } from '../branche.service';

describe('BrancheController', () => {
  let controller: BrancheController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrancheController],
      providers: [BrancheService],
    }).compile();

    controller = module.get<BrancheController>(BrancheController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
