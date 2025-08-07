import mongoose, { Schema, Document } from 'mongoose';

export interface IBeneficiario extends Document {
  nome: string;
  nome_responsavel: string;
  data_nascimento: string;
  phone1: string;
  phone2: string;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
}

const BeneficiarioSchema = new Schema<IBeneficiario>({
  nome: { type: String, required: true },
  nome_responsavel: { type: String, required: true },
  data_nascimento: { type: String, required: true },
  phone1: { type: String, required: true },
  phone2: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }
  }
}, { timestamps: true });

BeneficiarioSchema.index({ location: '2dsphere' });

export const Beneficiario = mongoose.model<IBeneficiario>('Beneficiario', BeneficiarioSchema);
