import React from 'react';
import './index.css';
import Collection from "./Collection";
import { SkeletonDesktop } from './components/SkeletonGallery/SkeletonDesktop'

const categories =  [
    { "name": "Все" },
    { "name": "Море" },
    { "name": "Горы" },
    { "name": "Архитектура" },
    { "name": "Города" }
];

function AppGallery() {

    const [collection, setCollection] = React.useState([]);
    const [isLoading, setLoading] = React.useState([true]);
    const [searchValue, setSearchValue] = React.useState('');
    const [categoryID, setCategoryID] = React.useState(0);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        setLoading(true)

        const categoryRequest = categoryID ? `category=${categoryID}` : '';
        const pageRequest = `page=${page}`;

        fetch(`https://63530bb4d0bca53a8eb9cab4.mockapi.io/dataCollection?${pageRequest}&limit=3&${categoryRequest}`)
            .then(res=>res.json())
            .then(json=>{
                setCollection(json);
                console.log(json);
            }).catch(err => {
                console.warn(err);
        }).finally(() => setLoading(false))
    }, [categoryID, page]);

  return (
    <div className="AppGallery">
        <h1>Моя коллекция фотографий</h1>
        <header className="top">
            <ul className="tags">
                {
                    categories.map((obj, index) => (
                        <li onClick={() => setCategoryID(index)} className={categoryID === index ? 'active' : ''} key={obj.name}>{obj.name}</li>
                    ))
                }
            </ul>
            <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className="search-input" placeholder="Поиск по названию" />
        </header>
            {isLoading ? (
                <main className="content">
                    <SkeletonDesktop/>
                    <SkeletonDesktop/>
                    <SkeletonDesktop/>
                </main>
            ) : (
                <main className="content">
                    {
                        collection.filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase())).map((obj, index) => (
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
                {

                    [...Array(3)].map((_, index) => (
                        <li onClick={() => setPage(index + 1)} className={page === index + 1 ? 'active' : ''}>{index + 1}</li>
                    ))
                }
            </ul>
        </footer>
    </div>
  );
}

export default AppGallery;
