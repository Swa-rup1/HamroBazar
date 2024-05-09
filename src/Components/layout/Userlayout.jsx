import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Layout,
  theme,
  Avatar,
  Badge,
  Drawer,
  Space,
  Dropdown,
  AutoComplete,
  Input,
  Divider,
} from "antd";
const { Header, Content, Footer } = Layout;
import { ConfigProvider } from "antd";

import { Outlet, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import Order from "../UserDashboard/Order";

const Userlayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  // const { appState } = useAppContext();
  const handleNavigate = (item) => {
    navigate(item.link);
  };

  // const navItems = [
  //   {
  //     name: "Home",
  //     link: "/",
  //     key: 1,
  //   },

  //   {
  //     name: "Blog",
  //     link: "/blog",
  //     key: 2,
  //   },

  //   {
  //     name: "ContactUs",
  //     link: "/contact",
  //     key: 3,
  //   },
  // ];

  const authInfo = [
    {
      name: "Login",
      link: "../auth/Login",
      key: 11,
    },
    {
      name: "Signup",
      link: "../auth/Signup",
      key: 12,
    },
  ];

  // Drawer Antd JS
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [searchQuery, setSearchQuery] = useState("");
  console.log("gg", dispatch);
  const products = useSelector((state) => state.productSlice.products);
  const cardItem = useSelector((state) => state);

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerColor: "#FFFFFF",
            headerHeight: 60,
            fontSize: 12,

            footerHeight: 40,
          },

          Button: {
            defaultHoverBg: " #000000",
            defaultHoverBorderColor: "transparent",
            defaultHoverColor: "#ffffff",
          },
        },
      }}
    >
      <Layout>
        <div></div>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#186049",
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <div className="logo flex items-center justify-center">
            <Image
              className="object-contain"
              width={100}
              src="./src/img/ok.png"
              alt="Logo"
            />
          </div>

          {/* Search Bar */}
          {/* <div>
            <div style={{ marginBottom: "20px" }}>
              <AutoComplete
                dropdownStyle={{ width: 300 }}
                style={{
                  width: 300,
                }}
                options={books.map((book) => {
                  return {
                    value: book.volumeInfo.title,
                    label: book.volumeInfo.title,
                  };
                })}
                onSelect={onSelect}
                size="large"
              >
                <Input.Search
                  size="large"
                  placeholder="Search for books..."
                  enterButton
                  onPressEnter={handleSearch}
                />
              </AutoComplete>
            </div>
            
          </div> */}
          {/* <div>
              {searchQuery && (
                <h4>
                  Showing results for: <strong>{searchQuery}</strong>
                </h4>
              )}
              {books.map((book) => (
                <div key={book.id}>
                  <h3>{book.volumeInfo.title}</h3>
                  <p>{book.volumeInfo.authors?.join(", ")}</p>
                  <img
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                </div>
              ))}
            </div> */}

          {/* Nav-Item */}
          {/* <div className="iteminfo font-bold  flex flex-row gap-2 lg:gap-3">
            {navItems?.map((item, index) => {
              return (
                <div
                  onClick={() => handleNavigate(item)}
                  className=" hover:text-[black] hover:cursor-pointer"
                  key={index}
                >
                  {item.name}
                </div>
              );
            })}
          </div> */}

          <div className=" iteminfo login flex gap-2">
            {/* Badge */}
            <div>
              <Badge
                count={
                  cardItem?.addtocard.data
                    ? [...new Set(cardItem.addtocard.data)].length
                    : 0
                }
              >
                {/* {[...new Set(appState?.addtocart)].length} */}
                <Avatar
                  size={28}
                  icon={<ShoppingCartOutlined />}
                  onClick={showDrawer}
                />
              </Badge>
            </div>
          </div>

          {/* Auth-Item */}
          <div className=" iteminfo login flex gap-2">
            {authInfo?.map((item) => (
              <div key={item.link} onClick={() => navigate(item.link)}>
                <Button className=" font-bold  border-none border-r-0">
                  {item.name}
                </Button>
              </div>
            ))}
          </div>
        </Header>
        <Content
          style={{
            padding: "0 48px",
          }}
        >
          <div
            style={{
              background: colorBgContainer,
              minHeight: 600,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>

        <Footer className="text-center text-lg-start bg-[#F7F7F7]-200 p-4">
          <div className="container mx-auto">
            <section className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="col-span-1">
                  <h6 className="mb-4 font-bold">Hamro Bazar</h6>
                  <p>
                    Hamro Bazar is a vibrant online marketplace connecting
                    buyers and sellers for a wide range of products.
                  </p>
                </div>
                <div className="col-span-1">
                  <h6 className="text-uppercase mb-4 font-bold">Services</h6>
                  <p>
                    <a href="#" className="footer-service">
                      Furniture
                    </a>
                  </p>
                  <p>
                    <a href="#" className="footer-service">
                      Shoes
                    </a>
                  </p>
                  <p>
                    <a href="#" className="footer-service">
                      Groceries
                    </a>
                  </p>
                </div>
                <div className="col-span-1">
                  <h6 className="text-uppercase mb-4 font-bold">Navigation</h6>
                  <p>
                    <a href="#" className="footer-nav">
                      About Us
                    </a>
                  </p>
                  <p>
                    <a href="#" className="footer-nav">
                      Services
                    </a>
                  </p>
                  <p>
                    <a href="#" className="footer-nav">
                      Location
                    </a>
                  </p>
                  <p>
                    <a href="#" className="footer-nav">
                      FAQ
                    </a>
                  </p>
                </div>
                <div className="col-span-1">
                  <h6 className="text-uppercase mb-4 font-bold">Contact</h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> Putalisadak, Kathmandu,
                    Nepal
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@hamrobazar.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> +977 123 456 789
                  </p>
                </div>
              </div>
            </section>

            <Divider />

            <section className="p-3 pt-0">
              <div className="text-center">
                <p className="p-3">
                  © {new Date().getFullYear()} HamroBazar. All rights reserved.
                </p>
              </div>
            </section>
          </div>
        </Footer>
      </Layout>
      <Drawer
        title="Product Cart "
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="success" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <Order />
      </Drawer>
    </ConfigProvider>
  );
};
export default Userlayout;
