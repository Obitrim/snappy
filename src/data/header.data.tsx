import Image from "next/image";

export const FEATURES_DROPDOWN_NAV_ITEMS = [
  {
    label: "Todo list",
    url: "/todo-list",
    icon: (
      <Image
        src="/images/icons/icon-todo.svg"
        alt="icon"
        width={16}
        height={16}
      />
    ),
  },
  {
    label: "Reminders",
    url: "/reminders",
    icon: (
      <Image
        src="/images/icons/icon-reminders.svg"
        alt="icon"
        width={16}
        height={16}
      />
    ),
  },
  {
    label: "Calendars",
    url: "/calendars",
    icon: (
      <Image
        src="/images/icons/icon-calendar.svg"
        alt="icon"
        width={16}
        height={16}
      />
    ),
  },
  {
    label: "Planning",
    url: "/planning",
    icon: (
      <Image
        src="/images/icons/icon-planning.svg"
        alt="icon"
        width={16}
        height={16}
      />
    ),
  },
];

export const COMPANY_DROPDOWN_NAV_ITEMS = [
  { label: "History", url: "/history" },
  { label: "Our team", url: "/team" },
  { label: "Blog", url: "/blog" },
];
