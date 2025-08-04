import {Beneficiario, IBeneficiario} from '../models/Beneficiario.model';

export default class BeneficiarioService {
    static async getAllBeneficiarios() {
        return await Beneficiario.find().exec();
    }

    static async insertBeneficiario(beneficiarioData: IBeneficiario) {
        const benef = new Beneficiario(beneficiarioData);
        return benef.save();
    }

    static async getById(id: any) {
        return await Beneficiario.findById(id).exec();
    }

    static async editBenefById(id: any, data: any) {
        return Beneficiario.findByIdAndUpdate(id, data, {new: true}).exec();
    }

    static async deleteBenefById(id: any) {
        await Beneficiario.findByIdAndDelete(id).exec();
    }
}
