import React from "react";
import { openInNewTab } from "../../Utils";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../App.styles";
import { StyledLinkWrapper, Link } from "./LinkWrapper.styles";

export default function LinkWrapper(props) {
  const Links = [
    { address: props.links?.homepage[0], id: "link1" },
    { address: props.links?.blockchain_site[0], id: "link2" },
    { address: props.links?.blockchain_site[1], id: "link3" },
  ];
  return (
    <ThemeProvider theme={props.darkMode ? darkTheme : lightTheme}>
      <StyledLinkWrapper>
        {Links.map((link) => (
          <Link key={link.id} darkMode={props.darkMode}>
            <div onClick={() => openInNewTab(link.address)}></div>
            <div>{link.address}</div>
            <div
              onClick={() => navigator.clipboard.writeText(link.address)}
            ></div>
          </Link>
        ))}
      </StyledLinkWrapper>
    </ThemeProvider>
  );
}
