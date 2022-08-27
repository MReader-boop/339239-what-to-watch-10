/* eslint-disable @typescript-eslint/no-unused-vars */
import {Film} from '../../types/film';
import TabsOverview from '../tabs-overview/tabs-overview';
import TabsDetails from '../tabs-details/tabs-details';
import TabsReviewList from '../tabs-review-list/tabs-review-list';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type TabsProps = {
  film: Film;
}

function Tabs({film}: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('overview');
  return(
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === 'overview' ? 'film-nav__item--active' : ''}`}>
            <Link onClick={(evt) => {
              evt.preventDefault();
              setActiveTab('overview');
            }} to="/" className="film-nav__link"
            >
              Overview
            </Link>
          </li>
          <li className={`film-nav__item ${activeTab === 'details' ? 'film-nav__item--active' : ''}`}>
            <Link onClick={(evt) => {
              evt.preventDefault();
              setActiveTab('details');
            }} to="/" className="film-nav__link"
            >
              Details
            </Link>
          </li>
          <li className={`film-nav__item ${activeTab === 'reviews' ? 'film-nav__item--active' : ''}`}>
            <Link onClick={(evt) => {
              evt.preventDefault();
              setActiveTab('reviews');
            }} to="/" className="film-nav__link"
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
      <div className="film-card__reviews film-card__row">
        <TabsReviewList reviews={film.reviews} />
        <TabsReviewList reviews={film.reviews} />
      </div>
    </div>
  );
}

export default Tabs;
