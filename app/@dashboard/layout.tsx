const layout = ({
  children,
  notification,
  updates,
  users,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  updates: React.ReactNode;
  users: React.ReactNode;
}) => {
  return (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{updates}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notification}</div>
      </div>
    </>
  );
};
export default layout;
