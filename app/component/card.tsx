import { Card } from "antd";

const CardTempelate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Card style={{color:'blue', margin:"1rem"}}>{children}</Card>
    </>
  );
};

export default CardTempelate;
