import React, { Component } from 'react'
import { Menu, Segment, Dropdown } from 'semantic-ui-react'
import {
  withRouter
} from 'react-router-dom'

class NavBar extends Component {
  state = { 
    activeItem: null,
    value: null
  }

  componentWillMount() {
    const { category } = this.props.match.params
    this.setState({
      activeItem: category
    })
  }

  handleItemClick = (e, item) => {
    e.preventDefault()
    this.setState({
      activeItem: item.name
    })

    this.props.history.push(`/${item.name}`)
  }
  handleChange=(value)=>{
    this.setState({
       value
    })
    this.props.history.push(`/${this.props.match.params.category}/search=${value}`)
    
  }

  render() {
    const { activeItem , value} = this.state
    const {fetchMore, loading, data, category} = this.props
    if(!loading && !!data && !!data.next) {

      fetchMore({
        variables: {
          url: data.next
        },
        updateQuery: (prev, { fetchMoreResult}) => {
          if (!fetchMoreResult) {
              return prev;
          }
          
          return {
            ...prev,              
            [category]: {
              next: fetchMoreResult[category].next,
              results: [...prev[category].results, ...fetchMoreResult[category].results],
              __typename: `${category.charAt(0).toUpperCase() + category.slice(1)}Response`
            }
          }
        }
      })
    }

  const searchOptions = data && data.results ? data.results.map(p => ({key: p.url, value: p.name, text: p.name})) : []
  console.log('loading?', loading)

  return (
    <Segment vertical style={{display: 'flex', padding: '14px', border: '0'}}>

          <Menu secondary style={{margin: '0 0'}}>
              <Menu.Item name='people' active={activeItem === 'people'} 
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='planets'
                active={activeItem === 'planets'}
                onClick={this.handleItemClick}

              />

              <Menu.Item
                  name='species'
                  active={activeItem === 'species'}
                  onClick={this.handleItemClick}
              />
            
          </Menu>
          <Dropdown
            placeholder='Search'
            value={value}
            onChange = {(e, {value, category }) => this.handleChange(value, category)}
            loading={loading}
            clearable
            category={category}
            fluid
            search
            selection
            options={
              searchOptions
              }
            style={{
              margin: '0 .35714286em'
            }}
          />
        </Segment>         
    )
  }
}

export default withRouter(NavBar)