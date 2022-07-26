import {Image, Container, Row, Col } from 'react-bootstrap'
// import Image from 'react-bootstrap/Image'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

function Article ({ title, author, created_at, story_text, url}){

    return(
        <Container >
            <Row className='article'>
                {/* <Col lg='3' className='my-col' >
                    {image ? <Image  width={image.width} height={image.height} rounded src={image.story_text}/>
                                 : <p> image not found </p> 
                    } 
                </Col> */}
                <Col lg='9'>
                    <Row>
                        <h1>{title}</h1>
                    </Row>
                    <Row>
                        <p>{created_at}</p>
                    </Row>
                    <Row>
                        { author && <h2>{ author }</h2> }
                    </Row>
                    <Row>
                        {story_text
                            ?<p>{story_text}</p>
                            :<a href={url}>Link to Story</a>
                        }
                    </Row>

                </Col>
            
                            
            </Row>
        </Container>
    )
}
export default Article;