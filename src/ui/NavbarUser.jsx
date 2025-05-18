import { useEffect, useState } from "react";
import {
  IconBook,
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconGauge,
  IconHome2,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
} from "@tabler/icons-react";
import {
  Box,
  Center,
  Image,
  Stack,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";

import classes from "./NavbarUser.module.css";
import { logo } from "../assets/data";
import { useNavigate, useLocation } from "react-router-dom";

function NavbarLink({ icon: Icon, label, active, onClick }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconGauge, label: "Dashboard", link: "/dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics", link: "/analytics" },
  { icon: IconCalendarStats, label: "Releases", link: "/releases" },
  { icon: IconUser, label: "Profile", link: "/profile" },
  { icon: IconBook, label: "Your Course", link: "/yourcourse" },
  { icon: IconSettings, label: "Settings", link: "/settings" },
];

export function NavbarUser() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const [active, setActive] = useState(pathname);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const links = mockdata.map((link) => (
    <NavbarLink
      {...link}
      key={link.link}
      active={link.link === active}
      onClick={() => {
        setActive(link.link);
        navigate(link.link);
      }}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <Box
          p={10}
          style={{
            borderRadius: "10px",
            background: "linear-gradient(to bottom right, #eef2ff, #f3e8ff)",
          }}
        >
          <Image src={logo} />
        </Box>
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
          }}
          icon={IconLogout}
          label="Logout"
        />
      </Stack>
    </nav>
  );
}
