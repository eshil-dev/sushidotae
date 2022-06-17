import React from  'react';

class PageNotFound extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
           <div className='text-center'>
            <h1>Uh!</h1>
            <h2>Soemthing went wrong</h2>
            <h4>Please try Again</h4>
           </div>
        );
    }
}

export default PageNotFound;