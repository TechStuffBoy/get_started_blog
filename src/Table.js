import React from 'react';


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    /*
    return (
        // Note the / we gave here at the end
        // If its html element, then we will be giving like so, <tbody></tbody>
        // Note below, we just gave like <tbody />
        // Because this is not html, its JSX
        <tbody />
    )
    */

    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)} >Delete</button>
                </td>
            </tr>
        )
    })

    // In above method, we processed 
    return (
        <tbody>{rows}</tbody>
    );

}

const Table = (props) => {
    const { characterData, removeCharacter } = props;
    console.log(characterData);
    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}

export default Table