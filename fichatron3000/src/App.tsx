import { useState } from "react";
import {
    names,
    races,
    classes,
    genres,
    cultures,
    morals,
    religions,
    descriptions,
    professions,
    heights,
    weights,
    traits,
    backstories,
    images,
} from "./data/data";
import { Character } from "./types/character";

function App() {
    const [color, setColor] = useState<string>("purple");
    const [name, setName] = useState<string>("Desconocido");
    const [race, setRace] = useState<string>("Desconocido");
    const [charClass, setCharClass] = useState<string>("Desconocido");
    const [genre, setGenre] = useState<string>("Desconocido");
    const [age, setAge] = useState<number>(0);
    const [culture, setCulture] = useState<string>("Desconocido");
    const [moral, setMoral] = useState<string>("Desconocido");
    const [religion, setReligion] = useState<string>("Desconocida");
    const [description, setDescription] = useState<string>("Sin descripción");
    const [profession, setProfession] = useState<string>("Sin profesión");
    const [height, setHeight] = useState<string>("?");
    const [weight, setWeight] = useState<string>("?");
    const [characterTraits, setCharacterTraits] = useState<string[]>([]);
    const [backstory, setBackstory] = useState<string>("");
    const [image, setImage] = useState<string>("");

    function generateCharacter() {
        setName(names[randomValue(names)]);
        setRace(races[randomValue(races)]);
        setCharClass(classes[randomValue(classes)]);
        setGenre(genres[randomValue(genres)]);
        setAge(Math.floor(Math.random() * 60) + 18);
        setCulture(cultures[randomValue(cultures)]);
        setMoral(morals[randomValue(morals)]);
        setReligion(religions[randomValue(religions)]);
        setDescription(descriptions[randomValue(descriptions)]);
        setProfession(professions[randomValue(professions)]);
        setHeight(heights[randomValue(heights)]);
        setWeight(weights[randomValue(weights)]);
        setCharacterTraits(getRandomTraits());
        setBackstory(backstories[randomValue(backstories)]);
        setImage(images[randomValue(images)]);
    }

    function randomValue<T>(array: T[]): number {
        return Math.floor(Math.random() * array.length);
    }

    function getRandomTraits(): string[] {
        const shuffled = [...traits].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }

    function changeColor() {
        setColor("red");
    }

    return (
        <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold text-purple-400 mb-6">
                Fichatrón
            </h1>

            <div className="bg-zinc-800 rounded-2xl shadow-xl p-6 w-full max-w-xl space-y-4">
                {image && (
                    <div className="w-full flex justify-center">
                        <img
                            src={image}
                            alt={name}
                            className="w-32 h-32 object-cover rounded-full border-4 border-purple-500 shadow-lg mb-4 "
                        />
                    </div>
                )}

                <div>
                    <h2 className="text-2xl font-semibold text-center mb-2">
                        {name}
                    </h2>
                    <p className="text-zinc-400 text-center italic">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                    <p>
                        <span className="text-purple-400">Raza:</span> {race}
                    </p>
                    <p>
                        <span className="text-purple-400">Clase:</span>{" "}
                        {charClass}
                    </p>
                    <p>
                        <span className="text-purple-400">Género:</span> {genre}
                    </p>
                    <p>
                        <span className="text-purple-400">Edad:</span> {age}{" "}
                        años
                    </p>
                    <p>
                        <span className="text-purple-400">Altura:</span>{" "}
                        {height}
                    </p>
                    <p>
                        <span className="text-purple-400">Peso:</span> {weight}
                    </p>
                    <p>
                        <span className="text-purple-400">Profesión:</span>{" "}
                        {profession}
                    </p>
                    <p>
                        <span className="text-purple-400">Cultura:</span>{" "}
                        {culture}
                    </p>
                    <p>
                        <span className="text-purple-400">Moral:</span> {moral}
                    </p>
                    <p>
                        <span className="text-purple-400">Religión:</span>{" "}
                        {religion}
                    </p>
                </div>

                <div>
                    <p className="text-purple-400 mb-1">Rasgos especiales:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                        {characterTraits.map((trait, index) => (
                            <li key={index}>{trait}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="text-purple-400 mb-1">Historia:</p>
                    <p className="text-sm text-zinc-300">{backstory}</p>
                </div>

                <button
                    onClick={generateCharacter}
                    className="mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-xl transition duration-200"
                >
                    Generar nuevo personaje
                </button>
                <button
                    onClick={changeColor}
                    className="mt-4 w-full bg-purple-500 hover:bg-${}-600 text-white py-2 px-4 rounded-xl transition duration-200"
                >
                    Cambiar color
                </button>
            </div>

            <footer className="mt-10 text-zinc-500 text-sm">
                hecho con magia arcana & tailwind (y react) 🪄
            </footer>
        </div>
    );
}

export default App;
