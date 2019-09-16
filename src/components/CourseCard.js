import React from 'react';
import { Link } from 'gatsby';

import OptImage from './OptImage';
import Button from './Button';

// Styled Component
import { StyledCourseCard } from './styles/StyledCourseCard';

const CourseCard = ({ course }) => (
  <StyledCourseCard>
    <div className="row">
      <div className="col-md-3 course-image">
        <OptImage alt={course.title} filename={course.image} />
      </div>
      <div className="col-md-9">
        <h4>{course.title}</h4>
        <h5>{course.subtitle}</h5>
        {/* <h6>Live link to what You'll build >></h6> */}
        <p>{course.excerpt}</p>
        <a href={course.cta1Link}>
          <Button size="small" color="dark" text={course.cta1} />
        </a>
        <a href={course.cta2Link}>
          <Button size="small" text={course.cta2} />
        </a>
        {course.cta3 && (
          <a target="_blank" rel="noopener noreferrer" href={course.cta3Link}>
            <Button size="small" text={course.cta3} />
          </a>
        )}
      </div>
    </div>
  </StyledCourseCard>
);

export default CourseCard;
