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
      {children}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {users}
          {updates}
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notification}</div>
      </div>
    </>
  );
};
export default layout;
