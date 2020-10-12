import React from 'react';
import { Component } from 'react';
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
            const { issuesData } = this.state;
        return (
            <div>
                {
                issuesData.map((post) =>(
                    <Issue post={post} />
                ))
            }
            </div>
            
            
        );
        }

}

export default IssueList;