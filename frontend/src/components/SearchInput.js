import React from 'react'
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react'
import { Formik } from 'formik'
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  form: {
    display: 'flex',
    width: '100%',
    margin: '0 .35714286em'
  },
  formField: {
    width: '100%',
  }
})

const SearchInput = ({classes, history, category, placeholder}) => (
  <Formik initialValues = {
        {
          searchString: ""
        }
      }
      onSubmit = {
        (e, actions) => {
          history.push(`/${category}/${e.searchString}`)
          actions.resetForm()
        }
      }
      render = {
        ({
          values,
          setFieldValue,
          isSubmitting,
          handleSubmit,
        }) => ( 
        
          <Form className={classes.form}>
          <Form.Field className={classes.formField}>
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
)

SearchInput.propTypes = {
  classes: PropTypes.object.isRequired, 
  history: PropTypes.object.isRequired, 
  category: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired, 
};

export default withStyles(styles)(SearchInput)