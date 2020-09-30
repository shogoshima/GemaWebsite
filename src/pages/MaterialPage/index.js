import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { useHistory } from 'react-router-dom';

import './style.css';


// Para adicionar novos links de aulas insira no final do array classes conforme o formato a seguir
// classes.push({ title: 'Nome da aula', url: 'Material/Aula/url da aula', type: 'tipo (markdown ou html)' });
const classes = [
	{ title: 'Introdução', url: '/Material/Aula/Introducao?' },
	{ title: 'Programação C/C++', url: '/Material/Aula/Programacao_C-C++' },
	{ title: 'Repetição', url: '/Material/Aula/Repeticao' },
	{ title: 'Arrays e Strings', url: '/Material/Aula/Arrays_Strings' },
	{ title: 'Funções e Recursão', url: '/Material/Aula/Funcoes_Recursao' },
	{ title: 'Complexidade', url: '/Material/Aula/Complexidade' },
	{ title: 'Busca Binária', url: '/Material/Aula/Busca_Binaria' },
	{ title: 'STL (Standard Template Library)', url: '/Material/Aula/STL' },
	{ title: 'Programação Dinâmica', url: '/Material/Aula/Programacao_Dinamica' },
	{ title: 'Grafos (DFS e BFS)', url: '/Material/Aula/Grafos_DFS_BFS' },
	{ title: 'Teoria dos Números', url: '/Material/Aula/Teoria_dos_Numeros' },
	{ title: 'Union Find', url: '/Material/Aula/Union_Find' },
	{ title: 'Ordenação Topológica', url: '/Material/Aula/Ordenacao_Topologica' },
]

// Links de materiais relevantes
const links = [
	{ title: 'GitHub do GEMA', url: 'https://github.com/icmcgema' },
	{ title: 'GitHub do Fakhoury', url: 'https://github.com/andrefakhoury' },
	{ title: 'GitHub do Forbes', url: 'https://github.com/VictorXjoeY' },
	{ title: 'GitHub do LoppA', url: 'https://github.com/LoppA' },
	{ title: 'GitHub da lmoura', url: 'https://github.com/lusmoura' },
	{ title: 'GitHub do Preischadt', url: 'https://github.com/thiagop-usp' },
	{ title: 'GitHub do David', url: 'https://github.com/davidcairuz' },
]

// xs={12} sm={12} md={12} lg={12} xl={12}
function MaterialPage() {
	const history = useHistory();

	return (
		<div id="main-material">
			<Container fluid id="cont">
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>

				<Row>
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<h1 className="title">Materiais</h1>
						<h3>A Programação Competitiva</h3>
						<p className="quote">
							"Dado um problema de programação já conhecido, resolva ele no menor tempo possível."
						</p>
						<p>
							O estudo em programação competitiva se baseia em várias técnicas e algoritmos. Além de
							conhecê-los, também é importante uma constante prática, para que o tempo que se gasta em
							cada problema seja menor. Nos links abaixo você encontra alguns materiais preparados pelo
							GEMA para te auxiliar nesses estudos:
						</p>
					</Col>
				</Row>
				<br />
				<Row>
					<Col sm={{ span: 5, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<ListGroup className="material-links first">
							{classes.slice(0, Math.ceil(classes.length / 2)).map((c) => (
								<ListGroup.Item action onClick={() => history.push(c.url)}>
									{c.title}
								</ListGroup.Item>
							))}
						</ListGroup>
					</Col>
					<Col sm={{ span: 5, offset: 0 }} xs={{ span: 10, offset: 1 }}>
						<ListGroup className="material-links">
							{classes.slice(Math.ceil(classes.length / 2), classes.lastIndex).map((c) => (
								<ListGroup.Item action onClick={() => history.push(c.url)}>
									{c.title}
								</ListGroup.Item>
							))}
						</ListGroup>
					</Col>
				</Row>
                <Row>
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<hr />
						<h4>Links relevantes</h4>
					</Col>
					<Col className="links-col" sm={{ span: 5, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<ListGroup className="material-links first">
							{links.slice(0, Math.ceil(links.length / 2)).map((l) => (
								<ListGroup.Item action href={l.url} rel="noopener noreferrer" target="_blank">
									{l.title}
								</ListGroup.Item>
							))}
						</ListGroup>
					</Col>
					<Col className="links-col" sm={{ span: 5, offset: 0 }} xs={{ span: 10, offset: 1 }}>
						<ListGroup className="material-links">
							{links.slice(Math.ceil(links.length / 2), links.lastIndex).map((l) => (
								<ListGroup.Item action href={l.url} rel="noopener noreferrer" target="_blank">
									{l.title}
								</ListGroup.Item>
							))}
						</ListGroup>
					</Col>
                    </Row>
				
				<Row className="footer-row">
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default MaterialPage;
