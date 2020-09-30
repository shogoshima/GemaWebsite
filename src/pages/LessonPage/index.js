import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import Jupyter from 'react-jupyter'
import axios from 'axios';
import CodeBlock from './CodeBlock';
import { FaAngleLeft } from 'react-icons/fa';

import './style.css';
import './reset-this.css';

// fixing some stuff that markdown isn't smart to recognize
function pre_processing(text) {
	// Replace reverse slashes (which markdown can't parse) to <br/>
	text = text
		.split('```')
		.map((str, idx) => {
			if (idx % 2 === 0) return str.replace(/\\[\r\n]/g, '<br/>'); // not inside code
			return str; // inside code, do nothing
		})
		.join('```');

	// When found array[idx], markdown thinks idx is a link, even if there's no URL in parenthesis after
	// Uses regex to replace [] with escaping \[\] characters, but only if not inside code (```)
	text = text
		.split('`')
		.map((str, idx) => {
			if (idx % 2 === 0) return str.replace(/\[(.*?)\](?!\()/g, '\\[$1\\]'); // not inside code
			return str; // inside code, do nothing
		})
		.join('`');
	return text;
}

// All lessons with extensions
const extension = {
	"Arrays_Strings": "md",
	"Funcoes_Recursao": "md",
	"Introducao": "md",
	"Programacao_C-C++": "md",
	"Repeticao": "md",
	"Complexidade": "md",
	"Busca_Binaria": "md",
	"STL": "md",
	"Programacao_Dinamica": "ipynb",
	"Teoria_dos_Numeros": "ipynb",
	"Grafos_DFS_BFS": "md",
	"Union_Find": "md",
	"Ordenacao_Topologica": "ipynb",
}

// xs={12} sm={12} md={12} lg={12} xl={12} ⯇ 🡄
function LessonPage() {
	const history = useHistory();
	const { title } = useParams();
	// const [ sourceText, setSourceText ] = useState('## Carregando texto...');
	const [ sourceText, setSourceText ] = useState('');
	const [ type, setType ] = useState('')
	const [ notFound, setNotFound ] = useState(false)
	useEffect(() => {
		if(!extension[title]) {
			setNotFound(true)
			return;
		}
		const path = require(`./lessons/${title}.${extension[title]}`);
		axios.get(path, { responseType: 'text' }).then((response) => {
			if(extension[title] === 'md') response.data = pre_processing(response.data);
			console.log(response.data)
			setSourceText(response.data);
			setType(extension[title])
		});
	}, [title]);


	const markdown = <Markdown 
		source={sourceText} 
		escapeHtml={false} 
		renderers={{ code: CodeBlock }} 
	/>

	const notebook = <Jupyter
		notebook={sourceText}
		showCode={true} // optional
		defaultStyle={true} // optional
		loadMathjax={true} // optional
	/>
	return (
		<div id="main-lesson">
			<Container fluid id="cont">
				<Row>
					<Col>
						<Header />
						<Row>
							<Col
								sm={{ span: 10, offset: 1 }}
								xs={{ span: 10, offset: 1 }}
								style={{ paddingTop: '2rem' }}
							>
								<a id="link" class="pointer" onClick={() => history.push('/Material')}>
									<FaAngleLeft /> &nbsp; Voltar{' '}
								</a>
							</Col>
						</Row>
					</Col>
				</Row>
				<div class="grow padding-top-2">
					<Row>
						<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
							{
							!notFound? 
								<div class="reset-this">
									{ type === 'md' ? markdown : type === 'ipynb'? notebook : <></> }
								</div>
							:
								<h2> Não encontramos esse material </h2>	
							}
						</Col>
					</Row>
				</div>

				<Row className="footer-row">
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default LessonPage;
