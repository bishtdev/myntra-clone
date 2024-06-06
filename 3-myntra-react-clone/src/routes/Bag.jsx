import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const item = useSelector(store => store.bag)
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            <BagItem item={item} />
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
