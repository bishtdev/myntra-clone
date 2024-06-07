import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const Fetchitems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted())
    fetch("https://myntra-clone-5.onrender.com/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
          dispatch(fetchStatusActions.markFetchDone())  
          dispatch(fetchStatusActions.markFetchingFinished())
          dispatch(itemsActions.addIntialItems(items[0]));
        });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
    </>
  );
};

export default Fetchitems;
