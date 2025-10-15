import React from "react";
import Tree from '../assets/tree.jpg';
import '../assets/css/main.css';

const First = () =>{
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Father's Name</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>Session</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>BCA</td>
                        <td>A</td>
                        <td>2023-26</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>BCA</td>
                        <td>A</td>
                        <td>2023-26</td>
                        <td>Active</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default First