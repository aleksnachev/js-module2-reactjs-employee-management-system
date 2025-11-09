export default function Pagination() {
    return (
        <div className="pagination position">
            <div className="limits">
                <span>Items per page:</span>
                <select name="limit" className="limit" defaultValue="5">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>

            <p className="pages">1 - 1 of 1</p>

            <div className="actions">
                <button className="btn" title="First Page">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="angles-left"
                        className="svg-inline--fa fa-angles-left"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4zM233.4 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L301.3 256l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-128-128C220.9 266.1 220.9 245.9 233.4 233.4z"
                        ></path>
                    </svg>
                </button>

                <button className="btn" title="Previous Page">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="angle-left"
                        className="svg-inline--fa fa-angle-left"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512"
                    >
                        <path
                            fill="currentColor"
                            d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
                        ></path>
                    </svg>
                </button>

                <button className="btn" title="Next Page">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="angle-right"
                        className="svg-inline--fa fa-angle-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512"
                    >
                        <path
                            fill="currentColor"
                            d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
                        ></path>
                    </svg>
                </button>

                <button className="btn" title="Last Page">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="angles-right"
                        className="svg-inline--fa fa-angles-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M438.6 278.6l-128 128C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L370.8 256 265.4 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C451.1 245.9 451.1 266.1 438.6 278.6zM214.6 278.6l-128 128C80.38 412.9 72.19 416 64 416s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L146.8 256 41.38 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C227.1 245.9 227.1 266.1 214.6 278.6z"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}