const PostCard = ({ post }) => {  //this component takes a prop called post 
    return (
      <div className="post-card">   
        <h4>{post.author}</h4>    
        <img className="postcardimg" src={post.download_url} alt={post.author} />  
      </div> //author and url are used to display the image and the name
    );
  };
  export default PostCard;