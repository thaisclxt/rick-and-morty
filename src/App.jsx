import { Button, Image } from "@mantine/core";
import React, { useState, useEffect } from "react";
import { api } from "./api";

function App() {
	const [count, setCount] = useState(1);
	const [character, setCharacter] = useState({});

	useEffect(() => {
		fetch(`${api}/${count}`)
			.then((response) => response.json())
			.then((character) => setCharacter(character));
	}, [count]);

	return (
		<>
			<h1>Rick and Morty</h1>
			<Image
				width={350}
				height={350}
				src={character.image}
				alt={`Imagem de ${character.name}`}
				caption={character.name}
			/>
			<Button
				variant="gradient"
				gradient={{ from: "indigo", to: "cyan" }}
				onClick={() => setCount(count + 1)}
			>
				Próximo personagem
			</Button>
		</>
	);
}

export default App;
