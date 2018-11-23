import React from 'react';
import AppNavBar from './AppNavBar';
import SideBar from './SideBar';
class Posts extends React.Component {
    constructor(){
        super();
        this.state = {posts: []};
    }
    componentDidMount(){
        fetch('/api/posts')
        .then(response => response.json())
        .then(data => this.setState({posts: data.posts}))
        .catch(err => console.log(err));
    }
    render(){
        return(
            <div><AppNavBar></AppNavBar>
            <div id="strongerwrapper">
                <SideBar></SideBar>
                <div id="wrapper">
                    <div id="postsmain">
                        {this.state.posts && this.state.posts.map(({post_id, title, content}) => (
                        <div key={post_id}>
                            <h1>{title}</h1>
                            <h2>{content}</h2>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Posts;