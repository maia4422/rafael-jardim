import "./App.css";
import { useEffect } from "react";
import foto from "./assets/rafaelsozinho.png";
import nomenumero from "./assets/nomenumero.png";
import emconstrucao from "./assets/emconstruçao.webp";

function App() {
	useEffect(() => {
		document.title = "Rafael Jardim";
	}, []);

	return (
		<div id="parent">
			<header id="header">RAFAEL JARDIM</header>
			<main>
				<div>
					<img
						id="fotoemconstrucao"
						src={emconstrucao}
						alt="Site em construção"
					/>
					<img
						id="fotonumero1"
						src={nomenumero}
						alt="23023 Rafael Jardim"
					/>
				</div>

				<img id="fotorafael" src={foto} alt="Foto do Rafael Jardim" />
				<img
					id="fotonumero2"
					src={nomenumero}
					alt="23023 Rafael Jardim"
				/>
			</main>
		</div>
	);
}

export default App;
