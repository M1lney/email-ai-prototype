import Card from 'react-bootstrap/Card';
interface BrandCardProps {
    website: string;
    name: string;
    onEdit: () => void;
}

export default function BrandCard({ website, name, onEdit,}: BrandCardProps) {
    return (
        <div className="flex flex-col space-y-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <Card>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        {website}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
