type ShowMoreProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function ShowMore({onClick}: ShowMoreProps): JSX.Element {
  return(
    <div className="catalog__more">
      <button onClick={onClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMore;
