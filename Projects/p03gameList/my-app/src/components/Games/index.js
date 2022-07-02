import React from 'react';

const Games = ({joguinho}) => {

    return (
        <tr>
        <th scope="row">{joguinho.N}</th>
        <td>{joguinho.NAME}</td>
        <td>{joguinho.YEAR}</td>
        <td className="text-right">
              <button className="btn btn-dark"><a href={joguinho.trailerLink} target="_blank">Trailer</a></button>{'  '}
              <button className="btn btn-danger"><a href={joguinho.wikiLink} target="_blank">Wiki</a></button>
        </td>
        <td>{joguinho.SCORE}</td>
      </tr>
    );
};

export default Games;
