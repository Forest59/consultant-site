import { Typography, List, ListItem } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h4">{t("services.title")}</Typography>
      <List>
        {t("services.list", { returnObjects: true }).map((item, i) => (
          <ListItem key={i}>{item}</ListItem>
        ))}
      </List>
    </>
  );
}
