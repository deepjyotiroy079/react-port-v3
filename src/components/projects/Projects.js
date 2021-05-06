import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
require('dotenv').config();

export const Projects = () => {
    const url = 'https://api.github.com/graphql';
    let [githubData, setGithubData] = useState([]);
    /**
     * fetching github data using graphql api.
     */
    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
                url
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
                <Grid container spacing={2}>
                    {githubData.map((project) => (
                        <Grid item xs={12} md={6}>
                            {/* <Paper>{co.node.name}</Paper> */}
                            <Router onC>
                                <a
                                    rel="nonreferrer"
                                    href={project.node.url}
                                    target="_blank"
                                    style={{
                                        width: [
                                            'calc(100% - 16px)',
                                            'calc(80% - 16px)',
                                            'calc(50% - 16px)',
                                            'calc(33.3% - 16px)',
                                        ],
                                        // margin: "8px",
                                        minWidth: '340px',
                                        maxWidth: '450px',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <div
                                        className="projectCard"
                                        style={{
                                            display: `block`,
                                            borderRadius: `3px`,
                                            color: '#fff',
                                            backgroundColor: `#192734`,
                                            boxShadow:
                                                'rgba(0, 0, 0, 0.15) 0px 3px 8px 0px',
                                            padding: '15px',
                                            minHeight: '144px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <div
                                            className="title"
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            {project.node.name}
                                            <span
                                                style={{
                                                    float: 'right',
                                                    marginTop: '-12px',
                                                    marginRight: '-7px',
                                                    fontSize: '15px',
                                                }}
                                            >
                                                &#8599;
                                            </span>
                                        </div>
                                        <div
                                            style={{
                                                marginTop: '10px',
                                                fontSize: '16px',
                                                color: `#fff`,
                                                fontWeight: 400,
                                            }}
                                        >
                                            {project.node.description}
                                        </div>
                                    </div>
                                </a>
                            </Router>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <p>Getting Projects...</p>
            )}
        </>
    );
};
