import { Test, TestingModule } from '@nestjs/testing';
import { BrancheService } from '../branche.service';

describe('BrancheService', () => {
  let service: BrancheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrancheService],
    }).compile();

    service = module.get<BrancheService>(BrancheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
