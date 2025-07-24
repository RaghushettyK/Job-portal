import React from 'react';

const AppliedJobTable = ({ allAppliedJobs = [] }) => {
  return (
    <div style={{ maxWidth: "800px", margin: "30px auto" }}>
      <h3>A list of your applied jobs</h3>
      {allAppliedJobs.length === 0 ? (
        <p>You haven't applied to any job yet.</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th>Date</th>
              <th>Job Role</th>
              <th>Company</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allAppliedJobs.map((appliedJob) => (
              <tr key={appliedJob._id}>
                <td>{appliedJob?.createdAt?.split("T")[0]}</td>
                <td>{appliedJob?.job?.title}</td>
                <td>{appliedJob?.job?.company?.name}</td>
                <td>
                  <span
                    style={{
                      padding: "5px 10px",
                      color: "white",
                      backgroundColor:
                        appliedJob.status === 'rejected'
                          ? 'red'
                          : appliedJob.status === 'pending'
                          ? 'gray'
                          : 'green',
                      borderRadius: "5px"
                    }}
                  >
                    {appliedJob.status?.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AppliedJobTable;
