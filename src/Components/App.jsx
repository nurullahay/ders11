import {useState} from 'react';
import Card from "./Card";

function App() {
    const [urunler, urunleriGuncelle] = useState([]);

    fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(urunler => console.log(urunler))

    if(urunler.lenght > 0 ) {
        return (
            <Card baslik = {"Örnek"} gorselURL = {"https://lipsum.app/id/25/200x200"} />
        )
    }

    return (
        <p>Hiç ürün yok.</p>
    )
}

export default App;
