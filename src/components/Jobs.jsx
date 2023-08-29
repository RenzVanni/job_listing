import { useState } from "react";
import data from "../data.json";
import Filter from "./Filter";

function Jobs() {
  const [jobs, setJobs] = useState(data);

  return (
    <>
      <Filter />
      {jobs.map((jobs) => (
        <div
          className="job_container"
          key={jobs.id}
          style={{
            borderLeft: jobs.featured ? "5px solid var(--primary-1)" : "none",
          }}
        >
          <div className="left_container">
            <div className="job_logo">
              <img src={jobs.logo} alt="logo" />
            </div>
            <div className="after_logo">
              <div className="company">
                <h5>{jobs.company}</h5>
                <div className="tags">
                  {jobs.new && (
                    <div className="new_tag">
                      <h4>NEW!</h4>
                    </div>
                  )}
                  {jobs.featured && (
                    <div className="featured_tag">
                      <h4>FEATURED</h4>
                    </div>
                  )}
                </div>
              </div>

              <h5 className="position">{jobs.position}</h5>

              <h5 className="time">
                {jobs.postedAt} &#8226; {jobs.contract} &#8226; {jobs.location}
              </h5>
            </div>
          </div>

          <hr />

          <ul>
            {jobs.languages.map((lang) => {
              return <li key={lang}>{lang}</li>;
            })}
            {jobs.tools.map((tools) => {
              return <li key={tools}>{tools}</li>;
            })}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Jobs;
