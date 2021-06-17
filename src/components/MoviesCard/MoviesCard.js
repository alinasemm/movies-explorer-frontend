import React from 'react';
import previewCard from '../../images/preview-1.png'

function MoviesCard() {
  return (
  <div className="movies__card">
    <img src={previewCard} alt='превью фильма' className="movies__card-photo" />
    <h3 className='movies__card-tittle'>33 слова о дизайне</h3>
    <span className='movies__card-time'>1ч42м</span>
    <button className=''
  </div>
  );
}

export default MoviesCard;







// return (
//   <div className="elements__element">
//     <img src={card.link} alt={card.name} className="elements__photo-element" onClick={handleClick}/>
//     <div className="elements__group">
//       <h3 className="elements__text">{card.name}</h3>
//       <div className="elements__like-group">
//         <button className={likeButtonClass} onClick={() => onLikeClick(card)}/>
//         <span className="elements__like-text">{card.likes.length}</span>
//       </div>
//     </div>
//     <button className={trashButtonClass} onClick={() => onDeleteClick(card._id)}/>
//   </div>
// )

