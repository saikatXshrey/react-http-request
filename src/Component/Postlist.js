import React, { Component } from "react";
import axios from "axios";

class Postlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: "" //for error message now its empty but if http requests fails then we will store the error message here !!
        }; //state
    } //constructor

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response);
                this.setState({ posts: response.data }); //setting state
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    error: "Error in retrieving  data from the server !!"
                });
            }); //http request
    }

    render() {
        const { posts, error } = this.state; //destructure the state property
        return (
            <div>
                List of posts if(posts.length!==0)
                {posts.map((p) => {
                    return <div key={p.id}>{p.title}</div>;
                })}
        else return {null}
        if(error.length()!==0)
                {<div>{error}</div>}
            </div>
        );
    } //render
} //class

export default Postlist;
