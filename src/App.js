import './App.css';

import 'h8k-components';

import Articles from './components/Articles';

import React, { useMemo, useState } from 'react';

const title = "Sorting Articles";

function App({ articles }) {
    const [orderBy, setOrderBy] = useState('upvotes');
    const sortedArticles = useMemo(
        () => articles.sort(
            (a, b) => (a[orderBy] < b[orderBy]) - (a[orderBy] > b[orderBy])
        ),
        [orderBy, articles]
    );

    const handleSortByDate = () => {
        setOrderBy('date');
    };

    const handleSortByUpvotes = () => {
        setOrderBy('upvotes');
    };

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button
                    data-testid="most-upvoted-link"
                    className="small"
                    onClick={handleSortByUpvotes}
                >
                    Most Upvoted
                </button>
                <button
                    data-testid="most-recent-link"
                    className="small"
                    onClick={handleSortByDate}
                >
                    Most Recent
                </button>
            </div>
            <Articles articles={sortedArticles}/>
        </div>
    );

}

export default App;
