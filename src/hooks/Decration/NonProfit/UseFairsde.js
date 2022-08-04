import React, { useEffect, useState } from 'react';

const UseFairsde = (fair) => {
    const [fairs, setFairs] = useState([]);
    useEffect(() => {
      const url = `http://localhost:8000/fairsExpos/${fair}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setFairs(data));
    }, [fair]);
    return [fairs];
};

export default UseFairsde;