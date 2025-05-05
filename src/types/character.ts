export type Character = {
    // identity
    image: string;
    name: string;
    race: string;
    class: string;
    genre: string;
    age: number;
    culture: string;
    moral: string;
    religion: string;
    description: string;
    profession: string;
    height: string;
    weight: string;
    // stats
    stats: {
        strength: number;
        perception: number;
        endurance: number;
        charisma: number;
        intelligence: number;
        agility: number; // destreza
        luck: number;
    };
    // Special skills
    traits: string[];

    backstory: string;

    // game
    level: number;
    exp: number;
};
