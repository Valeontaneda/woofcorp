import { Card, CardBody, CardImg, Row, Col, CardTitle } from 'reactstrap';

const ServiceCard = ({ service }) => {
    const { name, image, description } = service;
    return (
            <Row>
                <Col lg='12'>
                    <Card>
                        <CardTitle>{name}</CardTitle>
                        <CardImg src={image} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>{description}</CardBody>
                    </Card>
                </Col>
            </Row>
    );
};

export default ServiceCard;