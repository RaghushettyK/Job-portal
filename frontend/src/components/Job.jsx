import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  return (
    <div className='p-4 rounded-md shadow-md bg-white border border-gray-200'>
      <p className='text-sm text-gray-500 mb-2'>
        {daysAgoFunction(job?.createdAt) === 0
          ? 'Today'
          : `${daysAgoFunction(job?.createdAt)} days ago`}
      </p>

      <h2 className='font-bold text-lg mb-1'>{job?.title}</h2>
      <p className='text-gray-600 text-sm mb-2'>{job?.description}</p>

      <p className='text-sm font-medium text-gray-700 mb-2'>
        Company: {job?.company?.name || 'N/A'}
      </p>

      <div className='flex flex-wrap gap-2 my-3'>
        <Badge variant="ghost" className="text-blue-700 font-bold">
          {job?.position} Positions
        </Badge>
        <Badge variant="ghost" className="text-[#F83002] font-bold">
          {job?.jobType}
        </Badge>
        <Badge variant="ghost" className="text-[#7209b7] font-bold">
          {job?.salary} LPA
        </Badge>
      </div>

      <div className='flex gap-3 mt-4'>
        <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">
          View Details
        </Button>
        <Button className="bg-[#7209b7] text-white">Save</Button>
      </div>
    </div>
  );
};

export default Job;
