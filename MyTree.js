import React from 'react';
import Tree from 'react-d3-tree';

const MyTree = ({ data }) => {
    return (
        <div style={{ width: '100%', height: '800px', border: '2pt solid #01385E'}}>
            <Tree data={data} orientation='vertical'/>
        </div>
    );
};

export default MyTree;