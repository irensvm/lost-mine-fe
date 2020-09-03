import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



export default class BookCard extends Component {
  
  
  constructor(props) {
    super(props)
    
    console.log("props: ", props)
    
    this.state = {
      id: props.match.params.id,
      books: {}
    }
    
    this.getSingleBook = this.getSingleBook.bind(this)
    
  }
  
  getSingleBook() {
    axios.get("http://localhost:5000/api/books/" + this.state.id)
    .then(response => {
      this.setState({
        book: response.data
      })
    })
    
  }
  
  componentDidMount() {
    this.getSingleBook()
  }
  render() {
  // const classes = useStyles()
  // const[expanded, setExpanded] = React.useState(false)
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
    return (
      <div>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="bookavatar" className={classes.avatar}>
                R
          </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={this.state.book.title}
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image="xxxx"
            title={this.state.book.author}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.state.book.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              prestado?
        </CardContent>
          </Collapse>
        </Card>

      </div>
    )
  }
}




