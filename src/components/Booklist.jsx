import React, { useState, useEffect } from 'react';


const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])

    return (
        <div>
            {/* <p>{JSON.stringify(bookData)}</p> */}

            <ul>
                {
                    bookData === null
                        ? <p>now loading...</p>
                        : bookData.data.items.map((x, index) =>
                            <li key={index}>
                                {
                                    x.volumeInfo.readingModes.image === true
                                        ? <img src={x.volumeInfo.imageLinks.smallThumbnail}></img>
                                        : 'no image...'
                                }
                                {x.volumeInfo.title + ', '}
                                {'著者:' + x.volumeInfo.authors + ', '}
                                {'出版社:' + x.volumeInfo.publisher + ', '}
                                {'出版日:' + x.volumeInfo.publishedDate + ', '}
                                {
                                    x.saleInfo.saleability === 'FOR_SALE'
                                        ? <a href={x.saleInfo.buyLink}>購入リンク</a>
                                        : 'out of stock...'
                                }
                            </li>
                        )
                }
            </ul>
        </div>
    );
}

export default Booklist;
