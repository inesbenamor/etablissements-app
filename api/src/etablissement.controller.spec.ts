import { Test, TestingModule } from '@nestjs/testing';
import { EtablissementController } from './etablissement.controller';
import { EtablissementService } from './etablissement.service';

describe('EtablissementController', () => {
  let etablissementController: EtablissementController;

  beforeEach(async () => {
    const etablissement: TestingModule = await Test.createTestingModule({
      controllers: [EtablissementController],
      providers: [EtablissementService],
    }).compile();

    etablissementController = etablissement.get<EtablissementController>(EtablissementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
    });
  });
});
