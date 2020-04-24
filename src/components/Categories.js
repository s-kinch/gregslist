import React from 'react'

const column = (categories) => <div className="column">
        {
            categories.map(({categoryName, listings}) => <li className="category" key={categoryName}>
                    <div className="categorynamecontainer"><h3>{categoryName.toLowerCase()}</h3></div>
                    <table>
                        <tbody>
                            {listings.map(({name, number}) => {
                                const arr = name.toLowerCase().split(', ')
                                return <tr key={name}>
                                    <td>{[arr[0]].concat(...arr.slice(1).map(e => [<br/>, e]))}</td>
                                    <td>{number}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </li>
            )
        }
    </div>

export default ({categories}) => <div className="categories">
    <div className="city"><h2>hamilton, OH</h2></div>
    <ul className="categorylist">
        {column(categories.slice(0, categories.length / 2))}
        {column(categories.slice(categories.length / 2))}
    </ul>
</div>
    