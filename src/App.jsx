import {
	Button,
	Card,
	Image,
	Group,
	Text,
	Badge,
	Title,
	Container,
} from "@mantine/core";
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
		<Container size={350}>
			<Title align="center">Rick and Morty</Title>
			<Card shadow="sm" p="lg" radius="md" withBorder>
				<Card.Section>
					<Image src={character.image} alt={`Imagem de ${character.name}`} />
				</Card.Section>

				<Group position="apart" mt="md" mb="xs">
					<Text weight={500}>{character.name}</Text>
					<Badge color="pink" variant="light">
						{character.status}
					</Badge>
				</Group>

				<Button
					variant="gradient"
					gradient={{ from: "indigo", to: "cyan" }}
					onClick={() => setCount(count + 1)}
				>
					Próximo personagem
				</Button>
			</Card>
		</Container>
	);
}

export default App;
