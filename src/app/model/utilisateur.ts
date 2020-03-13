import { Role } from './role'
import { Tache } from './tache'
import { Tiers } from './tiers'

export class Utilisateur {
    email: String
    nomUtilisateur: String
    prenomUtilisateur: String
    username: String
    password: String
    roles : Array<Role>
    taches : Array<Tache>
    tiersS: Array<Tiers>
}
