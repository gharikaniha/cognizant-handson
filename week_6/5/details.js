
import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ name, startDate, coach, trainer, status }) {
  const headingStyle = {
    color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{name}</h3>
      <dl>
        <dt>Started On</dt>
        <dd>{startDate}</dd>

        <dt>Coach</dt>
        <dd>{coach}</dd>

        {trainer && (
          <>
            <dt>Trainer</dt>
            <dd>{trainer}</dd>
          </>
        )}

        <dt>Status</dt>
        <dd>{status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
