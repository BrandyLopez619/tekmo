import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const OccupationsCard = ({ item }) => {
    const { name, description } = item;
    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

export default OccupationsCard;