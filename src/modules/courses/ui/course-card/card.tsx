import { SmallUserCard } from '../../../users/ui';
import { Course } from '../../types';
import './card.style.css';

export function CourseCard(props: Omit<Course, 'students'>) {
      return (
            <div className="course-card">
                  <img src={props.image} alt="" className="c-card-img" />
                  <div className="c-card-text-div">
                        <p className="c-card-name">{props.name}</p>
                        <p className="c-card-description">
                              {props.description}
                        </p>
                        <SmallUserCard
                              image={props.author.image}
                              name={props.author.name}
                              surname={props.author.surname}
                              dateToRegister={props.author.dateToRegister}
                        />
                  </div>
            </div>
      );
}
