import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({
  id,
  picture_name,
  img,
  price,
  artist,
  requests,
  page,
  trade_state,
  trade_user_id,
}) {
  const navigate = useNavigate();
  const [trade, setTrade] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [tradeState, setTradeState] = useState();

  useEffect(() => {
    console.log("tradestate: ", trade_state);

    setTradeState(trade_state);
    if (page === "general_mypage" || page === "mypage") {
      console.log("trade_state : ", trade_state);
      switch (trade_state) {
        case "1":
          console.log("계약요청");

          setTrade("계약요청 완료");
          setButtonText("작가님이 요청을 확인중!");
          break;

        case "2":
          console.log("작가님 거래 예약 신청 완료");
          setTrade("작가님이 계약을 희망중!");
          setButtonText("작가님이 계약을 희망중! 계약 계속하러가기");
          break;

        case "3":
          console.log("계약 확정");
          setTrade("계약 확정");
          setButtonText("계약 확정 진행중");

          break;

        default:
          console.log("not case in trade_state");
          setButtonText("자세히 보기");
          break;
      }
    }

    if (page === "main") {
      setButtonText("자세히 보기");
    }
  }, []);

  //props로 받은 id로 작품마다 작품 개별 페이지로 이동하도록
  const pageChange = () => {
    switch (page) {
      case "mypage":
        navigate(`/detailPainter/${id}`);
        break;

      case "main":
        navigate(`/detailUser/${id}`, { state: { tradeState: tradeState } });
        break;

      default:
        navigate(`/detailUser/${id}`, { state: { tradeState: tradeState } });
        break;
    }

    switch (tradeState) {
      case "2":
        if (page === "mypage2") {
          navigate(`/offlineContract_user/${id}/${trade_user_id}`);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="productCard">
      <div className="picture_name">{picture_name}</div>
      <div className="picture_container">
        <img src={img} alt=""></img>
      </div>
      <div className="price_painter">
        {page === "mypage" ? ( //작가마이페이지에 출력될 때만 요청 수 가 나오도록
          <div>계약 요청 수 : {requests}</div>
        ) : page === "general_mypage" ? (
          <div>{trade}</div>
        ) : (
          <>
            {/* 메인페이지에서 출력될 때는 가격과 작가명이 나오도록 */}

            <div>{price}원</div>
            <div className="artistName">{artist}</div>
          </>
        )}
      </div>
      <div className="btn-container">
        <button
          className="container__detail-btn"
          variant="outline-primary"
          onClick={() => pageChange()}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
