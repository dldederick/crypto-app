import React from "react";
import { StyledAssetList, ActiveAsset, ListAssetImageCont, ListAssetInfoCont } from "./ListOfAssets.styles/";

export default function ListOfAssets(props) {
  return (
    <StyledAssetList>
      {props.assets?.map((obj) => (
        <ActiveAsset key={obj.name}>
          <ListAssetImageCont image={obj.image}>
            <div></div>
            <div>{obj.name}</div>
          </ListAssetImageCont>
          <ListAssetInfoCont>
            <div></div>
            <div></div>
          </ListAssetInfoCont>
        </ActiveAsset>
      ))}
    </StyledAssetList>
  );
}
