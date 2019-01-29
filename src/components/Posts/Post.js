import React, { Component } from 'react'

class Post extends Component {

    state = {

        showPostInfo: true

    }
    onShowClick = e => {

        this.setState({
            showPostInfo: !this.state.showPostInfo
        });
        if (this.state.showPostInfo) {
            document.body.style.background = 'rgba(0, 0, 0, 0.75)'
        } else {
            document.body.style.background = '#fff'
        }
    };

    render() {

        const { id, name } = this.props.users;
        const { title, body } = this.props.posts;
        const { showPostInfo } = this.state;
        return (
            <div className='posts-info' key={id}>
                <h2 className='posts-info__heading'>{title} <i className="fas fa-eye" onClick={this.onShowClick} ></i></h2>
                {showPostInfo ? null :
                    <div className='posts-info__module'>
                        <i className="far fa-times-circle" onClick={this.onShowClick} ></i>
                        <p className='posts-info__module-text'>{body}</p>
                        <strong>By {name}</strong>
                    </div>}


            </div>
        )
    }
}

export default Post
