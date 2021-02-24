import React from 'react'

export const PaginationPreviousNext = ({nextUrl,previousUrl,handle}) => {

    return(
        <div className={"d-flex justify-content-evenly"}>
            <nav aria-label={"previous next"}>
                <ul className={"pagination"}>
                    {previousUrl == null
                        ? <li className={"page-item disabled"}><a className={"page-link"} href="#" aria-disabled={"true"}>Previous</a></li>
                        :<li className={"page-item"}><a className={"page-link"} href="#" onClick={() => handle(previousUrl)}>Previous</a></li>
                    }
                    {nextUrl == null
                        ? <li className={"page-item disabled"}><a className={"page-link"} href="#">Next</a></li>
                        : <li className={"page-item"}><a className={"page-link"} href="#" onClick={() => handle(nextUrl)}>Next</a></li>
                    }
                </ul>
            </nav>
        </div>
    )
};
