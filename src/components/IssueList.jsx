import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { loadData } from "../utils/loadData";
import Issue from './Issue';
import { Title } from "bloomer";

const IssueList = props => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
            (async function () {
                const issues = await loadData(
                    `https://api.github.com/repos/facebook/create-react-app/issues`
                );
                setIssues(issues);
            })();
    }, [setIssues]);

    return (
        <>
            {!!issues.length ? (
                <>
                    <Title isSize={2} tag='h1'>
                        GitHub Issues list
                    </Title>
                    <Route exact path="/">
                        <ul>
                        {issues.map((issue) => {
                        return (
                            <li key={issue.id}>
                                {issue.title}
                                <Link to={`/issue/${issue.number}`}>View Details</Link>
                            </li>);
                    })}
                    </ul>
                    </Route>
                    <Route path={'/issue/:issue_number'}>
                        <Link to="/">Return to List</Link>
                        <Issue issues={issues} />
                    </Route>
                </>
            ) : (
                <p>Fetching Issues ....</p>
            )
            }
        </>
    );

};

export default IssueList;