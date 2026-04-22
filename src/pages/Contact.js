import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h4">{t("contact.title")}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {t("contact.email")}: contact@mon-site.com
      </Typography>
    </>
  );
}
