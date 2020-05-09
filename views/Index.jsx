const React = require('react');

class Index extends React.Component {
    render() {
        
         return (
           <div>
             <h1>TO DO LIST</h1>
             <br />
             <h3>There Is No To Dos Yet</h3>
           </div>

          <form action="/todos/_method=PUT`} method=POST">
              <input type="text" name="todo"/> <input type="submit" value="Submit Todo"/>
          </form>
           <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
              <input type="submit" value="delete"/>
           </form>


         );
    }
}

module.exports = Index;