import React from 'react';
import { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { loadData } from "../util/loadData";
import Issue from './Issue';


class IssueList extends Component {
        state = {
            issues: [],
        };
        
    async componentDidMount(){
        const issues = await loadData(
        `https://api.github.com/repos/facebook/create-react-app/issues`
        );
            
        this.setState({
            issues,
        });
            
    }

    render(){
        const { issues } = this.state;
        return (
            <>
                {!!issues.length ? (
                    <>
                        <h1>GitHub Issues list</h1>
                        <Route exact path="/">
                            <ul>
                        {issues.map((issue) => {
                            return (
                                <li key={issue.id}>
                                    {issue.title}
                                    <Link to={`/issue/${issue.number}`}>View Details</Link>
                                </li>
                                );
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
                )}
            </>
        );
    }
}

export default IssueList;