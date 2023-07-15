import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  return <div key={tab.name}>Tab</div>;
};

export default Tab;
