import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Description = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="dark" onClick={toggle} style={{ marginBottom: '2rem' }}>Photo Description</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <p>{props.explanation}</p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Description;