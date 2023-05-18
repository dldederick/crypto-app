import React from "react";
import { openInNewTab } from "../../Utils";
import { StyledLinkWrapper, Link } from './LinkWrapper.styles'

export default function LinkWrapper(props) {
  const Links = [
    { 'address': props.links?.homepage[0], 'id': 'link1' },
    { 'address': props.links?.blockchain_site[0], 'id': 'link2' },
    { 'address': props.links?.blockchain_site[1], 'id': 'link3' },
  ];
  return (
    <StyledLinkWrapper>
      {Links.map((link) => (
        <Link key={link.id}>
          <div onClick={() => openInNewTab(link.address)}></div>
          <div>{link.address}</div>
          <div
            onClick={() =>
              navigator.clipboard.writeText(link.address)
            }
          ></div>
        </Link>
      ))}
    </StyledLinkWrapper>
  );
}
