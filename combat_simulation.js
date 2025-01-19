// Classe représentant un combattant
class Fighter {
    constructor(name, health, attackPower, accuracy) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.accuracy = accuracy;
    }

    // Méthode pour attaquer un adversaire
    attack(opponent) {
        if (this.checkAccuracy()) {
            console.log(`${this.name} attaque ${opponent.name} et inflige ${this.attackPower} points de dégâts !`);
            opponent.health -= this.attackPower;
            if (opponent.health < 0) opponent.health = 0;
        } else {
            console.log(`${this.name} tente d'attaquer ${opponent.name}, mais échoue !`);
        }
    }

    // Méthode pour vérifier si l'attaque touche
    checkAccuracy() {
        return Math.random() < this.accuracy;
    }
}

// Initialisation des combattants
const fighter1 = new Fighter("Gladiator A", 100, 15, 0.7);
const fighter2 = new Fighter("Gladiator B", 100, 12, 0.8);

console.log("Début du combat entre", fighter1.name, "et", fighter2.name);

// Boucle de combat
while (fighter1.health > 0 && fighter2.health > 0) {
    // Fighter 1 attaque Fighter 2
    fighter1.attack(fighter2);

    // Vérifier si Fighter 2 est KO
    if (fighter2.health <= 0) {
        console.log(`${fighter2.name} est vaincu ! ${fighter1.name} remporte le combat !`);
        break;
    }

    // Fighter 2 attaque Fighter 1
    fighter2.attack(fighter1);

    // Vérifier si Fighter 1 est KO
    if (fighter1.health <= 0) {
        console.log(`${fighter1.name} est vaincu ! ${fighter2.name} remporte le combat !`);
        break;
    }

    // Affichage des points de vie restants
    console.log(`${fighter1.name}: ${fighter1.health} PV | ${fighter2.name}: ${fighter2.health} PV`);
}

console.log("Le combat est terminé !");
