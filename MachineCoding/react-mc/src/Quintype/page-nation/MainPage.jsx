import React, { lazy, Suspense, useEffect, useState } from "react";
const ProdList = lazy(() => import("./ProdList"));

function MainPage() {
  // https://dummyjson.com/products?limit=500
  const [prods, setProds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const getProd = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=500");
    const resJson = await res.json();
    setProds(resJson.products);
  };

  useEffect(() => {
    getProd();
  }, []);

  const Total_No_Prods = prods.length;
  const Total_No_In_Page = 10;
  const Total_No_of_prodcuts = Math.ceil(Total_No_Prods / Total_No_In_Page);
  const start = currentIndex * 10;
  const end = start + Total_No_In_Page;

  const selectPage = (id) => {
    setCurrentIndex(id);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  const goNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button disabled={currentIndex === 0} onClick={goPrev}>
          previous
        </button>
        {[...Array(Total_No_of_prodcuts).keys()].map((n) => (
          <p
            onClick={() => {
              selectPage(n);
            }}
            style={{
              border: "1px solid black",
              padding: "4px",
              margin: "4px",
              cursor: "pointer",
              backgroundColor: `${currentIndex === n ? "red" : ""}`,
            }}
            key={n}
          >
            {n}
          </p>
        ))}
        <button
          disabled={currentIndex === Total_No_of_prodcuts - 1}
          onClick={goNext}
        >
          Next
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {prods.slice(start, end).map((p) => (
          <Suspense key={p.id} fallback={<p>Loadding</p>}>
            <ProdList img={p.thumbnail} title={p.title} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
