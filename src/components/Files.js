import React from 'react';
import { Link } from 'react-router-dom';

const Files = ({ files, index }) => 
    <div>

        {
            files.map(file => (
                <div>
                    {file.name}
                </div>
            ))
        }

        <div>




        <Link to="/files?_page=7">First</Link> | 
        <Link to="/files?_page=7">Prev</Link> | 
        <Link to="/files?_page=7">Next</Link> | 
        <Link to="/files?_page=7">Last</Link>



        </div>

    </div>;

export default Files;



/*


[
                '/files/page/:pageId',
                '/files/page/:pageId/sort/:sortby/order/:order',
                '/files/search/:attr/like/:query'
            ]*/



