import React from 'react';
import './index.scss';
import Collection from "./Collection";
import { SkeletonDesktop } from './components/SkeletonGallery/SkeletonDesktop'

function AppGallery() {

    const [collection, setCollection] = React.useState([]);
    const [isLoading, setLoading] = React.useState([true]);
    const [serachValue, setSerachValue] = React.useState('');

    React.useEffect(() => {
        fetch('https://63530bb4d0bca53a8eb9cab4.mockapi.io/dataCollection')
            .then(res=>res.json())
            .then(json=>{
                setCollection(json);
                console.log(json);
            }).catch(err => {
                console.warn(err);
        }).finally(() => setLoading(false))
    }, []);

  return (
    <div className="AppGallery">
        <h1>Моя коллекция фотографий</h1>
        <header className="top">
            <ul className="tags">
                <li className="active">Все</li>
                <li>Горы</li>
                <li>Море</li>
                <li>Архитектура</li>
                <li>Города</li>
            </ul>
            <input value={serachValue} onChange={e => setSerachValue(e.target.value)} className="search-input" placeholder="Поиск по названию" />
        </header>
            {isLoading ? (
                <div className="content">
                    <SkeletonDesktop/>
                    <SkeletonDesktop/>
                    <SkeletonDesktop/>
                </div>
            ) : (
                <main className="content">
                    {
                        collection.filter((obj) => obj.name.toLowerCase().includes(serachValue.toLowerCase())).map((obj, index) => (
                            <Collection
                                key={index}
                                name={obj.name}
                                images={obj.photos}
                            />
                        ))
                    }
                </main>
            )
            }
        <footer>
            <ul className="pagination">
                <li>1</li>
                <li className="active">2</li>
                <li>3</li>
            </ul>
        </footer>
    </div>
  );
}

export default AppGallery;
