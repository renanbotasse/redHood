import React from 'react';

const Games = ({joguinho}) => {

    return (
        <tr>
        <th scope="row">{joguinho.N}</th>
        <td>{joguinho.NAME}</td>
        <td>{joguinho.YEAR}</td>
        <td className="text-right">
              <button id="trailerButton" className="btn btn-dark"><a href={joguinho.trailerLink} target="_blank" rel="noreferrer">Trailer</a></button>{'  '}
              <button id="wikiLink" className="btn btn-danger"><a href={joguinho.wikiLink} target="_blank" rel="noreferrer">Wikipedia</a></button>
        </td>
        <td><select id="sNumber" className="form-control">
        <option>10</option>
        <option>9</option>
        <option>8</option>
        <option>7</option>
        <option>6</option>
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
        <option>0</option>
        </select>
        </td>
      </tr>
    );
};

export default Games;
