import {Card, Container, Row, Col, Image} from "react-bootstrap"
import dune from "../Asset/Image/Trending/dune.jpg"
import everything from "../Asset/Image/Trending/everything.jpg"
import infinite from "../Asset/Image/Trending/infinite.jpg"
import joker from "../Asset/Image/Trending/joker.jpg"
import lightyear from "../Asset/Image/Trending/lightyear.jpg"
import morbius from "../Asset/Image/Trending/morbius.jpg"

const Trending = () => {
    return(
        <div>
            <Container>
                <Row>
                    <div className="text-white" id="trending">
                        <br></br>
                        <h1>TRENDING MOVIES</h1>
                        <br></br>
                    </div>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white movieImage">
                        <Image src={dune} alt="Dune Movies" className="Images"/>
                        <div clasName="bg-dark">
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Dune</Card.Title>
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
                        <Image src={everything} alt="Everything Movies" className="Images"/>
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
                        <Image src={infinite} alt="Infinite Movies" className="Images"/>
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
                        <Image src={joker} alt="Joker Movies" className="Images"/>
                        <div clasName="bg-dark">
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Joker</Card.Title>
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
                        <Image src={lightyear} alt="Lightyear Movies" className="Images"/>
                        <div clasName="bg-dark">
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Lightyear</Card.Title>
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
                        <Image src={morbius} alt="Morbius Movies" className="Images"/>
                        <div clasName="bg-dark">
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Morbius</Card.Title>
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

export default Trending