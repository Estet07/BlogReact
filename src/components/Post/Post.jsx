import React from 'react';
import styles from './post.module.css'

const Post = (props) => {
    return (
        <div>
            <p className={styles.title}>{props.post.title}</p>
            <p className={styles.published}>{props.post.published ? "Опубликованно" : "Не опубликованно"}</p>
          </div>
    );
};

export default Post;