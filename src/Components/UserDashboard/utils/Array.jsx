import {
  AppstoreOutlined,
  DashboardOutlined,
  MailOutlined,
  ProductOutlined,
  ProfileOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const PaymentApp = [
  {
    name: "esewa",
    Id: 1,
  },

  {
    name: "khalti",
    Id: 2,
  },
  {
    name: "COD",
    Id: 3,
  },
];

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
// export const adminItems = [
//   getItem("Dashboard", "dashboard", <DashboardOutlined />),
//   getItem("UserList", "userlist", <UserOutlined />),

//   getItem("Profile", "profile", <ProfileOutlined />),
//   getItem("HotProduct", "hotproduct", <ProductOutlined />),
// ];

export const paymentMethods = [
  { id: 1, name: "eSewa", image: "./src/image/esewa.png", color: "green" },
  { id: 2, name: "Khalti", image: "./src/image/khalti.png", color: "blue" },
  { id: 3, name: "COD", image: "./src/image/cod.jpg", color: "red" },
];
