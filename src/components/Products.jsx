import styled from "styled-components";
import FilterSection from "./FilterSection";
import Sort from "./Sort";
import ProductList from "./ProductList";
import { useFilterContext } from "../context/filter/filterContext";

const Products = () => {
  const { filter_products } = useFilterContext();
  console.log("filter products:::", filter_products);
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
