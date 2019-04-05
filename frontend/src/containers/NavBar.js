import React, {
  Component
} from 'react'
import {
  Menu,
  Segment,
  Input,
  Form
} from 'semantic-ui-react'
import {
  withRouter
} from 'react-router-dom'
import {
  Formik
} from 'formik'

class NavBar extends Component {
  state = {
    activeItem: null,
  }

  componentWillMount() {
    const { category } = this.props.match.params
    this.setState({
      activeItem: category
    })
  }

  handleCategoryClick = (e, item) => {
    e.preventDefault()
    this.setState({
      activeItem: item.name
    })

    this.props.history.push(`/${item.name}`)
  }

  render() {
    const {
      activeItem
    } = this.state
    const {
      category
    } = this.props

    const placeholder = category !== 'people' ? (category === 'planets' ? `Search by homeworld` : `Search by species`) : `Search by name`

    return ( 
      <Segment vertical style = {
        {
          display: 'flex',
          padding: '14px',
          border: '0',
          borderBottom: '1px solid #eeeef0',
        }
      } >

      <Menu secondary style = {
        {
          margin: '0 0'
        }
      } >
      <Menu.Item name = 'people'
      active = {
        activeItem === 'people'
      }
      onClick = {
        this.handleCategoryClick
      }
      /> 
      <Menu.Item name = 'planets'
      active = {
        activeItem === 'planets'
      }
      onClick = {
        this.handleCategoryClick
      }

      />

      <Menu.Item name = 'species'
      active = {
        activeItem === 'species'
      }
      onClick = {
        this.handleCategoryClick
      }
      />

      </Menu>

      <Formik initialValues = {
        {
          searchString: ""
        }
      }
      onSubmit = {
        (e, actions) => {
          this.props.history.push(`/${category}/${e.searchString}`)
          actions.resetForm()
        }
      }
      render = {
        ({
          values,
          setFieldValue,
          isSubmitting,
          handleSubmit,
          handleBlur
        }) => ( <Form style = {
            {
              display: 'flex',
              width: '100%',
              margin: '0 .35714286em'
            }
          } >
          <Form.Field style = {
            {
              width: '100%',
            }
          } >
          <Input onKeyDown = {
            (e) => {
              if (e.keyCode === 13 && !isSubmitting) {
                handleSubmit(e)
              }
            }
          }
          onChange = {
            (e, {
              value
            }) => setFieldValue('searchString', value)
          }
          name = "message"
          value = {
            values.searchString
          }
          fluid 
          placeholder={placeholder}
          icon = 'search'
          />
          </Form.Field>

          </Form>
        )
      }
      /> 
      </Segment>
    )
  }
}

export default withRouter(NavBar)