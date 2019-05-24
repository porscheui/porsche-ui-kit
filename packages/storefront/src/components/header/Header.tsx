import React from "react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import { Logo } from "@porsche/ui-kit-react";
import { Headline, Text, Spacing } from "@porscheui/porsche-ui-kit";
import packageJson from "@porscheui/porsche-ui-kit/package.json";

export const Header: React.FunctionComponent = () => {
  return (
    <header>
      <Link className={style.logo} to={"/general/home"}>
        <Logo as="span" className={style.item} />
      </Link>
      <Spacing marginTop={16}>
        <Headline type="headline-4" align="center" level="1">
          Porsche UI Kit
        </Headline>
        <Text type="small" align="center">
          Current Release: v{packageJson.version}
        </Text>
      </Spacing>
    </header>
  );
};
