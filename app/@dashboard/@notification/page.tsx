import CardTempelate from "@/app/component/card";

const notification = () => {
  return (
    <div className="w-20">
      <CardTempelate  title="Notifications">
        <div className="marquee">
          <p>🔔 Don't miss our summer sale! Up to 50% off on selected items. Shop now and save big! 🔔 
            <br/>
            🔔 New arrivals are here! Check out the latest trends and styles in our collection. 🔔
            <br/>
            🔔 Exclusive offer for newsletter subscribers! Get an extra 10% off your next purchase. 🔔
          </p>
        </div>
      </CardTempelate>
    </div>
  );
};
export default notification;
