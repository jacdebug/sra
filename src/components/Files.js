import React from 'react';

const Files = ({ files }) => 
    <div>

        {
            files.map(file => (
                <div>
                    {file.name}
                </div>
            ))
        }

    </div>;

export default Files;
