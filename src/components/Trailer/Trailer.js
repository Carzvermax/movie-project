import React from 'react';

const Trailer = ({trailer, id}) => {
    return (
        <iframe title={'trailer'}
                key={id}
                width={1000}
                height={500}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                src={`http://www.youtube-nocookie.com/embed/${trailer}`}>
        </iframe>
    );
};

export {Trailer};