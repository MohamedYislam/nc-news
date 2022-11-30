const ArticleQuery = ({setOrder, setSortBy}) => {
    return <div className = "query"> 
            <label htmlFor="sort_by">Sort: </label>
            <select onChange={(event) => setSortBy(event.target.value)}>
                <option value='created_at'>Date</option>
                <option value='votes'>Popular</option>
                <option value='comment_count'>Controversial</option>
            </select>

            <select onChange={(event) => setOrder(event.target.value)}>
                <option value='desc'>Descending</option>
                <option value='asc'> Ascending </option>
            </select>
    </div>
}

export default ArticleQuery