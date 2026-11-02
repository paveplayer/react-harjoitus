import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function RecipeCard({title, description, imageUrl, onClick}: {title?: string, description?: string, imageUrl?: string, onClick?: () => void}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl || "https://www.bing.com/th/id/OIP.AqTTUa8llxV824KQ79Yi5wHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=ImgAns&rm=2"} />
      <Card.Body>
        <Card.Title>{title || "Card Title"}</Card.Title>
        <Card.Text>
          {description || "Some quick example text to build on the card title and make up the bulk of the card's content."}
        </Card.Text>
        <Button variant="primary" onClick={onClick}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}