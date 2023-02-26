import React from 'react';

import css from "../Pagination/Pagination.module.css";

const Pagination = ({query, setQuery, total_pages}) => {
    return (
        <div>
            <button disabled={+query.get('page') - 1 === 0} className={css.prev_button}
                    onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>Previous page
            </button>
            <button className={css.next_button} disabled={+query.get('page') === total_pages}
                    onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>Next page
            </button>
        </div>
    );
};

export default Pagination;