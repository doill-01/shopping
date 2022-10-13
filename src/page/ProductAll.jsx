import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query,setQuery] = useSearchParams();
  const getproducts = async () => {
	let searchQuery=query.get('q') || "";
	console.log("쿼리값은",searchQuery)
    let url = ` https://my-json-server.typicode.com/doill-01/shopping/products?q=${searchQuery}`; //서치부분
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getproducts();
  }, [query]); //배열이 비어있으면 프로젝트 시작할떄 딱 한번만 실행시켜준다.
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
