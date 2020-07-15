import * as mongoose from 'mongoose';

const TimeSchema = new mongoose.Schema({
	nome: {type: String, required: true},
	posicao: {type: String, required: true},
	numero: {type: number, required: true, unique: true},
	createdAt: {type: Date, default: Date.now}
})

export default mongoose.model('Jodadores', TimeSchema);