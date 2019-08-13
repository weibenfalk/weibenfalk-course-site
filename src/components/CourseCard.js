import React from 'react';

import Image from './Image';
import Button from './Button';

// Styled Component
import { StyledCourseCard } from './styles/StyledCourseCard';

const CourseCard = ({ course }) => (
  <StyledCourseCard>
    <div className="row">
      <div className="col-md-3">
        <Image alt={course.title} filename={course.image} />
      </div>
      <div className="col-md-9">
        <h4>
          <b>{course.title}</b> - {course.subtitle}
        </h4>
        <p>{course.excerpt}</p>
        <Button size="small" color="dark" text={course.cta1} />
        <Button size="small" text={course.cta2} />
      </div>
    </div>
  </StyledCourseCard>
);

export default CourseCard;
