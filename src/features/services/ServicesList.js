import { Col, Row } from 'reactstrap';
import ServiceCard from './ServiceCard';
import { allServices } from "./servicesSlice";

const CampsitesList = () => {
    const services = allServices();

    return (
        <Row>
            {services.map((service) => {
                return (
                <Col key={service.id}>
                    <ServiceCard service={service} />
                </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesList;