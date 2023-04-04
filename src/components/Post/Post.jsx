import React from 'react';
import styles from './post.module.css'

const Post = (props) => {
    return (
        <div>
            <p className={styles.title}>{props.post.title}</p>
            <p className={styles.published}>{props.post.published ? "Опубликованно" : "Не опубликованно"}</p>
            <button onClick={() => props.togglePublished(props.post.id, props.post.published)}>
                {props.post.published ? "В ожидании" : "Опубликовать"}
            </button>
            <button onClick={() => props.deletePost(props.post.id)}>
                Удалить
            </button>
          </div>
    );
};

export default Post;