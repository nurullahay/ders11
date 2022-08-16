import Anasayfa from "./Anasayfa";
import { useState } from "react";
import "./App.css;";

function App() {
  const [baglantiDurumu, baglantiDurumDegistir] = useState(
    window.navigator.online
  );

  window.addEventListener("offline", () => {
    console.log("Bağlantı gitti.");
    baglantiDurumDegistir(false);
  });

  window.addEventListener("online", () => {
    console.log("Bağlantı geldi.");
    baglantiDurumDegistir(true);
  });

  return (
    <>
      <p className={baglantiDurumu ? "" : "uyari"}>
          {baglantiDurumu === true ? "Bağlantı var." : "Bağlantı yok."}
          </p>
      {baglantiDurumu && <Anasayfa />}
    </>
  );
}

export default App;
