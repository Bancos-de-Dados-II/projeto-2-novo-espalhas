import {Router} from 'express';
import BeneficiarioController from '../controller/beneficiario.controller';
import asyncHandler from 'express-async-handler';

const BenefRouter = Router();

BenefRouter.get('/combo', asyncHandler(BeneficiarioController.filterByNomeAndLocation));
BenefRouter.get('/', asyncHandler(BeneficiarioController.getBenefs));
BenefRouter.post('/', asyncHandler(BeneficiarioController.createBenefs));
BenefRouter.get('/:id', asyncHandler(BeneficiarioController.getBenefById));
BenefRouter.patch('/:id', asyncHandler(BeneficiarioController.editBenef));
BenefRouter.delete('/:id', asyncHandler(BeneficiarioController.deleteBenef));

export default BenefRouter;
