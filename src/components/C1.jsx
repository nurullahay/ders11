function C1(ozellikler) {
    const[meyve, meyveyiGuncelle] = useState("Elma");

    console.log("C1 tekrar çalıştı.")
    //....
    //....
    //....
    //....
    //....

    return <>
        Ben C1, merhaba {ozellikler.ad}. Bu günün meyvesi: {meyve}
        <button onClick= {() => {meyveyiGuncelle("Armut")}}>Meyveyi Güncelle</button>
    </>
}

export default C1; 