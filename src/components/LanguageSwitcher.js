import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <>
      <Button color="inherit" onClick={() => i18n.changeLanguage("fr")}>
        FR
      </Button>
      <Button color="inherit" onClick={() => i18n.changeLanguage("en")}>
        EN
      </Button>
    </>
  );
}
