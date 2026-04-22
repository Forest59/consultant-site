import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h4">{t("about.title")}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {t("about.text")}
      </Typography>
    </>
  );
}
