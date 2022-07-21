import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "./Main.css";

function Main() {
  const login_data = JSON.parse(sessionStorage.getItem("login_data"));

  return (
    <div className="main">
      <div className="wellcome_ment">
        <div className="작가님이신가요">
          작가님이신가요? 빠르게 작품을 등록하고 판매계약까지 맺어보세요!
        </div>
        <div>
          <Button>
            <Link to="workregister">작품 등록하기 </Link>
          </Button>
        </div>
      </div>

      <div className="pictures_list">
        <div className="picture">
          <ProductCard />
        </div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Main;