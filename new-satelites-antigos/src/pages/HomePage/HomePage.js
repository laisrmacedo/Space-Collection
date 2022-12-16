import { Layout } from "../../components/Layout/Layout";
import { BackgroundImg, Container } from "./styled";
import satellites from '../../Satellites/satellites.json'

export const HomePage = () => {

  return (
    <Layout>
        <BackgroundImg src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Container>
          <div className="text">
            <h1>Você é fascinado pelos segredos do Universo?</h1>
            <h2>Então conheça mais sobre os principais satélites que viajaram pelo espaço e desvendaram mistérios!</h2>
          </div>
          <div className="image">
            <div className="image1">
              <img src={satellites[0].image}/>
            </div>
            <div className="image2">
              <img src={satellites[7].image}/>
            </div>
            <div className="image3">
              <img src={satellites[5].image}/>
            </div>
          </div>
        </Container>
    </Layout>
  )
}