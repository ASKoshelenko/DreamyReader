"use client";
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';

interface Book {
  name: string;
  path: string;
}

export default function ReaderPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/books')
      .then(res => res.json())
      .then(data => {
        setBooks(data.books);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load books');
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <h1 className="mb-4">Library</h1>
      {loading && <Spinner animation="border" />}
      {error && <div className="text-danger">{error}</div>}
      <Row>
        {books.map(book => (
          <Col md={6} lg={4} key={book.path} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title style={{ wordBreak: 'break-all' }}>{book.name}</Card.Title>
                <Button
                  variant="primary"
                  href={book.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
} 