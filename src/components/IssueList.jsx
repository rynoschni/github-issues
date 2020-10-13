import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Route, Link, useRouteMatch } from 'react-router-dom';
import Issue from './Issue';


class IssueList extends Component{
        state = {
            issuesData: [],
        };
        
        loadData = async () =>{
            const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues/');
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
            <div>
                <h1>This is the the Issues</h1>
                <nav>
                {
                issuesData.map((issue) =>(
                    <Link to={`/issue/${issue.number}`} key={`issue-${issue.number}`}/>

                    ))
        }
                
                </nav>
                <Route path={`${issue.url}/:id`}>
                <Issue posts={issue} />
                </Route>


            </div>
            
            
        );
        }

}

export default IssueList;