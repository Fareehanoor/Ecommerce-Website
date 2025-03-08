/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "../context/products/productContext";
import PageNavigation from "./PageNavigation";
import ProductImage from "./ProductImage";
import { Container } from "../styles/Container";
import FormatPrice from "../helpers/FormatPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import StarRatings from "./StarRatings";
import AddToCart from "./AddToCart";

const API_URL = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, isSinglePageLoading, singleProduct } =
    useProductContext();

  console.log("singleProduct", singleProduct);
  console.log("isSinglePageLoading", isSinglePageLoading);

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    image,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API_URL}?id=${id}`);
  }, []);

  if (isSinglePageLoading) {
    <div className="page_loading">Loading ...</div>;
  }
  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <ProductImage image={image} />
          </div>
          <div className="product-data">
            <h2>{name}</h2>
            <StarRatings stars={stars} reviews={reviews} />
            <p className="product-data-price">
              Before:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day:
              <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <div>
                  <TbTruckDelivery className="warranty-icon" />
                  <p>free delivery</p>
                </div>
              </div>
              <div className="product-warranty-data">
                <div>
                  <MdOutlineSecurity className="warranty-icon" />
                  <p>Security</p>
                </div>
              </div>
              <div className="product-warranty-data">
                <div>
                  <GiReceiveMoney className="warranty-icon" />
                  <p>Gurrantee</p>
                </div>
              </div>
              <div className="product-warranty-data">
                <div>
                  <RiSecurePaymentLine className="warranty-icon" />
                  <p>Authentic</p>
                </div>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Available:
                <span>{stock > 0 ? "In stock" : "Out of Stock"}</span>
              </p>
              {/* <p>
                ID : <span>{id}</span>
              </p> */}
              <p>
                Brand : <span>{company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
