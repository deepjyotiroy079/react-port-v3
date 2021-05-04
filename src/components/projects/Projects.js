import React, { useEffect, useState } from "react";
import { ExternalLink } from "react-feather";
import { Link, BrowserRouter as Router } from "react-router-dom";
require("dotenv").config();

export const Projects = () => {
  let [githubData, setGithubData] = useState([]);
  /**
   * fetching github data using graphql api.
   */
  useEffect(() => {
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
        query PinnedRepos {
			viewer {
			  pinnedItems(first: 6) {
				edges {
				  node {
					... on Repository {
					  name
					  description
					}
				  }
				}
			  }
			}
		  }
      `,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.data.viewer.pinnedItems.edges)
        setGithubData(result.data.viewer.pinnedItems.edges);
        // githubData.map((x) => {
        //   console.log(x.node.name);
        // });
      });
  }, []);

  return (
    <>
      {githubData ? (
        <div className="projectCards">
          {githubData.map((project) => (
            <Router key={project.node.name}>
              <Link
                to={`/`}
                style={{
                  width: [
                    "calc(100% - 16px)",
                    "calc(80% - 16px)",
                    "calc(50% - 16px)",
                    "calc(33.3% - 16px)",
                  ],
                  margin: "8px",
                  minWidth: "340px",
                  maxWidth: "450px",
                  textDecoration: "none",
                }}
              >
                <div
                  className="projectCard"
                  style={{
                    display: `block`,
                    borderRadius: `3px`,
                    color: "black",
                    backgroundColor: "#eee",
                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 8px 0px",
                    padding: "15px",
                    ":hover": {
                      boxShadow: "rgba(0, 0, 0, 0.21) 0px 6px 16px 0px",
                    },
                    minHeight: "144px",
                    cursor: "pointer",
                  }}
                >
                  <div className="title" style={{ fontWeight: "bold" }}>
                    {project.node.name}
                    <span
                      style={{
                        float: "right",
                        marginTop: "-12px",
                        marginRight: "-7px",
                        fontSize: "15px",
                      }}
                    >
                      &#8599;
                    </span>
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "14px",
                      color: "#000",
                      fontWeight: 500,
                    }}
                  >
                    {project.node.description}
                  </div>
                </div>
              </Link>
            </Router>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
