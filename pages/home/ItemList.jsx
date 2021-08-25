import React from "react";
import Image from "next/image";
import { Typography, Switch } from "antd";

const { Paragraph } = Typography;

const ItemList = () => {
  return (
    <div>
      <div className="card">
        <div className="showcase">
          <Image src="/Bitmap.png" width={92} height={140} alt="" />
        </div>
        <div className="content">
          <div className="title">
            <p>Matematika itu mudah</p>
          </div>
          <div className="description">
            <Paragraph ellipsis={true ? { rows: 3 } : false}>
              Ant Design, a design language for background applications, is
              refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED
              Team. Ant Design, a design language for background applications,
              is refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED
              Team.
            </Paragraph>
          </div>
        </div>
        <div className="meta">
          <div className="meta-control">
            <span className="meta-title">Halaman ke : </span>{" "}
            <span className="meta-content">12, 54, 86</span>
          </div>
          <div className="meta-control">
            <span className="meta-title">Pengarang : </span>{" "}
            <span className="meta-content">Authname</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
