import React, { Component } from 'react'
import Post from './Post';

class Posts extends Component {

    state = {
        posts: [],
        users: []

    }


    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(json =>
                this.setState({ posts: json }))

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(json =>
                this.setState({ users: json }))
    }


    render() {
        const { posts, users } = this.state
        return (
            <div className='posts'>
                <div className="posts__right">
                    {users.map(user => (
                        posts.map(post => (
                            post.userId === user.id ?
                                <Post key={post.id} users={user} posts={post} />
                                : null

                        ))
                    ))}
                </div>
            </div>

        )
    }
}

export default Posts
