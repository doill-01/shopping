import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getproductDetail = async () => {
    let url = `https://my-json-server.typicode.com/doill-01/shopping/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getproductDetail();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img">
            <img src={product?.img} />
          </Col>
          <Col>
            <div>{product?.title}</div>
			<div>{product?.price}</div>
			<div>{product?.choice}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
