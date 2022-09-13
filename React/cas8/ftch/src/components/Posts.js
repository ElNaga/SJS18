export const Posts = ({posts}) => (
    <div>
        { 
            posts 
            ? posts.map(post => <Post key={post.id} {...post} />)
            : <h3>Loading Posts</h3> 
        }
    </div>
)

const Post = ({id, title, body}) => (
    <div style={{ 
            border : "1px solid black", 
            padding: "10px",
            margin:"10px",
            textAlign: "center"
        }}>
        <p> Id      : {id}   </p>
        <p> Title   : {title}</p>
        <p> Body    : {body} </p>
    </div>
)