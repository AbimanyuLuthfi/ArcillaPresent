import {Card, Container, Row, Col, Image} from "react-bootstrap"
import antman from "../Asset/Image/Superheroes/antman.jpg"
import avenger from "../Asset/Image/Superheroes/avenger.jpg"
import batman from "../Asset/Image/Superheroes/batman.jpg"
import robinhood from "../Asset/Image/Superheroes/robinhood.jpg"
import spiderman2 from "../Asset/Image/Superheroes/spiderman2.jpg"
import superman from "../Asset/Image/Superheroes/superman.jpg"

const Superhero = () => {
    return(
        <div>
            <Container>
                <Row>
                    <div className="text-dark" id="superhero">
                        <br></br>
                        <h1>SUPERHERO MOVIES</h1>
                        <br></br>
                    </div>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white movieImage">
                        <Image src={antman} alt="antman Movies" className="Images"/>
                        <div clasName="bg-dark">
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">antman</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text >
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white movieImage">
                        <Image src={avenger} alt="avenger Movies" className="Images"/>
                        <div clasName="bg-dark">
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Everything</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text >
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white movieImage">
                        <Image src={batman} alt="batman Movies" className="Images"/>
                        <div clasName="bg-dark">
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Infinite</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text >
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white movieImage">
                        <Image src={robinhood} alt="robinhood Movies" className="Images"/>
                        <div clasName="bg-dark">
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">robinhood</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text >
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white movieImage">
                        <Image src={spiderman2} alt="spiderman2 Movies" className="Images"/>
                        <div clasName="bg-dark">
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Spiderman</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text >
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white movieImage">
                        <Image src={superman} alt="superman Movies" className="Images"/>
                        <div clasName="bg-dark">
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">superman</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text >
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero