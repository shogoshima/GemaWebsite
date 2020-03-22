import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown'
import axios from 'axios'
import CodeBlock from './CodeBlock'

import './style.css';
import './reset-this.css'

// xs={12} sm={12} md={12} lg={12} xl={12}
function LessonPage() {
    const { goBack } = useHistory()
    const { title } = useParams()
    const [sourceText, setSourceText] = useState("## Carregando texto...")
    useEffect(() => {
        const path = require(`./lessons/${title}.md`)
        axios.get(path, {responseType: 'text'}).then(response => {

            // Troca barras invertidas (que o markdown nao sabe parsear) pra <br/>
            response.data = response.data.replace(/\\[\r\n]/g, "<br/>")
            setSourceText(response.data)
        })
    }, [])
    
	return (
		<div id="main-material">
			<Container fluid id="cont">
				<Row>
					<Col>
						<Header />
                        <Row>
                            <Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                                <a id='link' class='pointer' onClick={() => goBack()}> {'<'} Voltar </a>
                            </Col>
                        </Row>
					</Col>
				</Row>
                <div class="grow padding-top-2">
                    <Row>
                        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                            <div class='reset-this'>
                                <Markdown source={sourceText} escapeHtml={false} renderers={{code: CodeBlock}}/>
                            </div>
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
