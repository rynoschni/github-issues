import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Issue from './Issue';


class IssueList extends Component{
        state = {
            issuesData: [],
        };
        
        loadData = async () =>{
            const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
            const data = await response.json();
            return data;
        }
            
        
        async componentDidMount(){
            const issuesData = await this.loadData();
            
            this.setState({
                issuesData: issuesData,
            });
            
        }

        render(){
            // const {path, url} = useRouteMatch();
            const { issuesData } = this.state;
        return (
            <>
                {!!issuesData.length ? (
                    <>
                        <h1>GitHub Issues list</h1>
                        <Route exact path="/">
                            <ul>
                        {issuesData.map((issue) => {
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
                            <Issue issues={issuesData} />
                        </Route>
                    </>
                ) : (
                    <p>Fetching Issues ....</p>
                )
                }
            </>
        );
        }

}

export default IssueList;