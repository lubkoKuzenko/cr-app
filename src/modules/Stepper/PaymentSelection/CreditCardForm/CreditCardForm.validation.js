export const validate = values => {
  const errors = {}

  function normalizeYear(year){
    // Century fix
    var YEARS_AHEAD = 20;
    if (year<100){
        var nowYear = new Date().getFullYear();
        year += Math.floor(nowYear/100)*100;
        if (year > nowYear + YEARS_AHEAD){
            year -= 100;
        } else if (year <= nowYear - 100 + YEARS_AHEAD) {
            year += 100;
        }
    }
    return year;
  }
  
  function checkExp(exodate){
    var match=exodate.match(/^\s*(0?[1-9]|1[0-2])\/(\d\d|\d{4})\s*$/);
    if (!match){
        errors.exodate = "Input string isn't match the expiration date format or date fragments are invalid."
        return true;
    }
    var exp = new Date(normalizeYear(1*match[2]),1*match[1]-1,1).valueOf();
    var now=new Date();
    var currMonth = new Date(now.getFullYear(),now.getMonth(),1).valueOf();
    if (exp<=currMonth){
        return true
    } else {
      return false
    }
  }

  if (!values.nameOnCard) {
    errors.nameOnCard = 'Required'
  } else if (values.nameOnCard.length > 15) {
    errors.nameOnCard = 'Must be 15 characters or less'
  }

  if (!values.cardNumber) {
    errors.cardNumber = 'Required'
  }

  if (!values.exodate) {
    errors.exodate = 'Required'
  } else if(checkExp(values.exodate)){
    errors.exodate = 'Incorrect expiration date'
  }

  if (!values.cvv) {
    errors.cvv = 'Required'
  } else if (values.cvv.length < 3 || values.cvv.length > 3) {
    errors.cvv = 'CVV code must have 3 digits'
  }

  return errors
}