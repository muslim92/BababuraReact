import React from 'react'
import { useState } from 'react';
import { Button, Card, CardBody, Collapse } from 'reactstrap';

const ReadMoreSec = ({ content, limit = 100 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => setIsExpanded(!isExpanded);
  
    const shortenedContent = content.substring(0, limit) + "...";
  
    return (
      <Card>
        <CardBody>
          {isExpanded ? content : shortenedContent}
          {content.length > limit && (
            <div style={{ opacity: 0.7, fontSize: ".8rem" }}>
            <Button color="primary" onClick={toggleExpand}>
              {isExpanded ? "Show Less" : "Show More"}
            </Button>
            </div>
          )}
        </CardBody>
        <Collapse isOpen={isExpanded}>
          <CardBody style={{ backgroundColor: "#f5f5f5" }}>
            {content.substring(limit)}
          </CardBody>
        </Collapse>
      </Card>
    );
  };

export default ReadMoreSec
