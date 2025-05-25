import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 className="display-4 mb-4">TTS Reader</h1>
          <p className="lead">
            Современное приложение для чтения документов с возможностью преобразования текста в речь,
            использующее Azure OpenAI Service для высококачественного синтеза речи.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>📚 Поддержка форматов</Card.Title>
              <Card.Text>
                EPUB, PDF, TXT, MD, DOCX - все основные форматы документов поддерживаются
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>🎯 Azure OpenAI</Card.Title>
              <Card.Text>
                Высококачественный синтез речи с использованием Azure OpenAI Service
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>📱 Мобильная поддержка</Card.Title>
              <Card.Text>
                Адаптивный дизайн и PWA для удобного использования на любых устройствах
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={6} className="text-center">
          <Link href="/reader" passHref>
            <Button variant="primary" size="lg">
              Начать чтение
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
