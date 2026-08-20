import React from 'react';
import Projects from './Projects';
const CompletedProjects = () => <Projects preFilter={{ status: 'Completed' }} />;
export default CompletedProjects;
