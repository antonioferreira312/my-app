import mongoose, { models, Schema } from 'mongoose';
import INote from '@/interfaces/INote';

const NoteSchema: Schema = new Schema(
	{
		title: {
			type: String,
			required: [true, 'Titulo requerido'],
			unique: true,
			trim: true,
			maxLength: [40, 'Título aceita até 40 caracteres']
		},
		description: {
			type: String,
			required: true,
			maxLength: [200, 'Descrição aceita até 200 caracteres']
		}
    
	},
	{
		timestamps: true,
	}
);
    
const NoteModel = models.Note || mongoose.model<INote>('Note', NoteSchema);
export default NoteModel;
