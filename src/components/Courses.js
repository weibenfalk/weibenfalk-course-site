import React from 'react';

// Custom Hook
import { useAllCourses } from '../hooks/useAllCourses';

import CourseCard from './CourseCard';

import { StyledCourses } from './styles/StyledCourses';

const Courses = () => {
  const courses = useAllCourses();

  return (
    <StyledCourses>
      <div className='container'>
        <div className='row'>
          <div className='col-md'>
            <h2>Premium Courses</h2>
            {courses.map(
              course =>
                course.node.frontmatter.premium === 'true' &&
                course.node.frontmatter.published === 'true' && (
                  <CourseCard
                    key={course.node.frontmatter.title}
                    course={course.node.frontmatter}
                  />
                )
            )}
          </div>
        </div>
        <div className='row'>
          <div className='col-md'>
            <h2>Free Courses</h2>
            {courses.map(
              course =>
                course.node.frontmatter.premium === 'false' && (
                  <CourseCard
                    key={course.node.frontmatter.title}
                    course={course.node.frontmatter}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </StyledCourses>
  );
};

export default Courses;
