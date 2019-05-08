import React from "react"
import "./SearchBar.css"

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
}



class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            term: "",
            location: "",
            sortBy: "best_match",
        }

        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSortByChange = this.handleSortByChange.bind(this)
        this.enterkeyPressed = this.enterkeyPressed.bind(this)
    }

    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) return "active"
        return ""
    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption })
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value })
    }

    handleLocationChange(event) {
        this.setState({ location: event.target.value })
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
        event.preventDefault()
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            const sortByOptionValue = sortByOptions[sortByOption]
            return <li key={sortByOptionValue} 
            className={this.getSortByClass(sortByOptionValue)}
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
            </li>
        })
    }

    enterkeyPressed(e) {
        if (e.keyCode === 13) {
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
        }
    }

    render() {
        return (
            <div className="SearchBar"><div className="SearchBar-sort-options">
                <ul>
                  {this.renderSortByOptions()}
                </ul>
              </div>
              <div className="SearchBar-fields">
                <input onChange={this.handleTermChange} placeholder="Search Businesses" onKeyDown={this.enterkeyPressed} />
                <input onChange={this.handleLocationChange} placeholder="Where?" onKeyDown={this.enterkeyPressed} />
              </div>
              <div className="SearchBar-submit">
                <a href="#.com" onClick={this.handleSearch}>Let's Go</a>
              </div>
            </div>
        )
    }
}

export default SearchBar
