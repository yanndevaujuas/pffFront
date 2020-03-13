import { Tache } from './tache'

export class Affaire {

    reference: String
	titre: String
	descriptionAffaire: String
    statut: number
    taches: Array<Tache>
    documents: Array<Document>
}
