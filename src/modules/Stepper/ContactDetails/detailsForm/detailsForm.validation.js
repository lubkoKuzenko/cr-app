export const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required'
  }

  if (!values.country) {
    errors.country = 'Required'
  } else if (values.country.length > 15) {
    errors.country = 'Must be 15 characters or less'
  }

  if (!values.streetaddress) {
    errors.streetaddress = 'Required'
  } else if (values.streetaddress.length > 15) {
    errors.streetaddress = 'Must be 15 characters or less'
  }

  if (!values.city) {
    errors.city = 'Required'
  } else if (values.city.length > 15) {
    errors.city = 'Must be 15 characters or less'
  }

  if (!values.zip) {
    errors.zip = 'Required'
  } else if (values.zip.length > 15) {
    errors.zip = 'Must be 15 characters or less'
  }

  return errors
}