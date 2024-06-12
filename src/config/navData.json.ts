export interface navLinkItem {
  text: string;
  link: string;
  newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
  text: string;
  dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
  // {
  //   text: "Blog",
  //   link: "/blog/",
  // },
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Contact",
    link: "/contact/",
  },
  // uncomment below to add a dropdown example
  // {
  //   text: "Dropdown",
  //   dropdown: [
  //     {
  //       text: "Elements",
  //       link: "/elements/",
  //     },
  //     {
  //       text: "Password Reset",
  //       link: "/password-reset/",
  //     },
  //   ],
  // },
];

export default navConfig;
