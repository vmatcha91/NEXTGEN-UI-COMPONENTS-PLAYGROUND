import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Switch from "@mui/joy/Switch";
import Chip from "@mui/joy/Chip";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import OrderTable from "./OrderTable";
import OrderList from "./OrderList";

const DocsDemo = () => (
  <>
    <Box
      component="main"
      className="MainContent"
      sx={{
        px: { xs: 2, md: 6 },
        pt: {
          xs: "calc(12px + var(--Header-height))",
          sm: "calc(12px + var(--Header-height))",
          md: 3,
        },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        height: "100dvh",
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="sm" />}
          sx={{ pl: 0 }}
        >
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
            <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            color="neutral"
            href="#some-link"
            sx={{ fontSize: 12, fontWeight: 500 }}
          >
            Dashboard
          </Link>
          <Typography color="primary" sx={{ fontWeight: 500, fontSize: 12 }}>
            Orders
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          Orders
        </Typography>
        <Button
          color="primary"
          startDecorator={<DownloadRoundedIcon />}
          size="sm"
          variant="solid"
        >
          Download PDF
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          background: "#fff",
          p: 2,
          borderRadius: 10,
          "> *": {
            m: 0.5,
          },
        }}
      >
        <Box>
          <Button
            color="primary"
            startDecorator={<DownloadRoundedIcon />}
            size="sm"
            variant="outlined"
          >
            Download PDF
          </Button>
          <Button
            color="primary"
            startDecorator={<DownloadRoundedIcon />}
            size="sm"
            variant="plain"
          >
            Download PDF
          </Button>
          <Button
            color="primary"
            startDecorator={<DownloadRoundedIcon />}
            size="sm"
            variant="soft"
          >
            Download PDF
          </Button>
          <Button
            color="primary"
            startDecorator={<DownloadRoundedIcon />}
            size="sm"
            variant="solid"
          >
            Download PDF
          </Button>
        </Box>
        <Switch color="secondary" defaultChecked={true} />
        <Box>
          <Chip color="success" size="md" variant="soft">
            <Typography fontWeight={"bold"} level="body-xs">
              Financial{" "}
            </Typography>
          </Chip>
          <Chip color="success" size="md" variant="soft">
            <Typography fontWeight={"bold"} level="body-xs">
              Wealth Management
            </Typography>
          </Chip>
        </Box>
      </Box>
      <OrderTable />
      <OrderList />
    </Box>
    <Box></Box>
  </>
);

export default DocsDemo;
