import styled from "styled-components";
import { useFilterContext } from "../context/filter/filterContext";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../helpers/FormatPrice";

const FilterSection = () => {
  const {
    filters: { text, colors, price, maxPrice, minPrice },
    all_products,
    handleFilterUpdate,
  } = useFilterContext();

  console.log("minPrice:", minPrice, "maxPrice:", maxPrice, "price:", price);

  const getUniqueData = (data, property) => {
    let newVal = data.map((currElement) => {
      return currElement[property];
    });
    //method 1
    // if (property === "colors") {
    //   return (newVal = ["all", ...new Set([].concat(...newVal))]);
    // } else {
    //   return (newVal = ["all", ...new Set(newVal)]);
    // }

    //method 2 with .flat() --> covert multiple arrays into single and with unique values
    if (property === "colors") {
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorData = getUniqueData(all_products, "colors");
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={handleFilterUpdate}
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((currElement, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={currElement}
                onClick={handleFilterUpdate}
              >
                {currElement}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onChange={handleFilterUpdate}
          >
            {companyData.map((currElement, index) => {
              return (
                <option key={index} value={currElement} name="company">
                  {currElement}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="filter-colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorData.map((currColor, index) => {
            if (currColor === "all") {
              return (
                <button
                  type="button"
                  value={currColor}
                  name="colors"
                  // style={{ backgroundColor: currColor }}
                  className="color-all--style"
                  key={index}
                  onClick={handleFilterUpdate}
                >
                  All
                </button>
              );
            }
            return (
              <button
                type="button"
                value={currColor}
                name="colors"
                style={{ backgroundColor: currColor }}
                className={
                  colors === currColor ? "btnStyle active" : "btnStyle"
                }
                key={index}
                onClick={handleFilterUpdate}
              >
                {colors === currColor ? (
                  <FaCheck className="checkStyle" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={handleFilterUpdate}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;
