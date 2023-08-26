import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ShortenLinkForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Paste a long URL </Form.Label>
        <Form.Control placeholder="Example: http://super-long-link.com/shorten-it" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Domain</Form.Label>
          <Form.Control placeholder="something" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Enter a back-half (optional)</Form.Label>
          <Form.Control placeholder="example: my-fav-link" />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Get Link
      </Button>
    </Form>
  );
};

export default ShortenLinkForm;
