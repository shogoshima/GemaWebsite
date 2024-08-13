import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/index';
import NewsCard from '../../components/NewsCard/index';
import Footer from '../../components/Footer/index';
import Button from 'react-bootstrap/Button';
// import Logo_Facebook from '../../images/facebook_icon.png';
// import Logo_Github from '../../images/github_icon.png';

import './style.css';
// xs={12} sm={12} md={12} lg={12} xl={12}

function HomePage() {
	return (
		<div id="main-home">
			<Container fluid>
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col>
						<div id="backg">
							{/* <Container id="logo-container" fluid>
								<Row>
									<Col md={{ span: 4, offset: 4 }} sm={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }} id="logo-col">
										<ul className="list-inline social-buttons">
											<li className="list-inline-item">
												<a href="https://www.facebook.com/gemaicmc/">
													<img src={Logo_Facebook} alt="Facebook" className="logos" />
												</a>
											</li>
											<li className="list-inline-item">
												<a href="https://github.com/icmcgema">
													<img src={Logo_Github} alt="Github" className="logos" />
												</a>
											</li>
										</ul>
									</Col>
								</Row>
							</Container> */}
						</div>
					</Col>
				</Row>
				<div className='regional-2024'>
					<h3>REGIONAL 2024</h3>
					<div>Vai fazer a regional em São Carlos?</div>
					<div id='card-buttonToolbar'>
						<Button id="card-button" href="https://precious-fish-530.notion.site/REGIONAL-2024-b07cac9a10b6442a96a5f635be3a9844?pvs=4" target="_blank">Acesse aqui para mais informações!</Button>
					</div>
				</div>
				<Row>
					<Col>
						<h3>Patrocinadores</h3>
						<div className="cards" style={{ display: "flex", flexDirection: "column", marginTop: "0" }}>
							<img style={{ height: "150px", width: "auto" }} src="https://latamlist.com/wp-content/uploads/2023/08/Untitled-design-1.png"></img>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3>Notícias</h3>
						<NewsCard />
					</Col>
				</Row>
				<Row>
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default HomePage;