import React, { useEffect, useState, useContext } from "react";
import { languageContext } from "../Context/languageContext";
import { Link } from "react-router-dom";

const ReposSection = () => {
  const { lang } = useContext(languageContext);

  // to get two repos with max stars
  const [repos, setRepos] = useState([]);

  const findMaxStars = (repos) => {
    let max = [null, null];
    for (let repo of repos) {
      if (
        max[0] === null ||
        repo["stargazers_count"] > max[0]["stargazers_count"]
      ) {
        max[1] = max[0];
        max[0] = repo;
      } else if (
        max[1] === null ||
        repo["stargazers_count"] > max[1]["stargazers_count"]
      ) {
        max[1] = repo;
      }
    }
    return max;
  };

  useEffect(() => {
    fetch("https://api.github.com/users/a7mad1112/repos")
      .then(async (res) => await res.json())
      .then((data) => findMaxStars(data))
      .then((maxArr) => setRepos(maxArr));
  }, []);

  return (
    <section className="repos-section text-center mb-5">
      <div className="container">
        <h2 className="section-heading text-white">Top Repositories</h2>
        <div className="d-flex align-items-center justify-content-center">
          {repos.map((repo) => (
            <Link
              target="_blank"
              key={repo.id}
              className="skill text-decoration-none fw-bold p-1"
              to={`${repo.html_url}`}
            >
              <span>{repo.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReposSection;
