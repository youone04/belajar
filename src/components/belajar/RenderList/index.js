
const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

const RenderList = () => {
    return(
        <>
        <p> Render List</p>
        {
            posts.map((dt , i) => {
                return(
                    <ul key={i}>
                        <li>
                           <p> Judul :{dt.title}</p>
                           <p> content :{dt.content}</p>
                        </li>
                    </ul>
                )
            })
        }
        </>
    )
}
export default RenderList;