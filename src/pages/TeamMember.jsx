import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const TeamMember = ({ name, role, description}) => {
  return (
    <Card className="text-center p-6 shadow-md shadow-blue-200 mt-20">
      <CardContent>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <p className="mt-2 text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
