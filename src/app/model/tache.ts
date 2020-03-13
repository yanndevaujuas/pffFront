import { Utilisateur } from './utilisateur'
import { Affaire } from './affaire'
import { Tribunal } from './tribunal'
import { Phase } from './phase'

export class Tache {
    dateCreation: Date
    titre: String
    descriptionTache: String
    statutAudience: Boolean
    utiliateur: Utilisateur
    affaire: Affaire
    tribunal: Tribunal
    phases: Array<Phase>
}
