import React from 'react';
import Projects from './Projects';
const OngoingProjects = () => <Projects preFilter={{ status: 'Ongoing' }} />;
export default OngoingProjects;
