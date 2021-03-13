import { makeStyles, TextField, TextFieldProps } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    padding: '10px 14px',
  },
  root: {
    borderColor: '#E2E2E2',
    borderRadius: 8,
    height: 40,
  },
  focus: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#1C1C2E !important',
    }
  },
  error: {
    borderColor: '#FF6161',
  },
  labelRoot: {
    '&>label': {
      transform: 'translate(14px, 12px) scale(1)',
      '&.Mui-focused': {
        color: '#1C1C2E',
      }
    }
  }
})

const Input = (props: TextFieldProps): JSX.Element => {
  const classes = useStyles()

  return <TextField
    {...props}
    classes={{ ...props.classes, root: classes.labelRoot }}
    InputProps={{ classes: {
      input: classes.input,
      root: classes.root,
      focused: classes.focus,
      error: classes.error
    } }}
    fullWidth variant='outlined'
  />
}

export default Input