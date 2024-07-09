// components/GoogleMap.js
const GoogleMap = () => {
  return (
    <iframe
      className="infoCenter_rectangle__MLbXJ"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.5201641935428!2d136.6370136757738!3d35.367552772690104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003b3c7cf25fe9d%3A0x85a8c98336d432fd!2z5oOF5aCx56eR5a2m6Iq46KGT5aSn5a2m6Zmi5aSn5a2m!5e0!3m2!1sja!2sjp!4v1716227994090!5m2!1sja!2sjp"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{ width: "100%", height: "100%", border: "0" }} // スタイルを100%に変更
    ></iframe>
  );
};

export default GoogleMap;
