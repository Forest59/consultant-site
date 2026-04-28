import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h3">{t("title")}</Typography>
      <Typography variant="h6">{t("subtitle")}</Typography>
      <Typography variant="body1" sx={{ mt: 3 }}>
        {t("home.welcome")}
      </Typography>
    </>
  );
}