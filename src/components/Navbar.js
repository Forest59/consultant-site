import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          {t("menu.home")}
        </Button>
        <Button color="inherit" component={Link} to="/services">
          {t("menu.services")}
        </Button>
        <Button color="inherit" component={Link} to="/about">
          {t("menu.about")}
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          {t("menu.contact")}
        </Button>

        <div style={{ marginLeft: "auto" }}>
          <LanguageSwitcher />
        </div>
      </Toolbar>
    </AppBar>
  );
}
