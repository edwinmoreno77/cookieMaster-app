import React from "react";
import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlined />
        </IconButton>
        <NextLink legacyBehavior href="/" passHref>
          <Link underline="none" color="white">
            <Typography variant="h6">CookieMaster</Typography>
          </Link>
        </NextLink>
        <div style={{ flex: 1 }} />
        <NextLink legacyBehavior href={"/theme-changer"} passHref>
          <Link underline="none">
            <Typography variant="h6" color="white">
              Cambiar tema
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
