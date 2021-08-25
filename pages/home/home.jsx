import React, { useEffect } from "react";
import { Input, Button, Form } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Image from "next/image";
import ItemList from "./ItemList";

const Home = () => {
  const i = 0;
  useEffect(() => {
    const container = document.querySelector("#container");
    const nav = document.querySelector("#nav");
    const searchbar = document.querySelector("#search");
    const toggle = document.querySelector("#search");
    const headline = document.querySelector("#headline");
    const itemResult = document.querySelector("#result");

    toggle.addEventListener("click", () => {
      container.classList.remove("container");
      container.classList.add("container-result");
      searchbar.classList.remove("search");
      searchbar.classList.add("active-search");
      nav.classList.add("nav");
      headline.classList.remove("headline");
      headline.classList.add("remove-headline");
      itemResult.classList.remove("result");
      itemResult.classList.add("result-active");
    });
  }, []);

  return (
    <div id="container" className="container">
      <div id="nav" />
      <div className="header">
        <Image src="/logo.svg" width={114} height={20} alt="" />
      </div>
      <div id="headline" className="headline">
        <h1 className="main">Cari, Pinjam & Baca</h1>
        <p className="sub">cari buku di berbagai pustaka di iLibrary kami</p>
      </div>
      <div id="search" className="search">
        <Form onFinish={(e) => console.log(e)} className="form-search">
          <Form.Item className="search-box">
            <Input
              size="large"
              placeholder="Search..."
              prefix={<SearchOutlined />}
            ></Input>
          </Form.Item>
          <Form.Item className="search-button">
            <Button id="button-search" className="button-search">
              Search
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div id="result" className="result">
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
      </div>

      <div className="footer">
        <span className="line-1">powered by</span>{" "}
        <Image src="/aksaramaya.svg" width={152} height={24} alt="" />
      </div>
    </div>
  );
};

export default Home;
