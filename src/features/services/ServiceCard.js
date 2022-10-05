import { Card, CardBody, CardImg, Row, Col, CardTitle, CardText } from 'reactstrap';

const ServiceCard = ({ service }) => {
    const { name, image, description } = service;
    return (
            <Row>
                <Col>
                    <Card className="my-4" style={{width: '18rem'}}>
                        <CardImg src={image} />
                        <CardBody>
                            <CardTitle tag="h5">{name}</CardTitle>
                            <CardText>{description}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
    );
};

export default ServiceCard;