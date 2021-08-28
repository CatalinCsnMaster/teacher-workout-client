import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'

const useStyles = Material.makeStyles(theme => ({
  button: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: '700',
    textTransform: 'none',
    '&:active': { background: theme.palette.background.main },
    [theme.breakpoints.only('sm')]: { width: '30%' },
  },
}))

export const Button = ({ children }) => <Material.Button className={useStyles().button}>
  {children}
</Material.Button>

Button.propTypes = { children: PropTypes.node.isRequired }